"use client";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = ({ dictionary: { footer }, params: { lang } }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.sections__wrapper}>
                        <div className={styles.logo}></div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aperiam velit facilis ea reprehenderit nam
                        blanditiis similique inventore commodi corporis odit
                        perferendis optio delectus, asperiores voluptatibus
                        libero fugit placeat voluptatum harum?
                        <div>
                            <p className={styles.title}>{footer.followUs}</p>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <div className={styles.copyright__text}>
                            <div className={styles.team__text}>
                                <p>
                                    {footer.team}
                                    <span className={styles.space}>&nbsp;</span>
                                </p>
                                <Link href={`/${lang}/dreamteam`}>
                                    {footer.teamLink}
                                    <span className={styles.space}>&nbsp;</span>
                                </Link>
                            </div>
                            <p className={styles.copyright__links}>
                                <a
                                    className={styles.copyright__link}
                                    href={footer.junfolioLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {footer.junfolioName}
                                </a>
                                <span>{footer.and}</span>
                                <a
                                    className={styles.copyright__link}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {footer.webjungleName}
                                </a>
                            </p>
                        </div>
                        <div>&copy; {currentYear}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
