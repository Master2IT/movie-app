const DownloadIcon = (props) => {
    return (
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="none" stroke={props.stroke || 'currentColor'} strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 3v13m0 0l4-4.375M12 16l-4-4.375M15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15m18 0c0 2.828 0 4.243-.879 5.121c-.3.3-.662.498-1.121.628"/>
        </svg>
    )
}

export default DownloadIcon