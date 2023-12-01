"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import BackIcon from "./icons/back.icon";
import {usePathname} from "next/navigation";
import {useRouter} from "next/navigation";

function SearchNav() {
    const pathName = usePathname();
    const router = useRouter();

    const [searchText, setSearchText] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(searchText);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [searchText, 2000]);

    useEffect(() => {
        if (debouncedValue) {
            router.push(pathName + `?search=${searchText}`);
        } else {
            router.push(pathName);
        }
    }, [debouncedValue]);

    return (
        <nav className="navbar md:px-32 flex flex-col">
            <div className="flex items-center w-full">
                <Link href="/" className="btn btn-ghost hover:bg-transparent z-10">
                    <BackIcon width="2em" height="2em"/>
                </Link>
                <input
                    value={searchText}
                    onChange={handleSearch}
                    autoFocus
                    className="input w-full border focus:outline-none"
                    placeholder="Search your movie..."
                />
            </div>
            <div className="divider my-0"></div>
        </nav>
    );
}

export default SearchNav;
