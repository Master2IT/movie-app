const MovieIcon = (props) => {
    return (
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fill="none" stroke={props.stroke || 'currentColor'} strokeWidth="1.5">
                <path strokeLinecap="round" d="M10 16H3m7-5H3"></path>
                <path
                    d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382c0-1.896 0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"></path>
                <path strokeLinecap="round" d="M20 6H9.5M3 6h2.25"></path>
            </g>
        </svg>
    )
}

export default MovieIcon