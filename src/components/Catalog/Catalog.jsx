import { useEffect } from "react";
import css from "./Catalog.module.css";

import CatalogList from "../CatalogList/CatalogList";
import CampersNotFoundPage from "../../pages/CampersNotFoundPage/CampersNotFoundPage";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import {
  selectError,
  selectLoading,
  selectCampers,
  selectPage,
  selectLimit,
  selectHasNextPage,
} from "../../redux/selectors";
import {
  clearCampers,
  resetPage,
  incrementPage,
} from "../../redux/campersSlice";
import { selectFilters } from "../../redux/filtersSlice";

const Catalog = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);
  const hasNextPage = useSelector(selectHasNextPage);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  useEffect(() => {
    const fetchData = () => {
      dispatch(clearCampers());
      dispatch(resetPage());
      dispatch(fetchCampers({ ...filters, limit, page: 1 }));
    };

    fetchData();
  }, [dispatch, filters, limit]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers({ ...filters, limit, page: page + 1 }));
  };

  return (
    <>
      {error ? (
        <CampersNotFoundPage />
      ) : (
        <section className={css.wrapper}>
          <CatalogList campers={campers} />
          {loading && <Loader />}
          {hasNextPage && (
            <button
              className={css.loadMoreBtn}
              type="button"
              disabled={loading}
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default Catalog;
