import Category from "@components/categories/category";

const Categories = () => {
    const data = [
        "action",
        "adventure",
        "animation",
        "biography",
        "comedy",
        "crime",
        "documentary",
        "drama",
        "family",
        "fantasy",
        "film-noir",
        "game-show",
        "history",
        "horror",
        "music",
        "musical",
        "mystery",
        "news",
        "reality-tv",
        "romance",
        "sci-fi",
        "sport",
        "talk-show",
        "thriller",
        "war",
        "western",
    ];

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="mb-2">Categories</h1>
            </div>
            <div className="carousel carousel-center w-full md:max-w-full md:overflow-auto p-4 rounded-box">
                <div className="carousel-item">
                    {data.map((category, i) => (
                        <Category key={i} category={category}/>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex gap-2 w-full items-center justify-center my-5">
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFC629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"/>
                </svg>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100"></span>
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFC629" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m9 5l2 2.333M9 19l6-7l-1.5-1.75"/>
                </svg>
            </div>
        </>
    );
};

export default Categories;
