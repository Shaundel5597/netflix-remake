import React from 'react';
import { tvShowsOnair } from '../networkRequest'

class TvShows extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
                shows: []
        }
    }

            componentDidMount() {
                tvShowsOnair()  
                    .then( response => {
                        console.log(response.results, "<--- tv shows")
                        this.setState({
                            shows: response.results
                        })
                
                    })
                    
        
            }
            populateShow(tvShowsOnair) {
                return this.state.shows.map(shows => (
                    <div key={ shows.id } className="movieCard">
                        <img src={`https://image.tmdb.org/t/p/w500${shows.poster_path}`}>
                           
                        </img>
                        <h1>
                        { shows.name }
                        </h1>
        
                        <p>
                        { shows.overview }
                        </p>
                    </div>
                ))     
            }
        
            render() {
                console.log("render is running")
                return(
                <div>
                    <h2>
                        TV Shows
                    </h2>
                    <section>
                        { this.populateShow(this.state.tvShowsOnair) }
                    </section>
                </div>
                )
            }
          
        
}

export default TvShows