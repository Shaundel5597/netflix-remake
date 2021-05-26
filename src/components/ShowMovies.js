import React from 'react';
import { topRatedMovies, upcomingMovies } from '../networkRequest'


class ShowMovies extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            upcomingMovies: []
        }
    }

    componentDidMount() {
        console.log("Component Did mount is running" )
        topRatedMovies() 
            .then( response => {
                console.log(response, "<----")
                this.setState({
                    movies: response.results
                })
        
            })
            upcomingMovies()
            .then( response => {
                console.log(response, "<----")
                this.setState({
                    upcomingMovies: response.results
                })
            })
    }

    populateMovie(upcomingMovies, topRatedMovies) {
        return upcomingMovies.map(movie => (

            
            

            <div key={ movie.id } className="movieCard">
            

                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
                    
                </img>
                <h1>
                { movie.title }
                </h1>

                <p>
                { movie.overview }
                </p>
            </div>
            
        ))     
    }

    render() {
        console.log("render is running")
        return(
        <div>
            <h2>
                Upcoming Movies
            </h2>
            <section>
                { this.populateMovie(this.state.upcomingMovies) }
            </section>
            <h2>
                Top Rated Movies
            </h2>
            <section>
                { this.populateMovie(this.state.movies)}
            </section>
        </div>
        )
    }
  
}

export default ShowMovies