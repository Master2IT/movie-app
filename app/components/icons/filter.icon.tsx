const FilterIcon = (props) => (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="none" stroke={props.stroke || 'currentColor'} strokeWidth="1.5">
            <path d="M14 14.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-10-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"></path>
            <path strokeLinecap="round" d="M7 13v5m0 3v1m10-11V6m0-3V2m0 20v-4M7 2v4"></path>
        </g>
    </svg>
)

export default FilterIcon
