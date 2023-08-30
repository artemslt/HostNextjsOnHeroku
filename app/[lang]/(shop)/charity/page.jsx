import BankDetailsSection from "../../components/CharityInfo/BankDetailsSection";
import TextSection from "../../components/CharityInfo/TextSection/TextSection";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import styles from "./charity.module.scss";

const CharityPage = () => {
    return (
        <>
            <section className="container section">
                <h2 className="title--secondary">blllllllllllllllllll</h2>
                <div className={styles.wrapper__desktop}>
                    <div className={styles.wrapper}>
                        <div className={styles.charity__imgThumb}></div>
                        <p className={`text ${styles.about__us} `}>
                            KUKHARSKYI VULYK operates on volunteering basis, all
                            electricity bills are paid by team members from
                            their own pocket and 100% donations are spent
                            explicitly on packaging, spices, meat, meals’
                            ingredients and shipment. If you want to support us
                            financially, our bank details are: Vegetables:
                            cabbages, carrots, beetroots, onions, green, garlic,
                            beans, sweet peppers, tomatoes, champignons and
                            forest mushrooms. Fruits and berries of all kinds,
                            including frozen. Other ingredients: milk powder,
                            sugar, salt, raisins, honey, nuts, dried fruits,
                            dried broth/bouillon cubes, canned green peas,
                            peanut paste.
                        </p>
                    </div>
                    <TextSection />
                </div>
                <BankDetailsSection />
            </section>
        </>
    );
};

export default CharityPage;
