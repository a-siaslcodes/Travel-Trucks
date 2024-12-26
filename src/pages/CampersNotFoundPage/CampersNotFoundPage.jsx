import css from "./CampersNotFoundPage.module.css";
import notFoundImage from "../../assets/img/not-found.png";
import Container from "../../components/Container/Container";

const CampersNotFoundPage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <img
          src={notFoundImage}
          alt="Error logo"
          className={css.img}
          width={310}
          height={280}
        />
        <p className={css.error}>No campers found, try again! </p>
      </div>
    </Container>
  );
};

export default CampersNotFoundPage;
