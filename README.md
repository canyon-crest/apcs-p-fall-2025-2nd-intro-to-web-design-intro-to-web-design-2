[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_RdeQloh)
# 🌐 Unit 7 Project: HTML/CSS Personal Website

## 🎯 Project Objective
The **HTML/CSS Personal Website Project** demonstrates your ability to build a structured, visually appealing, and responsive web page using **HTML and CSS**.  
You will create a personal web page that reflects your creativity while showcasing front-end design skills such as layout organization, typography, responsive design, and proper file management.

---

## 🧱 Requirements

### 🧩 Content
- Write **three well-written paragraphs** about yourself.
- Include an **h1** title, an **h2** subtitle, and **three h3** section titles (one per paragraph).

### 🎨 HTML + CSS Structure
- Link the page to an **external stylesheet** named `styles.css`.
- Use the following **HTML elements**:
  - `<h1>`, `<h2>`, three `<h3>` headings  
  - three `<p>` paragraphs  
  - three `<img>` images (one per paragraph) with **wrapped text** (`float: left` or `float: right`)  
  - three `<a>` links to external sites, styled with `:link`, `:visited`, and `:hover`  
  - one outer `<div>` (e.g., `#container`) that defines page width  
  - one inner `<div>` for additional structure (e.g., `.sidebar` or `.info`)  
  - at least one **class rule** applied to each paragraph (e.g., `.bold`, `.highlight`, `.underline`)

### 🧾 CSS Requirements
- All styling must be in **`styles.css`** — no inline or internal CSS.
- Include CSS properties for:
  - `padding`, `margin`, `border`, `line-height`, and `font`
- Implement **three @media queries** for max-width breakpoints:
  - `1200px`, `992px`, and `768px`
- Style all links for interactivity using `:link`, `:visited`, and `:hover`.

### 🖼️ Design & Layout
- Use **sans-serif fonts** for readability.
- Choose harmonious colors using tools like [Coolors](https://coolors.co) or [Adobe Color Wheel](https://color.adobe.com/).
- Center the main container using `margin-left` and `margin-right: auto`.
- Use **percentage-based widths** for responsive scaling.
- Consider removing floats or stacking columns on smaller screens.

---

## 💡 Helpful Tips
- Use resources such as [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) or [W3Schools](https://www.w3schools.com/css/) for syntax help.
- Optimize images before uploading; keep them under 1 MB each.
- Maintain consistent spacing and typography throughout your design.
- Keep your code organized and readable — indent properly and include comments.

---

## 🧠 File & Folder Structure

```
/images
  ├── photo1.jpg
  ├── photo2.png
  └── photo3.jpg
index.html
styles.css
README.md
images.md
```

📁 All images must be stored in the `/images` folder.  
See **[images.md](./images.md)** for details about acceptable formats and naming conventions.

---

## 📱 Responsive Design Guidelines
- Use **fixed widths** for large screens (e.g., 1100 px → 800 px → 700 px).
- For smaller screens, use **percentage widths** to make content fluid.
- Remove or adjust floats inside media queries for mobile layouts.
- Test your design on desktop, tablet, and mobile preview sizes.

---

## 🧮 Scoring Rubric

| Category | Weight | Description |
|-----------|:------:|-------------|
| **Content & HTML/CSS** | **65%** |  |
|   • Three well-written paragraphs | 10% | Three original, complete paragraphs about yourself |
|   • Linked external stylesheet (`styles.css`) | 5% | Correct `<link>` tag |
|   • Headers & paragraphs (`h1`, `h2`, `h3`, `p`) | 5% | Proper structure and use |
|   • Images with wrapped text | 5% | Images aligned with floated text |
|   • Links to external pages | 5% | Three valid, styled links |
|   • Use of `<div>` tags (`container`, etc.) | 5% | Proper layout structure |
|   • Additional nested `<div>` tag | 5% | Adds depth (e.g., sidebar) |
|   • Class rules applied to paragraphs | 10% | At least one class per paragraph |
|   • CSS properties (padding, margin, etc.) | 10% | Correct use of layout rules |
|   • Advanced CSS (:hover, etc.) | 5% | Interactive CSS features |
| **Media Queries & Responsiveness** | **10%** |  |
|   • 3 @media queries for max-width | 10% | Breakpoints at 1200 px, 992 px, 768 px |
| **Overall Aesthetic & Extra Features** | **25%** |  |
|   • Color / layout / design quality | 15% | Visually balanced and readable |
|   • Above-and-beyond features | 10% | Animations, additional pages, etc. |

**Total: 100%**

---

## ✅ Submission Checklist
- [ ] `index.html` and `styles.css` are both committed to your repo.  
- [ ] At least **3 images** are stored in the `/images` folder.  
- [ ] No inline CSS is used.  
- [ ] Three @media queries are implemented.  
- [ ] The site is responsive on mobile screens.  
- [ ] All text and image sources are appropriate and professional.  
- [ ] Your GitHub Pages preview or Codespaces live preview displays correctly.

---

**🎓 Goal:**  
Deliver a clean, professional, and responsive single-page website that reflects your personal style and demonstrates mastery of HTML and CSS.
