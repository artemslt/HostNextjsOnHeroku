"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Locale } from "../../i18n-config";
import { useDictionary } from "../../hooks/useDictionary";
import { fetchProducts } from "../../services/api";
import { useLang } from "../../hooks/useLang";
import ProductCardsSlider from "./components/GeneralComponents/ProductCardsSlider/ProductCardsSlider";
import Loader from "./components/GeneralComponents/Loader/Loader";
import styles from "./page.module.scss";
import "./components/GeneralComponents/ProductCardsSlider/Slider.scss";

const HomePage = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);

    const [isNotificationShown, setIsNotificationShown] = useState(false);

    return (
        <>
            {!dictionary ? (
                <Loader />
            ) : (
                <section className={`${styles.home} section`}>
                    <div className="container">
                        <div className={`${styles.hero}`}>
                            <div className={` ${styles.home__container}`}>
                                <div className={styles.home__image}>
                                    <h1 className={`${styles.home__title}`}>
                                        {dictionary?.homePage.title}
                                    </h1>
                                </div>
                                <div className={styles.home__about}>
                                    <h2
                                        className={`${styles.home__seconderyTitle} `}
                                    >
                                        {dictionary?.homePage.titleAboutUs}
                                    </h2>
                                    <p
                                        className={`${styles.home__aboutText}  text`}
                                    >
                                        {dictionary?.homePage.text}
                                    </p>
                                    <Link
                                        href={`/${lang}/catalog`}
                                        className={styles.home__link}
                                    >
                                        <button
                                            className={`${styles.home__button__tabletAndDesktop} button`}
                                        >
                                            {dictionary?.buttons.goToCatalog}
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
                                {dictionary?.homePage.textSecondParagraph}
                            </p>
                        </div>
                        <Link
                            href={`/${lang}/catalog`}
                            className={styles.home__link}
                        >
                            <button
                                className={`${styles.home__button__mobile} button`}
                            >
                                {dictionary?.buttons.goToCatalog}
                            </button>
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
};
export default HomePage;