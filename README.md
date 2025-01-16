# Blog Website

A modern, responsive blog website built with React, Tailwind CSS, and DummyJSON API.

## Features

- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth animations
- 🔄 Dynamic blog content from API
- 📑 Blog post details page
- 🔍 Clean and organized code structure

## Tech Stack

- React
- React Router
- Tailwind CSS
- DummyJSON API

## Project Structure
blog-app/

├── src/

│ ├── components/

│ │ ├── Header.jsx

│ │ ├── BlogCard.jsx

│ │ └── Footer.jsx

│ │ ├── Blog.jsx

│ │ └── BlogDetail.jsx

│ ├── utils/

│ │ └── data.js

│ ├── App.jsx

│ └── index.css

## API Integration

The project uses DummyJSON API for blog data:
- Endpoint: `https://dummyjson.com/recipes`
- Data transformation in `utils/data.js`

## Key Components

### Header
- Responsive navigation
- Mobile menu
- Fixed positioning

### BlogCard
- Image with hover effect
- Title and description
- Read more link
- Props validation

## Styling

- Tailwind CSS for styling
- Custom animations and transitions
- Responsive breakpoints
- Mobile-first approach

## Setup Instructions

1. Clone the repository:

bash

git clone https://github.com/Amanmalik5211/bolg.git

cd blog-app



2. Install dependencies:

bash

npm install


3. Required dependencies:

bash

npm install react-router-dom prop-types


4. Start development server:

bash

npm run dev