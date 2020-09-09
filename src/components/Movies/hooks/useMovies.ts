import { useSelector } from "react-redux";
import { selectSearchMovies } from "../../../store/selectors";

export const useMovies = () => {
    const {
        searchMoviesData,
        searchMoviesLoading,
        searchMoviesError,
    } = useSelector(selectSearchMovies);

    return { searchMoviesData, searchMoviesLoading, searchMoviesError };
};
