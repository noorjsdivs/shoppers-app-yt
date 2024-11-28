import { MdSwitchAccount } from "react-icons/md";
import SideBarCartIcon from "./SideBarCartIcon";
import { getSession } from "@/lib/manageSession";
import Image from "next/image";
import Link from "next/link";

const SideBar = async () => {
  const session = await getSession();

  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
      <Link
        href={session?.user ? "/dashboard" : "/signin"}
        className="bg-accentWhite w-16 h-[70px] rounded-md flex flex-col gap-1 text-accent justify-center items-center shadow-sm shadow-lightGreen overflow-x-hidden group cursor-pointer"
      >
        <div className="flex justify-center items-center">
          {session?.user ? (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={35}
              height={35}
              className="rounded-full -translate-x-12 group-hover:translate-x-4 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          )}

          {session?.user ? (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={35}
              height={35}
              className="rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          )}
        </div>
        <p className="text-xs font-semibold">Profile</p>
      </Link>
      <SideBarCartIcon />
    </div>
  );
};

export default SideBar;
