import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { getSession } from "@/lib/manageSession";
import { navBarList } from "@/constants";

const Header = async () => {
  const session = await getSession();

  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-lightText/20 sticky top-0 z-50">
      <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between gap-5 lg:gap-10">
        <Logo />
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              {item?.title}
            </Link>
          ))}
          {session ? (
            <Link
              href={"/dashboard"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href={"/signin"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Sign in
            </Link>
          )}
          {session?.user?.email === process.env.ADMIN_EMAIL && (
            <Link
              href={"/studio"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Studio
            </Link>
          )}
          {session?.user && (
            <Link
              href={"/orders"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Orders
            </Link>
          )}
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
      </div>
    </header>
  );
};

export default Header;
