'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import HomeIcon from "@/app/components/icons/home.icon";
import ProfileIcon from "@/app/components/icons/profile.icon";
import MovieIcon from "@/app/components/icons/movie.icon";

const BottomNav = () => {
    const pathname = usePathname()
    return (
        <div className="btm-nav">
            <Link href="/" className={pathname == '/' ? 'active text-primary' : ''}>
                <HomeIcon/>
            </Link>
            <Link href="/movies?sort_by=date_added" className={pathname == '/movies' ? 'active text-primary' : ''}>
                <MovieIcon/>
            </Link>
            <Link href="/profile" className={pathname == '/profile' ? 'active text-primary' : ''}>
                <ProfileIcon/>
            </Link>
        </div>
    )
}
export default BottomNav