import React from "react";
import styles from "./Header.module.css";
import FormModal from "../Form/FormModal";

function Header(props) {
  return (
    <header className={styles.Header}>
      <h1 className={styles.header}>Horned Beasts</h1>
      <div className={styles.BtnsCont}>
        <FormModal className={FormModal} handleFilter={props.handleFilter} />
        <button onClick={() => props.resetFilter()}>Reset Filter</button>
      </div>
    </header>
  );
}

export default Header;
