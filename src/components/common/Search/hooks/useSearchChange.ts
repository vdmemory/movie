import { useDispatch } from "react-redux";
import { debounce } from "debounce";

import {
    resetSearchMovies,
    getSearchMoviesRequest,
} from "../../../../store/actions";

export const useSearchChange = () => {
    const dispatch = useDispatch();

    const onChangeDispatch = (value: string) => {
        if (!value) return dispatch(resetSearchMovies());
        dispatch(getSearchMoviesRequest(value));
    };

    const debounceChange = debounce(onChangeDispatch, 500);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceChange(e.target.value);
    };

    return { handleSearchChange };
};
