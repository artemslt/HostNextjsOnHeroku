import React from "react";
import Link from "next/link";

import { useLang } from "../../hooks/useLang";

import styles from "./page.module.scss";
import "./components/GeneralComponents/ProductCardsSlider/Slider.scss";

const HomePage = () => {
    const lang = useLang();

    return (
        <section className={`${styles.home} section`}>
            <div className="container">
                <div className={`${styles.hero}`}>
                    <div className={` ${styles.home__container}`}>
                        <div className={styles.home__image}>
                            <h1 className={`${styles.home__title}`}>bla</h1>
                        </div>
                        <div className={styles.home__about}>
                            <h2 className={`${styles.home__seconderyTitle} `}>
                                bla bla
                            </h2>
                            <p className={`${styles.home__aboutText}  text`}>
                                bla bla bla
                            </p>
                            <Link
                                href={`/${lang}/catalog`}
                                className={styles.home__link}
                            >
                                <button
                                    className={`${styles.home__button__tabletAndDesktop} button`}
                                >
                                    bla bla bla bla bla
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container ${styles.wrapper}`}>
                <div className={`${styles.home__team}`}>
                    <div className={styles.home__teamPhoto}></div>
                    <p className={` ${styles.home__text} text`}>
                        bla bla bla bla
                    </p>
                </div>
                <Link href={`/${lang}/catalog`} className={styles.home__link}>
                    <button className={`${styles.home__button__mobile} button`}>
                        bla bla bla
                    </button>
                </Link>
            </div>
        </section>
    );
};
export default HomePage;
