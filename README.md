# Task Management System

A modern task management system built with vanilla JavaScript, featuring a clean and responsive UI.

## Features

- Create, read, update, and delete tasks
- Set task priorities and categories
- Filter tasks by priority and category
- Search tasks
- Persistent storage using localStorage
- Responsive design
- Modern UI with a clean color palette

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the source code
```bash
git clone <repository-url>
# or download and extract the ZIP file
```

2. Navigate to the project directory
```bash
cd task-management-system
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit the URL shown in the terminal (usually http://localhost:5173)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
task-management-system/
├── src/
│   ├── js/
│   │   ├── components/    # UI components
│   │   ├── models/        # Data models
│   │   ├── services/      # Business logic
│   │   ├── utils/         # Utility functions
│   │   └── config/        # Configuration files
│   └── style.css         # Global styles
├── index.html
├── main.js              # Application entry point
├── package.json
└── README.md
```

## Local Storage

The application uses the browser's localStorage to persist tasks. Data will be saved automatically and loaded when you reopen the application.
