# SwiftCart - Modern E-commerce Frontend

## 📝 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Installation](#-installation)
- [Architecture](#-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [API Integration](#-api-integration)
- [Folder Structure](#-folder-structure)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [License](#-license)

## 🌟 Project Overview

SwiftCart is a responsive e-commerce web application built with modern web technologies to provide a seamless shopping experience. Designed with mobile-first principles, it caters to users like Ama (the persona from the assessment) who need a fast, intuitive interface for browsing products on mobile devices.

<!-- ## 🔗 Live Demo
[View Live Demo](https://swiftcart-demo.netlify.app)-->

## 🛠 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Local Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:blackmoor01/Swiftcart-frontend.git
   cd Swiftcart-frontend
   ```

### Install dependencies

- npm install

# or

- yarn install

### Run the development server

- npm run dev

# or

- yarn dev

### Open in browser

http://localhost:5173

## 🏗 Architecture

Component Structure

src/
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── lib/ # Shared utilities and types
├── pages/ # Page-level components
└── assets/ # Static assets

### Key Decisions

- State Management: Context API + useReducer for efficient cart state handling

- Routing: React Router for seamless navigation

### Performance:

- Lazy loading images

- Debounced search

- Optimized bundle size

### Accessibility:

- Semantic HTML

- Keyboard navigation

- Proper contrast ratios

### ✨ Features

- 🛍 Product gallery with search

- 🔎 Product details view

- 🛒 Shopping cart management

- 📱 Fully responsive design

- 🎨 Smooth animations

- ⚡ Fast performance

### 🛠 Tech Stack

- Frontend: React + TypeScript

- Build Tool: Vite

- Styling: Tailwind CSS

- Animations: Framer Motion

- Icons: Heroicons

- API: DummyJSON

### 🔌 API Integration

- Uses DummyJSON for:

- Product data (/products)

- Search (/products/search)

- Simulated cart operations (/carts/add)

## 🧪 Testing

### Run tests with:

- npm test

# or

- yarn test

### 🔮 Future Improvements

- User authentication system

- Product filtering/sorting

- Enhanced test coverage

- Dark mode support

- Checkout process implementation

## 📜 License

- MIT License
