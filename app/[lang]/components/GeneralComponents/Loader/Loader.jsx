import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
