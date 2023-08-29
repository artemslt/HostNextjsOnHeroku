const GitHubIcon = ({ fill = "" }) => {
    return (
        <svg
            aria-label="github icon"
            width="100%"
            height="100%"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                d="M14 2.62158C11.2297 2.62152 8.54971 3.60728 6.43972 5.40246C4.32973 7.19763 2.9274 9.68507 2.48368 12.4196C2.03997 15.1542 2.58382 17.9574 4.01792 20.3277C5.45202 22.6979 7.68278 24.4805 10.311 25.3564C10.8943 25.4591 11.1125 25.1091 11.1125 24.8022C11.1125 24.5257 11.0985 23.6064 11.0985 22.6299C8.16666 23.1689 7.40832 21.9147 7.17499 21.2591C6.91616 20.6206 6.50572 20.0548 5.97916 19.6106C5.57082 19.3924 4.98749 18.8522 5.96399 18.8382C6.33718 18.8786 6.69514 19.0084 7.0075 19.2166C7.31986 19.4248 7.57741 19.7052 7.75832 20.0341C7.91784 20.3207 8.13236 20.573 8.38957 20.7766C8.64678 20.9802 8.94163 21.131 9.25724 21.2204C9.57284 21.3098 9.90298 21.3361 10.2288 21.2977C10.5545 21.2593 10.8695 21.1569 11.1557 20.9966C11.2062 20.4032 11.4707 19.8484 11.9 19.4356C9.30416 19.1439 6.59166 18.1382 6.59166 13.6757C6.57513 12.5161 7.003 11.394 7.78749 10.5397C7.43085 9.532 7.47258 8.42609 7.90416 7.44808C7.90416 7.44808 8.88066 7.14242 11.1125 8.64392C13.0215 8.11886 15.0368 8.11886 16.9458 8.64392C19.1765 7.12725 20.1542 7.44808 20.1542 7.44808C20.5858 8.42606 20.6276 9.53202 20.2708 10.5397C21.0577 11.3925 21.4859 12.5156 21.4667 13.6757C21.4667 18.1522 18.739 19.1439 16.1432 19.4356C16.4216 19.7178 16.636 20.0566 16.7719 20.429C16.9078 20.8014 16.9619 21.1987 16.9307 21.5939C16.9307 23.1549 16.9167 24.4091 16.9167 24.8022C16.9167 25.1091 17.1348 25.4731 17.7182 25.3564C20.3415 24.4732 22.5656 22.6864 23.9935 20.315C25.4213 17.9436 25.9599 15.1419 25.5131 12.4101C25.0663 9.67835 23.6633 7.19425 21.5544 5.40126C19.4455 3.60827 16.7681 2.62309 14 2.62158Z"
                fill={fill}
            />
        </svg>
    );
};

export default GitHubIcon;
