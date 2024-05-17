root.innerHTML += `
    <div class="container">
        <div class="movie-list"></div>
        <form class="add-form">
            <div class="add-movie">Add Movie Form</div> <br> <br>
            <label for="title">Title</label> 
            <input type="text" name="title" id="title" required/> <br> <br>
            <label for="description">Description</label>
            <input type="text" name="description" id="description" /> <br> <br>
            <label for="img">Image</label> 
            <input type="url" name="image" id="img" pattern="https://.*" placeholder="https://example.com" required/> <br> <br>
            <label for="year">Year</label>
            <input type="number" name="year" id="year" required> <br> <br>
            <label for="rating">Rating</label>
            <input type="text" name="rating" id="rating" required> <br> <br>
            <label for="add-date">AddDate</label>
            <input type="date" name="addDate" id="add-date" value="2024-05-14" min="2024-01-01" max="2024-12-30" required> <br> 
            <input type="submit" class="submit-button" value="Add Movie">
        </form>
    </div>
`

function renderMovieList(movies) {
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';

    if (view === true) {
        movieList.innerHTML += '<table class="table-view"><tr></tr>';
    }

    movies.forEach(function(movie) {
        const newMovie = new Movie(movie.title, movie.description, movie.image, movie.year, movie.rating, movie.addDate);
        newMovie.renderMovie();
    });

    if (view === true) {
        movieList.innerHTML += '</table>';
    }
}
