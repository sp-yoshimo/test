import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { IoMdArrowBack } from "react-icons/io"
import { AiFillHome } from "react-icons/ai"



interface HeaderProps {
    label: string,
    hasBack?: boolean,
    showLogo?: boolean,
}

const Header: React.FC<HeaderProps> = ({
    label,
    hasBack,
    showLogo
}) => {



    return (
        <div className="w-full h-auto bg-white border-b-[1px] p-5 relative">
            {showLogo ? (
                <div className="absolute top-5 left-5 cursor-pointer hidden md:block">
                    <Link href="/">
                        <h3 className="text-2xl text-sky-600 font-bold">スカイキャッチモンスター</h3>
                    </Link>
                </div>
            ) : ""}
            <div className="flex flex-row items-center justify-between md:justify-around">
                <div className="flex flex-row items-center">
                    {hasBack ? (
                        <div className="mr-1 sm:mr-3 cursor-pointer">
                            <IoMdArrowBack />
                        </div>
                    ) : ""}
                    <p className="text-sm sm:text-xl md:text-2xl font-bold">
                        {label}
                    </p>
                </div>
                <div className="block md:hidden">
                    <AiFillHome size={30} />
                </div>
            </div>
        </div>
    );
};

export default Header;
