import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent';
import {Movie} from './models/movies';
import { moviesData } from './database/moviedata';
import { MovieComponent } from './components/MovieComponent';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  /* 
  * Variables 
  */
  // Food and Name
  let name:string = 'Jhon Doe';
  let edad:number = 30;
  let foodList:string[] = ['Rice', 'Pizza', 'Double Cheeseburger', 'Pasta'];

  /* 
  * UseState: Hook that allows you to have state variables in functional components 
  */
  // Food
  const[food, setFood] = useState(foodList);
  const[meal, setMeal] = useState('');
  // Movies
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [movie, setMovie] = useState<Movie>({id: 0, title: '', director: '', year: 0});
  const {title, director, year} = movie;
  
  /* 
  * Functions 
  */
  // Adding new food
  const addFood = (meal:string) => {
    if(meal === '') return;
    setFood([...food, meal]);
  };
  const changeMeal = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMeal(e.target.value);
  }
  // Adding new movie
  const addMovie = (movie:Movie) => {
    if(movie.title === '' || movie.director === '' || movie.year === 0) return;
    setMovie({...movie, id: movies.length + 1});
    setMovies([...movies, movie]);
  };
  const handleMovieChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMovie({...movie, [e.target.name]: e.target.value});
  }
  
  // Return: has the JSX code that will be rendered
  return (
    <>
      <h1>{name}, {edad}</h1>
      <ul>
        {food.sort().map((meal) => (
          <li key={meal}>{meal.toUpperCase()}</li>
        ))}
      </ul>
      <MyComponent/>
      <h3>Add a food</h3>
      <input type="text" placeholder="Add a food" onChange={changeMeal}/>
      <button onClick={() => addFood(meal)}>Add</button>
      
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <MovieComponent key={movie.id} movie={movie}/>
        ))}
      </ul>
      <h3>Add a Movie</h3>
      <input type="text" placeholder="Title" 
        onChange={handleMovieChange} value={title} id="title" name="title"/>
      <input type="text" placeholder="Director"  
        onChange={handleMovieChange} value={director} id="director" name="director"/>
      <input type="number" placeholder="Year" 
        onChange={handleMovieChange} value={year} id="year" name="year"/>
      <button onClick={() => addMovie(movie)}>Add</button>
      <button className="btn btn-success"> Click Me</button>
    </>
  )
}

export default App