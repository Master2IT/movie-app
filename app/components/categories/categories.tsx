import Category from "@/components/categories/category";

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
            <Category key={i} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
