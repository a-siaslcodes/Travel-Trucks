import Catalog from "../../components/Catalog/Catalog";
import Container from "../../components/Container/Container";
import SideBar from "../../components/SideBar/SideBar";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <SideBar />
        <Catalog />
      </div>
    </Container>
  );
};

export default CatalogPage;
