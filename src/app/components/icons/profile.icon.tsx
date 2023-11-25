const ProfileIcon = (props) => {
    return (
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fill="none" stroke={props.stroke || 'currentColor'} strokeWidth="1.5">
                <circle cx="12" cy="6" r="4"></circle>
                <path strokeLinecap="round"
                      d="M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"></path>
            </g>
        </svg>
    )
}

export default ProfileIcon