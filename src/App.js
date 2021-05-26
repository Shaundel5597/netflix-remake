
import ShowMovies from './components/ShowMovies'
import TvShows from './components/TvShows'
import NavBar from './components/NavBar';
import './App.css' 




export default () => {
  return (
    <div> 
      <header>
          <NavBar/>
      </header>

      <section>
        <ShowMovies/>
      </section>

      <section>
        <TvShows/>
      </section>
    </div>
    
  )
}
