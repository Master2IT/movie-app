"use client";

import FilterIcon from "@/components/icons/filter.icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Filters = () => {
  const router = useRouter();
  const pathName = usePathname();
  const param = useSearchParams();
  const searchParams = new URLSearchParams(param.toString());
  const params = Array.from(searchParams)
    .filter(
      ([key, value]) => !["with_rt_ratings", "minimum_rating"].includes(key)
    )
    .map(([key, value]) => value);
  const sortBy = [
    {
      title: "Date Added",
      value: "date_added",
    },
    {
      title: "Year",
      value: "year",
    },
    {
      title: "Rating",
      value: "rating",
    },
    {
      title: "Download count",
      value: "download_count",
    },
  ];
  const [selectedSort, setSelectedSort] = useState("date_added");

  const onSort = (sort: string) => {
    setSelectedSort(sort);
    searchParams.set("sort_by", sort);
    router.push(pathName + `?${searchParams}`);
  };

  useEffect(() => {
    setSelectedSort(searchParams.get("sort_by") || "");
  }, []);
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <span className="text-gray-500">Filters: </span>
        <div>
          {params.map((param, i) => (
            <BadgeContent
              onClose={() => setSelectedSort("date_added")}
              title={param}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="dropdown dropdown-end dropdown-bottom">
        <label tabIndex={0} className="btn m-1">
          <FilterIcon />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content flex flex-row z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 h-80 overflow-auto"
        >
          <li className="px-5 text-gray-500 w-full">SortBy</li>
          <div className="divider py-0 my-0 w-full"></div>
          {sortBy.map((sort, i) => (
            <li key={i} className="w-full">
              <a
                onClick={() => onSort(sort.value)}
                className={`p-5 ${
                  selectedSort == sort.value ? "bg-primary text-black" : ""
                }`}
              >
                {sort.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BadgeContent = (props) => {
  const { title } = props;
  const param = useSearchParams();
  const searchParams = new URLSearchParams(param.toString());
  const router = useRouter();
  const pathName = usePathname();
  const handleRemoveFilter = (selectedTitle: string) => {
    const sortByItems = ["date_added", "year", "rating"];
    if (sortByItems.includes(selectedTitle)) {
      searchParams.set("sort_by", "date_added");
      props.onClose();
    } else {
      searchParams.delete("genre");
    }

    router.push(pathName + `?${searchParams}`);
  };
  return (
    <div className="badge badge-primary badge-outline badge-lg pr-1 mx-2 mb-2">
      {title}
      <button className="ml-2" onClick={() => handleRemoveFilter(title)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Filters;
