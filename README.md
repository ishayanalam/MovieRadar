# MovieRadar

MovieRadar is a modern, responsive web application that allows users to discover and explore movies and TV shows. Built with React and Tailwind CSS, it features a sleek dark-mode aesthetic, dynamic search with debouncing, and a detailed modal view for deep dives into specific titles.

## Features

- **Dynamic Search:** Instantly search for movies and shows using the TVMaze API, optimized with a 500ms debounce mechanism to minimize network requests.
- **Responsive Grid Layout:** A responsive, card-based UI that scales perfectly from mobile devices to large desktop monitors.
- **Detailed Movie Modal:** Clicking a movie card reveals a cinematic modal displaying the uncropped poster, rating, release year, runtime, genres, and a clean text summary.
- **Custom Theming:** Built with Tailwind CSS utilizing custom CSS variables for a consistent, highly maintainable global dark theme.
- **Robust Routing:** Client-side routing handled by React Router, including a dedicated 404 Error page to catch broken links.

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Data / API:** TVMaze Public API
- **Deployment:** Vercel

## Local Setup

To run this project locally, follow these steps:

1. **Clone the repository and follow the steps**
   ```bash
   git clone [https://github.com/ishayanalam/MovieRadar.git](https://github.com/ishayanalam/MovieRadar.git)
   cd MovieRadar
   pnpm install
   pnpm run dev
   ```
