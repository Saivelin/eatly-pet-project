const Bookmark = ({checked=false}: {checked?: boolean}) => {
    return (
        <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle
                cx='14.7964'
                cy='14.9362'
                r='14.2525'
                fill='#DBD9EE'
            />
            <path
                d='M17.9178 8.27674C15.8542 7.93078 13.7363 7.93078 11.6727 8.27674C10.9188 8.40313 10.3184 8.98191 10.1672 9.73235C9.47472 13.1703 9.43693 16.708 10.0559 20.16L10.3078 21.5654C10.3855 21.9988 10.9138 22.172 11.233 21.8687L14.2746 18.9792C14.5664 18.7021 15.0241 18.7021 15.3159 18.9792L18.3574 21.8687C18.6766 22.172 19.2049 21.9988 19.2826 21.5654L19.5346 20.16C20.1535 16.708 20.1158 13.1703 19.4233 9.73235C19.2721 8.98191 18.6717 8.40313 17.9178 8.27674Z'
                fill={checked == false ? '#fff' : '#6C5FBC'}
            />
        </svg>
    )
}

export default Bookmark