import css from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <section className={css.heroBox}>
      <Container>
        <div className={css.wrapper}>
          <h2 className={css.title}>Campers of your dreams</h2>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Link className={css.buttonLink} to={"/catalog"}>
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
