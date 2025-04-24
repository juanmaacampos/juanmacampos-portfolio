# Juan Manuel Campos - Personal Portfolio

![Portfolio Preview](assets/img/preview.png)

## Description

This is my personal portfolio website,that shows my skills, projects, and professional experience. The site is built using HTML, CSS, and JavaScript, featuring a modular design with separate project pages, smooth animations, multilingual support, and a responsive layout. It serves as a professional hub to display my work and connect with potential employers or collaborators.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Adapts to various screen sizes using modular CSS, including optimization for iphone browser. (`base.css`, `header.css`, `style.css`).
- **Multilingual Support**: Supports translations via `translations.js` and `translations.json`.
- **Interactive UI**: Includes animations (`animations.js`), tabbed navigation (`tabs.js`), and smooth navigation (`navigation.js`).
- **Project Showcase with modals**: Multiple project pages (`project1.html`, `project2.html`, etc.) for detailed project descriptions showed with modals for a better user experience.
- **Contact Form**: Functional contact form handled by `contact.js`.
- **Assets**:
  - Favicon (`favicon.ico`) for branding.
  - Images (`portfolio.jpeg`, `preview.png`, etc.) for visual content.
  - Downloadable CV (`Juan Manuel Campos CV.pdf`).

## Installation

To run this portfolio locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/juanmaacampos/juanmacampos-portfolio.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd juanmacampos-portfolio
   ```

3. **Open the Project**:
   Since this is a static website, no additional dependencies are required. Simply open the `index.html` file in a web browser:
   ```bash
   open index.html
   ```
   Alternatively, use a local development server for a better experience (e.g., with VS Code Live Server or `http-server`):
   ```bash
   npx http-server
   ```
   Then navigate to `http://localhost:8080` in your browser.

## Usage

1. **View the Portfolio**:
   - Open the website in a browser to explore the main page (`index.html`).
   - Navigate to individual project pages (`project1.html`, `project2.html`, etc.) to view detailed project descriptions.
   - Use the contact form to send messages vie js email (handled by `contact.js`).
   - Switch languages if supported (via `translations.js` and `translations.json`).

2. **Customize the Content**:
   - Edit `index.html` and project pages (`project1.html`, etc.) to update personal information or project details.
   - Modify CSS files in the `css/modules` directory (`base.css`, `header.css`, `style.css`) to adjust the design.
   - Update JavaScript files in the `js/modules` directory (`animations.js`, `navigation.js`, etc.) for additional functionality.
   - Add or update translations in `translations.json` and adjust `translations.js` accordingly.

3. **Deploy the Portfolio**:
   - Host the site on platforms like GitHub Pages, Netlify, or Vercel.
   - For GitHub Pages:
     - Push the repository to GitHub.
     - Go to the repository settings, enable GitHub Pages, and select the `main` branch.
     - Access the live site at `https://juanmaacampos.github.io/juanmacampos-portfolio`.

## Project Structure

```
juanmacampos-portfolio/
├── assets/
│   ├── css/
│   │   └── modules/
│   │       ├── base.css        # Base styles for the site
│   │       ├── header.css      # Styles for the header section
│   │       └── style.css       # Main stylesheet
│   ├── downloads/
│   │   └── Juan Manuel Campos CV.pdf  # Downloadable CV
│   └── img/
│       ├── favicon.ico         # Favicon for the site
│       ├── portfolio.jpeg      # Portfolio image
│       ├── preview.png         # Preview image
│       ├── rasp.png            # Raspberry Pi-related image
│       ├── server.png          # Server-related image
│       └── todo.png            # To-do app image
├── js/
│   └── modules/
│       ├── animations.js       # Animation scripts
│       ├── contact.js          # Contact form functionality
│       ├── navigation.js       # Navigation functionality
│       ├── projects.js         # Project-related scripts
│       ├── tabs.js             # Tabbed navigation
│       ├── translations.js     # Translation handling
│       └── script.js           # Main JavaScript file
├── projects/
│   ├── project1.html           # Project 1 page
│   ├── project2.html           # Project 2 page
│   ├── project3.html           # Project 3 page
│   └── project4.html           # Project 4 page
├── translations.json           # Translation data
├── index.html                  # Main portfolio page
└── README.md                   # Project documentation
```

## Technologies Used

- **HTML5**: Structure and semantics of the website.
- **CSS3**: Modular styling with `base.css`, `header.css`, and `style.css`.
- **JavaScript**: Interactivity via modular scripts (`animations.js`, `contact.js`, etc.).
- **JSON**: Translation data stored in `translations.json`.
- **GitHub Pages** (optional): Deployment platform for hosting the live site.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add features just do it!


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details (if a license file exists, or specify if none is present).

## Contact

- **Name**: Juan Manuel Campos
- **GitHub**: [juanmaacampos](https://github.com/juanmaacampos)
- **Portfolio**: [My portfolio](https://juanmaacampos.github.io/juanmacampos-portfolio/)

Feel free to reach out for collaboration, feedback, or inquiries!
