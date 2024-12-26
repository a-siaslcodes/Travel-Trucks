import css from "./Navigation.module.css";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";

import logo from "../../assets/logo.svg";
import Container from "../Container/Container";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.headerNav}>
          <Link className={css.logo} to="/">
            <svg className={css.logoIcon} width={136} height={16}>
              <use href={`${logo}#icon-logo`}></use>
            </svg>
          </Link>

          <ul className={css.headerNavList}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
            <NavLink to="/favorite" className={buildLinkClass}>
              Favorite
            </NavLink>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
