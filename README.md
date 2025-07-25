# IOAI - International Organization for Artificial Intelligence

A modern, responsive website for the International Organization for Artificial Intelligence (IOAI), showcasing global research initiatives, international events, and the organization's mission to advance AI for humanity's benefit. Built with React, TypeScript, Tailwind CSS, and Vite.

## 🌍 About IOAI

The International Organization for Artificial Intelligence (IOAI) is a global institution dedicated to advancing artificial intelligence technology for the benefit of humanity through international cooperation, research, and policy development. IOAI brings together researchers, policymakers, industry leaders, and civil society from around the world to address the most pressing challenges and opportunities in artificial intelligence.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds, glass morphism effects, and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- **Global Content**: International research initiatives, global events, and worldwide offices
- **Contact Form**: Functional contact form with validation and loading states
- **Animated Background**: Custom canvas-based animated background with particles and raindrops
- **Navigation**: Fixed navigation with smooth scrolling and mobile menu

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Canvas API** - Custom animated background

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd IOAI-Project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation component
│   └── Footer.tsx       # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with global mission
│   ├── Projects.tsx    # Research initiatives showcase
│   ├── Events.tsx      # International events and conferences
│   ├── About.tsx       # Organization information and leadership
│   ├── Contact.tsx     # Contact form and global offices
│   └── RaindropBackground.tsx # Animated background component
├── animations.tsx      # Animation utilities
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🌟 Key Features

### Global Research Initiatives
- AI Ethics Framework development
- Climate Change AI solutions
- Healthcare AI platform
- Education and policy programs
- International security protocols

### International Events
- Global AI Summits
- International conferences
- Regional workshops
- Policy forums
- Research symposiums

### Global Presence
- Headquarters in Geneva, Switzerland
- Regional offices in New York, Tokyo, and Nairobi
- International partnerships and collaborations
- Multi-language support capabilities

## 🎨 Design System

The website uses a modern design system with:
- **Color Palette**: Primary blues and secondary gradients
- **Typography**: Inter font family for clean readability
- **Components**: Glass morphism cards with backdrop blur
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... other shades
        900: '#1e3a8a',
      },
      secondary: {
        // ... secondary color palette
      }
    }
  }
}
```

### Content
- Update organization information in respective page components
- Modify research projects in `src/pages/Projects.tsx`
- Edit events in `src/pages/Events.tsx`
- Update leadership team in `src/pages/About.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Streamlined navigation and mobile-optimized content

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `pnpm build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌐 IOAI Mission

IOAI is committed to:
- **Global Cooperation**: Fostering international collaboration and knowledge sharing
- **Ethical Development**: Ensuring AI development aligns with human values and rights
- **Inclusive Access**: Democratizing AI benefits across all nations and communities
- **Sustainable Impact**: Addressing global challenges through AI innovation

## 📞 Contact

For more information about IOAI:
- **Email**: info@ioai.org
- **Phone**: +41 22 917 1234
- **Address**: Palais des Nations, 1211 Geneva, Switzerland

---

Built with ❤️ for the global AI community by IOAI
