import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { UserContext } from "../UserContext";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs | Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta">{data.nome}
        
          </Link>
        ) : (
          <Link to="/login">Login / Criar</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;