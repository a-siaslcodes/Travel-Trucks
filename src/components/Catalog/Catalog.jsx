import { useEffect, useState } from "react";
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
  selectTotalCampers,
} from "../../redux/selectors";
import { clearCampers } from "../../redux/campersSlice";
import { selectFilters } from "../../redux/filtersSlice";

const Catalog = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCampers);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const applyFilters = async () => {
      dispatch(clearCampers());
      setPage(1);
      dispatch(fetchCampers({ ...filters, page: 1 }));
    };

    applyFilters();
  }, [dispatch, filters]);

  useEffect(() => {
    if (page > 1) {
      dispatch(
        fetchCampers({
          ...filters,
          page,
        })
      );
    }
  }, [dispatch, page, filters]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const isLoadMoreDisabled = loading || campers.length >= totalCampers;

  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {error && <CampersNotFoundPage />}
      {!loading && !error && campers.length === 0 && <CampersNotFoundPage />}
      {!loading && !error && campers.length > 0 && (
        <>
          <CatalogList campers={campers} />
          <button
            onClick={handleLoadMore}
            disabled={isLoadMoreDisabled}
            className={css.loadMoreBtn}
          >
            Load more
          </button>
        </>
      )}
    </div>
  );
};

export default Catalog;
