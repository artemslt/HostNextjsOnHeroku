import styles from "./OrdersIcon.module.scss";

const OrdersIcon = () => {
    return (
        <svg
            className={`${styles.image}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
        >
            <path d="M13.5 9.7502C13.5 9.33599 13.1642 9.0002 12.75 9.0002H6.75C6.33579 9.0002 6 9.33599 6 9.7502C6 10.1644 6.33579 10.5002 6.75 10.5002H12.75C13.1642 10.5002 13.5 10.1644 13.5 9.7502Z" />
            <path d="M12.5 12.7502C12.5 12.336 12.1642 12.0002 11.75 12.0002H6.75C6.33579 12.0002 6 12.336 6 12.7502C6 13.1644 6.33579 13.5002 6.75 13.5002H11.75C12.1642 13.5002 12.5 13.1644 12.5 12.7502Z" />
            <path d="M12.75 15.0002C13.1642 15.0002 13.5 15.336 13.5 15.7502C13.5 16.1644 13.1642 16.5002 12.75 16.5002H6.75C6.33579 16.5002 6 16.1644 6 15.7502C6 15.336 6.33579 15.0002 6.75 15.0002H12.75Z" />
            <path d="M6 21.7502H19C20.5188 21.7502 21.75 20.519 21.75 19.0002V13.5002C21.75 13.086 21.4142 12.7502 21 12.7502H17.75V4.9434C17.75 3.51999 16.1411 2.69203 14.9828 3.51936L14.8078 3.6444C14.0273 4.20189 12.9701 4.20002 12.1859 3.63991C10.8821 2.70857 9.11794 2.70857 7.81407 3.63991C7.02992 4.20002 5.9727 4.20189 5.19221 3.6444L5.01717 3.51936C3.8589 2.69203 2.25 3.51999 2.25 4.9434V18.0002C2.25 20.0713 3.92893 21.7502 6 21.7502ZM8.68593 4.86051C9.46825 4.30171 10.5318 4.30171 11.3141 4.86051C12.6161 5.79053 14.3739 5.79764 15.6796 4.865L15.8547 4.73996C16.0202 4.62177 16.25 4.74005 16.25 4.9434V19.0002C16.25 19.4503 16.3581 19.8752 16.5499 20.2502H6C4.75736 20.2502 3.75 19.2428 3.75 18.0002V4.9434C3.75 4.74005 3.97984 4.62177 4.14531 4.73996L4.32036 4.865C5.62605 5.79764 7.3839 5.79053 8.68593 4.86051ZM17.75 19.0002V14.2502H20.25V19.0002C20.25 19.6906 19.6904 20.2502 19 20.2502C18.3096 20.2502 17.75 19.6906 17.75 19.0002Z" />
        </svg>
    );
};

export default OrdersIcon;