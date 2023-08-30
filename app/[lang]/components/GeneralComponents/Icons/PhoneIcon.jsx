const PhoneIcon = ({ fill = "" }) => {
    return (
        <svg
            aria-label="phone icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.84029 9.85641C7.6276 13.7483 10.8081 16.8425 14.7619 18.5191L14.7743 18.5244L15.5382 18.8648C16.5108 19.2982 17.654 18.9904 18.2776 18.1273L19.552 16.3636C19.6298 16.2558 19.6098 16.106 19.5063 16.0226L17.2816 14.2278C17.171 14.1385 17.0084 14.1593 16.9237 14.2735L16.0579 15.4419C15.8476 15.7256 15.4678 15.8242 15.1461 15.6786C12.1897 14.3407 9.81397 11.965 8.47604 9.00857C8.33043 8.68681 8.42902 8.30705 8.71278 8.09677L9.88115 7.23091C9.99532 7.14631 10.0161 6.98368 9.92688 6.87308L8.13184 4.64804C8.04841 4.54462 7.89866 4.52454 7.79093 4.60231L6.01764 5.88247C5.14885 6.50966 4.84289 7.6625 5.28635 8.63795L5.83969 9.85511C5.83989 9.85555 5.84009 9.85598 5.84029 9.85641ZM14.1699 19.8974C9.87392 18.0738 6.41856 14.7108 4.47651 10.481L4.47534 10.4785L3.92084 9.25874C3.18174 7.63299 3.69167 5.71158 5.13965 4.66627L6.91294 3.38611C7.66706 2.8417 8.71529 2.98231 9.29929 3.7062L11.0943 5.93125C11.7189 6.70542 11.5734 7.84381 10.7743 8.43605L10.1048 8.93221C11.2357 11.1266 13.0281 12.919 15.2224 14.0499L15.7186 13.3804C16.3108 12.5812 17.4492 12.4358 18.2234 13.0603L20.4482 14.8551C21.1723 15.4393 21.3127 16.4879 20.7678 17.242L19.4935 19.0058C18.4541 20.4443 16.5487 20.9572 14.9277 20.235L14.1699 19.8974Z"
                fill={fill}
            />
        </svg>
    );
};

export default PhoneIcon;