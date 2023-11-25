import Link from "next/link";

const Category = ({category}: { category: string }) => {
    return (
        <Link href={`/movies?genre=${category}&sort_by=date_added`}>
            <button className="btn btn-primary btn-outline rounded-full mr-2">
                {category}
            </button>
        </Link>
    )
}
export default Category