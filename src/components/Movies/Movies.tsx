import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

import { SearchMovies } from "../../api/searchMovies";
import Header from "../common/Header/Header";
import Card from "../common/Card/Card";
import Spinner from "../common/Spinner/Spinner";
import { selectSearchMovies } from "../../store/selectors";
import { getSearchMoviesRequest, setSelectedPage } from "../../store/actions";
import styles from "./Movies.module.scss";

const dataHeader = {
  titleHeader: "Find Movies, TV shows and more ...",
  titleSearch: "Search",
  type: "text",
  placeholder: "search movie ...",
};

const Movies: React.FC = () => {
  const {
    searchMoviesData: { totalResults, search = [] },
    searchMoviesLoading,
    searchMoviesError,
    searchValue,
    selectedPage,
  } = useSelector(selectSearchMovies);

  const history = useHistory();
  const dispatch = useDispatch();

  const handlePushHistory = useCallback(
    (id: string) => {
      history.push(id);
    },
    [history]
  );

  const handleChangePaginate = useCallback(
    (data: any, searchValue: string) => {
      let selected: number = data.selected + 1;
      dispatch(setSelectedPage(data.selected));
      dispatch(getSearchMoviesRequest(searchValue, selected));
    },
    [dispatch]
  );

  const renderMovies = ({ imdbId, ...rest }: SearchMovies) => (
    <Card
      key={`movie${imdbId}`}
      id={imdbId}
      onClick={() => handlePushHistory(`movie/${imdbId}`)}
      {...rest}
    />
  );

  const renderMain = () => {
    if (searchMoviesLoading) return <Spinner />;

    if (search && search.length === 0 && !searchMoviesError)
      return <p className={styles.message}>No results ...</p>;

    if (searchMoviesError)
      return <p className={styles.message}>{searchMoviesError}</p>;

    return (
      <main className={styles.main}>
        <div className={styles.movies}>
          {(search as SearchMovies[]).map(renderMovies)}
        </div>
      </main>
    );
  };

  return (
    <>
      <Header {...dataHeader} />
      {renderMain()}
      {searchValue &&
      search &&
      search.length &&
      !searchMoviesError &&
      (+totalResults as number) >= 10 ? (
        <ReactPaginate
          key={selectedPage}
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.round((+totalResults as number) / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={6}
          onPageChange={(data) => handleChangePaginate(data, searchValue)}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
          initialPage={selectedPage}
        />
      ) : null}
    </>
  );
};

export default Movies;
