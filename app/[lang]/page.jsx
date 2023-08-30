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
                                    buttom bla
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomePage;
