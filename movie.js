let view = false;

class Movie {
    constructor(title, description, image, year, rating, addDate) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.year = year;
        this.rating = rating;
        this.addDate = addDate
    }

    renderMovie() {
        const tableView = document.querySelector('.table-view');
        const movieList = document.querySelector('.movie-list');
        if(view === false) {
            movieList.innerHTML += `
            <li> 
                <img src="${this.image}"> <br> <br> 
                Title: ${this.title} <br> <br> 
                Description: ${this.description} <br> <br> 
                Year: ${this.year} <br> <br> 
                Rating: ${this.rating} <br> <br> 
                AddDate: ${this.addDate} <br> <br>
                <hr>
            </li>
        `;
        } else {
            tableView.innerHTML += `
            <th style="padding: 0.2rem"><img src="${this.image}" style="max-width: 5rem; height:auto"></th>
            <td style="vertical-align: top;">                        
                Title: ${this.title} <br> 
                Description: ${this.description} <br>
                Year: ${this.year} <br>
                Rating: ${this.rating} <br>
                AddDate: ${this.addDate} <br><br>
            </td>
        `;
        }

    }
}