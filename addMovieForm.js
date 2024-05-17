function addFormFunctionality() {
    const form = document.querySelector('.add-form');
    form.addEventListener('submit', function(event) {
        //Cand BROWSERUL apeleaza functia la submit, ii paseaza ca parametru un obiect ce contine toate detaliile despre evenimentul petrecut.
        console.log(event);
        event.preventDefault();//ca sa nu mai faca refresh la submitere formular
        //event.target = elementul de html de la care s a declansat evenimentul - cazul meu - formul
        //inputurile pot fi identificate prin atribultul name
        const movieTitle = event.target.title.value;
        const movieDescription = event.target.description.value;
        const movieImage = event.target.image.value.toString();
        const movieYear = Number(event.target.year.value);
        const movieRating = event.target.rating.value;
        const movieAddDate = event.target.addDate.value;

        //creez un nou obiect si il adaug in vectorul de filme

        const newMovie = {
            title: movieTitle,
            description: movieDescription,
            image: movieImage,
            year: movieYear,
            rating: movieRating + '/10',
            addDate: movieAddDate
        }

        // Extragem filmele din localStorage
        const localStorageMovies = getMovies();
        // Modificam array-ul de filme
        localStorageMovies.push(newMovie);
        // Adaugam array-ul modificat in localStorage
        setMovies(localStorageMovies);

        renderMovieList(localStorageMovies);

        const allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');

    })
}
//pentru ca era o problema cu form ul, se pierde referinta la refresh, este de la innerHTML
//apelez functia dupa ce toate fisierele s au inarcat
window.addEventListener('load', addFormFunctionality);