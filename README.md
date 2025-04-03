# Portfolio Website

This is a modern and responsive portfolio website built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The website showcases personal information, work experience, projects, skills, testimonials, and a contact form. It also includes smooth animations powered by **Framer Motion** for an engaging user experience.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices.
- **Smooth Animations**: Interactive animations using Framer Motion for a lively experience.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Dynamic Sections**:
  - **Hero Section**: Introduction with a call-to-action.
  - **Experience Section**: Work experience and achievements.
  - **Projects Section**: Featured projects with links to live demos and GitHub repositories.
  - **Skills Section**: Technologies and tools used.
  - **Testimonials Section**: Feedback from clients and colleagues.
  - **Contact Section**: Contact form and social media links.
- **Interactive Sidebar**: Dynamic sidebar with active section highlighting and smooth scrolling.

---

## Technologies Used

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Strongly typed programming language for better code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React.

### UI Components
- **Lucide Icons**: Icon library for modern and customizable icons.
- **Custom Components**: Reusable components like `Button`, `Card`, `ScrollArea`, and `ThemeToggle`.

---

## Project Structure
Here’s a sample README.md file for your project:

```markdown
# Portfolio Website

This is a modern and responsive portfolio website built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The website showcases personal information, work experience, projects, skills, testimonials, and a contact form. It also includes smooth animations powered by **Framer Motion** for an engaging user experience.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices.
- **Smooth Animations**: Interactive animations using Framer Motion for a lively experience.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Dynamic Sections**:
  - **Hero Section**: Introduction with a call-to-action.
  - **Experience Section**: Work experience and achievements.
  - **Projects Section**: Featured projects with links to live demos and GitHub repositories.
  - **Skills Section**: Technologies and tools used.
  - **Testimonials Section**: Feedback from clients and colleagues.
  - **Contact Section**: Contact form and social media links.
- **Interactive Sidebar**: Dynamic sidebar with active section highlighting and smooth scrolling.

---

## Technologies Used

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Strongly typed programming language for better code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React.

### UI Components
- **Lucide Icons**: Icon library for modern and customizable icons.
- **Custom Components**: Reusable components like `Button`, `Card`, `ScrollArea`, and `ThemeToggle`.

---

## Project Structure

```
new_portfolio/
├── components/
│   ├── contact-form.tsx       # Contact form component
│   ├── experience-card.tsx    # Experience card component
│   ├── project-card.tsx       # Project card component
│   ├── skill-card.tsx         # Skill card component
│   ├── sidebar.tsx            # Sidebar navigation
│   ├── theme-toggle.tsx       # Dark mode toggle
│   └── ui/                    # Reusable UI components
├── pages/
│   ├── index.tsx              # Main entry point
│   └── _app.tsx               # App wrapper
├── public/
│   ├── images/                # Static images
│   └── favicon.ico            # Favicon
├── styles/
│   └── globals.css            # Global styles
└── README.md                  # Project documentation
```

---

## How It Was Developed

1. **Project Setup**:
   - Initialized the project using `create-next-app` with TypeScript.
   - Installed dependencies: `tailwindcss`, `framer-motion`, `lucide-react`.

2. **Styling**:
   - Configured Tailwind CSS for utility-first styling.
   - Created reusable UI components like `Button`, `Card`, and `ScrollArea`.

3. **Animations**:
   - Used Framer Motion for smooth animations on scroll and hover.
   - Added staggered animations for lists and grid items.

4. **Responsive Design**:
   - Used Tailwind's responsive utilities (`grid-cols-1`, `lg:grid-cols-2`, etc.).
   - Tested on multiple devices to ensure responsiveness.

5. **Dynamic Sidebar**:
   - Implemented a sidebar with active section highlighting using `IntersectionObserver`.
   - Added smooth scrolling for navigation.

6. **Dark Mode**:
   - Integrated a theme toggle using Tailwind's dark mode support.

7. **Deployment**:
   - Deployed the website on [Vercel](https://vercel.com/) for fast and reliable hosting.

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/new_portfolio.git
   cd new_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Deployment

This project is deployed on **Vercel**. To deploy your own version:
1. Push the code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically build and deploy the project.

---

## Screenshots

### Light Mode
![Light Mode Screenshot](public/screenshots/light-mode.png)

### Dark Mode
![Dark Mode Screenshot](public/screenshots/dark-mode.png)

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: [ojoemmanueltiwalade@gmail.com](mailto:ojoemmanueltiwalade@gmail.com)
- **GitHub**: [Emmz07](https://github.com/Emmz07)
- **LinkedIn**: [Ojo Emmanuel](https://www.linkedin.com/in/ojo-emmanuel-86782a25a/)

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you like.
```

### Key Features of the README:
1. **Overview**: Describes the purpose and features of the website.
2. **Technologies Used**: Lists the tools and frameworks used.
3. **Project Structure**: Explains the folder and file organization.
4. **Development Process**: Outlines how the website was built.
5. **How to Run Locally**: Provides instructions for running the project on a local machine.
6. **Deployment**: Explains how to deploy the project.
7. **Screenshots**: Placeholder for screenshots of the website.
8. **Contact Information**: Includes links to your email, GitHub, and LinkedIn.
9. **License**: Specifies the license for the project.

Feel free to customize this README further based on your preferences!
