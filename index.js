const root = document.querySelector('#root');
const container = document.querySelector('.container');

const movies = [
    {
        title: 'Oppenheimer',
        description: `The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb`,
        image: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg',
        year: 2023,
        rating: '8.3' + '/10',
        addDate: '2024-05-13'
    },
    {
        title: 'Athe Godfather',
        description: `The Godfather - Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his 
                      daughter\'s wedding. Michael, Vito\'s youngest son and a decorated WW II Marine is also present at the wedding.
                      Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all
                      those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants
                      to sell drugs and needs the Don\'s influence for the same, Vito refuses to do it. What follows is a clash between Vito's 
                      fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob 
                      war against all the other mafia families which could tear the Corleone family apart`,
        image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        year: 1972,
        rating: '9.2' + '/10',
        addDate: '2024-05-11'
    },
    {
        title: 'The Lord of the Rings',
        description: `A young Hobbit known as Frodo has been thrown on an amazing adventure, when he is appointed the job of destroying the One 
                      Ring, which was created by the Dark Lord Sauron. He is assigned with three warriors including Gandelf, Aragorn, and 
                      Boromir. But it\'s not going to be an easy journey for the Fellowship of the Ring, on the ultimate quest to rid the 
                      Middle-earth of all evil.`,
        image: 'https://m.media-amazon.com/images/M/MV5BOGExMjIxNTMtY2M2NS00YTg0LTgyMDMtZWMyNDZmODZjZTVkXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg',
        year: 1972,
        rating: '9.2' + '/10',
        addDate: '2024-05-12'
    }
];

//extrag filmele din localStorage
function getMovies() {
    // extrag valoarea corespunzatoare cheii "movies"
    const localStorageMovies= localStorage.getItem("movies");
    // transform filmele din string in vector de obiecte
    const parsedMovies = JSON.parse(localStorageMovies);
    //returnez filmele
    return parsedMovies;

}

function setMovies(movies) {
    const stringifiedMovies = JSON.stringify(movies);
    localStorage.setItem("movies", stringifiedMovies);
}

// Daca nu avem filme in localStorage, atunci le adaugam.
if (getMovies() === null){
    setMovies(movies);
}

function startRendering() {
    // Filmele afisate pe ecran sunt preluate din localStorage.
    const localStorageMovies = getMovies();
    renderMovieList(localStorageMovies);
}
window.addEventListener('load', startRendering);