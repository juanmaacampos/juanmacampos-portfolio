# Juan Manuel Campos - Personal Portfolio

![Portfolio Preview](assets/img/preview.png)

Welcome to my personal portfolio website! This project showcases my skills, projects, and journey as a Systems Engineering student with a passion for frontend and now experimenting with backend. The website is fully responsive, supports multiple languages (English, Spanish and now portuguese), and is hosted on GitHub Pages.

---

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

This portfolio serves as a digital resume to highlight my technical skills, projects, and contact information. It was built from scratch using  web technologies and reflects my interest in frontend and a little of backend. The site includes sections for my background, skills, projects, and a simple (still no backend) contact form, with dynamic language switching for accessibility.

The portfolio is hosted on GitHub Pages and can be accessed at [https://juanmaacampos.github.io/juanmacampos-portfolio](https://juanmaacampos.github.io/juanmacampos-portfolio)

---

## Features

- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Multilingual Support**: Switch between English and Spanish with dynamic content updates.
- **Interactive Elements**: Animated dividers, hover effects, and a mobile-friendly menu toggle.
- **Contact Form**: Simple form to send messages via JS email (expecting to be integrated with flask soon).
- **Project Showcase**: Detailed descriptions of projects with links to GitHub repositories (not finished).
- **SEO and Social Media**: Metadata for search engines and social media previews.

---

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (with Flexbox and Grid)
  - JavaScript
- **Libraries and Frameworks**:
  - [Font Awesome](https://fontawesome.com/) for icons
  - [Google Fonts](https://fonts.google.com/) (Inter font)
- **Tools**:
  - Git for version control
  - GitHub for hosting and deployment
  - GitHub Pages for static site hosting
- **Other**:
  - JSON for language translations

---

## Setup Instructions

To run this project locally or contribute to it, follow these steps:

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/juanmaacampos/juanmacampos-portfolio.git
   cd juanmacampos/portfolio
   ```

2. **Open the project**:
   - Open `index.html` in a web browser to view the site locally.
   - Alternatively, use a local development server (e.g., VS Code's Live Server extension) for a better experience:
     ```bash
     npx live-server
     ```

3. **Modify translations (optional)**:
   - Edit `assets/translations.json` to add or update language translations.
   - Ensure the JSON structure matches the existing format.

4. **Deploy to GitHub Pages (optional)**:
   - Push changes to the `main` branch.
   - Enable GitHub Pages in the repository settings:
     - Go to **Settings** > **Pages** > Set source to `main` and folder `/ (root)`.
     - The site will be available at `https://juanmaacampos.github.io/juanmacampos-portfolio`.

---

## Usage

- **Navigate the site**:
  - Use the  navigation bar to jump to sections (`About`, `Skills`, `Projects`, `Contact`).
  - On mobile devices, click the menu icon (`☰`) to toggle the navigation menu.

- **Switch languages**:
  - Use the dropdown in the header to switch between English, Spanish or Portuguese.
  - Language preferences are saved in the browser's local storage.

- **Explore projects**:
  - Click on project titles or images to view detailed pages (e.g., `project1.html`, `project2.html`).
  - Visit GitHub links for source code (expecting to upload the projects soon).

- **Contact**:
  - Fill out the contact form to send an email.
  - Alternatively, use the provided email, LinkedIn, or GitHub links.

---

## Project Structure

```plaintext
juanmacampos-portfolio/
├── assets/
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   ├── img/
│   │   ├── favicon.ico         # Favicon
│   │   ├── perfil.jpeg         # Profile picture
│   │   ├── preview.jpg         # Social media preview (not used yet)
│   │   ├── rasp.png            # Project image
│   │   └── server.png          # Project image
│   ├── js/
│   │   └── script.js           # Main JavaScript (language toggle, animations)
│   └── translations.json       # Language translations
├── index.html                  # Main HTML file
├── project1.html               # Smart Inventory Control project page
├── project2.html               # Home Server project page
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore file (e.g., excludes .DS_Store, node_modules)
```

---

## Contributing

Contributions are welcome! If you'd like to improve the portfolio, fix bugs, or suggest features, please follow these steps:

## Expectatives of the project:

This project was made to demonstrate both skills, frontend but specially backend sooner. I have to upload this webpage using flask and some other backend projects to github too!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

Feel free to reach out if you have questions, suggestions, or collaboration ideas:

- **Email**: [juanmanuelccampos@gmail.com](mailto:juanmanuelccampos@gmail.com)
- **LinkedIn**: [juan-manuel-campos](https://www.linkedin.com/in/juan-manuel-campos-83abb9326/)
- **GitHub**: [juanmaacampos](https://github.com/juanmaacampos)

Thank you for visiting my portfolio!
