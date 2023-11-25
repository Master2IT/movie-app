const BackIcon = (props) => (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="none" stroke={props.stroke || 'currentColor'} strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="1.5" d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5"/>
    </svg>
)

export default BackIcon
