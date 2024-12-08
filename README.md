# Director's Vault App (React+Vite)

**Director's Vault** is a movie review web application that allows users to add and review movies, track movies they want to watch, and organize their favorite movies into a personalized playlist. The application features a clean and intuitive interface with sections for top 10 movies, favorites, and genres.

## Features

- **Home Page**: Add new movies to review, choose from movies already in the "To Watch" list.
- **Movie Reviews**: View and manage all movies that have been added and reviewed.
- **To Watch**: List of movies that the user plans to watch.
- **Playlist**: Categorize and view movies that have been watched and reviewed.
- **Top 10 Movies**: Display the top 10 movies in a card format.
- **Favorites**: Show a list of favorite movies.
- **Genres**: Organize movies by their genres.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vt4b/MRS-50-ReactVite.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd directors-vault
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

   Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

1. **Home**:
   - Add a movie to review.
   - Select a movie from the "To Watch" list to review.

2. **Movie Reviews**:
   - View all movies that have been added and reviewed.

3. **To Watch**:
   - Add and manage movies you plan to watch.

4. **Playlist**:
   - View and categorize movies that have been watched and reviewed.

5. **Top 10 Movies**:
   - View the top 10 movies in card format.

6. **Favorites**:
   - View a list of favorite movies.

7. **Genres**:
   - Sort and view movies by their genres.

## Components

- **Home**: The main page where users can add new movies and select from the "To Watch" list.
- **MovieReviews**: Displays all movies that have been reviewed.
- **ToWatch**: Shows a list of movies the user intends to watch.
- **Playlist**: Categorizes and displays reviewed movies.
- **Top10Movies**: Renders a list of top 10 movies.
- **Favorites**: Displays user's favorite movies.
- **Genres**: Organizes movies by genres.

## Styling

The application uses Tailwind CSS for styling. The custom styles are defined in `src/components/global.css`, and Tailwind is configured in `tailwind.config.js`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request against the `main` branch of the original repository.
