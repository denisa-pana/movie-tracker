root.innerHTML += `
    <header>
        <div class="movie-tracker">Movie Tracker</div>
        <div class="movies">Movies</div>
        <div class="series">Series</div>
        <form class="search-container" action="action_page.php">
          <input type="text" placeholder="Search.." name="search">
          <button type="submit">
          <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
          </button>
        </form>
    </header>
`