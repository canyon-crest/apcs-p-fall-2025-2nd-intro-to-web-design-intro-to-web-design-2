// Make every visible element affected by a simple gravity simulation.
// This will detach elements from the document flow by setting them to
// position: fixed at their current screen positions and then animate
// them with a physics loop (gravity, bounce, wall collisions).

document.addEventListener('DOMContentLoaded', () => {
    // Elements will only become physics bodies when clicked.
    const excludeTags = new Set(['HTML', 'HEAD', 'META', 'TITLE', 'LINK', 'SCRIPT', 'STYLE', 'BODY']);
    const bodies = [];
    const activeSet = new WeakSet();

    // Physics parameters
    const GRAVITY = 2000; // px / s^2
    const BOUNCE = 0.6;   // energy retained on bounce
    let last = performance.now();

    function step(now) {
        const dt = Math.min(0.05, (now - last) / 1000); // cap dt for stability
        last = now;
    // page dimensions (use document scrollHeight so elements fall to page bottom)
    const pageWidth = Math.max(document.documentElement.scrollWidth, window.innerWidth);
    const pageHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);

        bodies.forEach(b => {
            // integrate
            b.vy += GRAVITY * dt;
            b.x += b.vx * dt;
            b.y += b.vy * dt;

            // floor collision (page bottom)
            if (b.y + b.h > pageHeight) {
                b.y = pageHeight - b.h;
                b.vy = -b.vy * BOUNCE;
                // small friction on ground
                b.vx *= 0.8;
                if (Math.abs(b.vy) < 30) b.vy = 0;
            }

            // left/right walls
            if (b.x < 0) { b.x = 0; b.vx = -b.vx * BOUNCE; }
            if (b.x + b.w > pageWidth) { b.x = pageWidth - b.w; b.vx = -b.vx * BOUNCE; }

            // write back to DOM
            b.el.style.left = Math.round(b.x) + 'px';
            b.el.style.top = Math.round(b.y) + 'px';
        });

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // Activate an element so it becomes a physics body
    function activateElement(el) {
        if (!el || activeSet.has(el)) return null;
        if (excludeTags.has(el.tagName)) return null;
        const cs = window.getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return null;

        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return null;

    el.style.boxSizing = 'border-box';
    // use absolute positioning so the element is positioned relative to the entire page
    el.style.position = 'absolute';
    el.style.left = (rect.left + window.scrollX) + 'px';
    el.style.top = (rect.top + window.scrollY) + 'px';
    el.style.width = rect.width + 'px';
    el.style.height = rect.height + 'px';
        el.style.margin = '0';
        el.style.transition = 'none';
        el.style.willChange = 'left, top';

        const body = {
            el,
            // page coordinates (include current scroll)
            x: rect.left + window.scrollX,
            y: rect.top + window.scrollY,
            vx: 0,
            vy: 30, // small initial downward push so it starts moving
            w: rect.width,
            h: rect.height
        };
        bodies.push(body);
        activeSet.add(el);
        return body;
    }

    // Clicking an element activates it; clicking anywhere also applies radial impulse
    document.addEventListener('click', (e) => {
        const target = e.target;
        // Try to activate the clicked element (or its closest ancestor that's not excluded)
        let el = target;
        while (el && excludeTags.has(el.tagName)) el = el.parentElement;
        if (el) activateElement(el);

        // apply impulse to all active bodies
        bodies.forEach(b => {
            const cx = b.x + b.w / 2;
            const cy = b.y + b.h / 2;
            const dx = cx - e.clientX;
            const dy = cy - e.clientY;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const force = Math.min(3000, 60000 / (dist + 20));
            b.vx += (dx / dist) * (force / 1000);
            b.vy += (dy / dist) * (force / 1000);
        });
    });
});
