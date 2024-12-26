import css from "./CamperDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import specs from "../../../assets/specs.svg";

import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import TabComponent from "../TabComponent/TabComponent";
import CamperForm from "../CamperForm/CamperForm";
import Loader from "../../Loader/Loader";
import SubInfo from "../SubInfo/SubInfo";

import { fetchCamperById } from "../../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperById } from "../../../redux/selectors";

const CamperDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const camper = useSelector((state) => selectCamperById(state, id));

  const [isActiveTab, setIsActiveTab] = useState({
    feature: true,
    reviews: false,
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  if (!camper) {
    return <Loader />;
  }

  return (
    <div className={css.wrapper}>
      <h2 className={css.name}>{camper.name}</h2>
      <SubInfo camper={camper} />
      <span className={css.price}>{`€${parseFloat(camper.price).toFixed(
        2
      )}`}</span>

      <ul className={css.imgBox}>
        {camper.gallery.map((image, index) => (
          <li key={index}>
            <img src={image.original} alt={camper.name} className={css.img} />
          </li>
        ))}
      </ul>
      <p className={css.description}>{camper.description}</p>

      <TabComponent isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} />

      <div className={css.box}>
        {isActiveTab.feature ? (
          <CamperFeatures camper={camper} />
        ) : (
          <CamperReviews camper={camper} />
        )}
        <CamperForm />
      </div>
    </div>
  );
};

export default CamperDetails;
