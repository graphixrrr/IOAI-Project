# AI Club Website

A modern, responsive website for an AI Club built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router**: Client-side routing for seamless navigation
- **Component-Based**: Modular component architecture for maintainability

## 📋 Pages

- **Home**: Hero section, features, statistics, and call-to-action
- **Projects**: Showcase of AI projects with status indicators
- **Events**: Upcoming events, workshops, and hackathons
- **About**: Mission, team, and timeline
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-club-website
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Navigation bar
│   └── Footer.tsx       # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Projects.tsx    # Projects page
│   ├── Events.tsx      # Events page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  },
  secondary: {
    // ... secondary colors
  }
}
```

### Components

All components are built with Tailwind CSS classes and can be easily customized by modifying the className props.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Styling

- Use Tailwind CSS utility classes
- Custom components are defined in `src/index.css`
- Follow the existing design patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:

- Email: info@aiclub.com
- Phone: (555) 123-4567

---

Built with ❤️ by the AI Club team
