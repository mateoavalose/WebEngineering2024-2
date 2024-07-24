import { Movie } from '../models/movies';
interface MovieProps {
    movie: Movie;
}

export const MovieComponent = ({movie}: MovieProps) => {
    const {title, director, year} = movie;
    return (
        <>
            <h2>{title}</h2>
            <h3>Directed by {director}</h3>
            <h3>Year: {year}</h3>
        </>
    )
}