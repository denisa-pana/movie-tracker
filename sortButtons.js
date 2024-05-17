root.innerHTML += `
    <div class="buttons-change-option">
        <button id="change-view">
            <img width="24" height="24" src="https://img.icons8.com/material/24/thumbnails.png" alt="thumbnails"/>
        </button>
        <label for="sort-options">Sort by:</label>
           <select name="sort-options" id="sort-options">
            <option value="" disabled selected>Sort options</option>
            <option id="sort-by-name" value="SORT_BY_TITLE">Title</option>
            <option id="sort-by-year" value="SORT_BY_YEAR">Year</option>
            <option id="sort-by-rating" value="SORT_BY_RATING">Rating</option>
            <option id="sort-by-addDate" value="SORT_BY_ADDDATE">Add Date</option>
          </select>   
    </div>    
`

function addChangeFunctionality() {
    function changeView() {
        view = !view;
        const localStorageMovies = getMovies();
        renderMovieList(localStorageMovies); // This function will re-render the movie list based on the current view state
    }

    document.querySelector('#change-view').addEventListener('click', changeView);
}


function sortMovies(sortType) {
    const localStorageMovies = getMovies();
    let sortedArray;
    switch(sortType) {
        case "SORT_BY_TITLE" :
            sortedArray = localStorageMovies.sort((movie1, movie2) => {
                if (movie1.title < movie2.title) {
                    return -1;
                } else if (movie1.title > movie2.title) {
                    return 1;
                } else {
                    return 0;
                }
            });
            //setMovies(sortedArray);
            break;

        case "SORT_BY_YEAR" :
           sortedArray = localStorageMovies.sort((movie1, movie2) => {
               if (movie1.year < movie2.year) {
                   return -1;
               } else if (movie1.year > movie2.year) {
                   return 1;
               } else {
                   return 0;
               }
           });
           break

        case "SORT_BY_RATING" :
            sortedArray = localStorageMovies.sort((movie1, movie2) => {
                const firstRating = parseFloat(movie1.rating.split("/")[0])
                const secondRating = parseFloat(movie2.rating.split("/")[0])
                if (firstRating < secondRating) {
                    return -1;
                } else if (firstRating > secondRating) {
                    return 1;
                } else {
                    return 0;
                }
            });
            break

        case "SORT_BY_ADDDATE" :
            sortedArray = localStorageMovies.sort((movie1, movie2) => {
                if (movie1.addDate < movie2.addDate) {
                    return -1;
                } else if (movie1.addDate > movie2.addDate) {
                    return 1;
                } else {
                    return 0;
                }
            });
            break

        default:
            return;
    }
    renderMovieList(sortedArray);
}

function addSortingFunctionality() {
    const sortOptions = document.querySelector('#sort-options');
    sortOptions.addEventListener('change', function() {
        sortMovies(this.value);
    })
}

window.addEventListener('load', addSortingFunctionality);
window.addEventListener('load', addChangeFunctionality);

