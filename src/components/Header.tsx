import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const Header: React.FC = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="about" className="flex items-center">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="account" className="flex items-center">
                    Account
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="blocks" className="flex items-center">
                    Blocks
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="docs" className="flex items-center">
                    Docs
                </Link>
            </Typography>
        </ul>
    );
    return (
        <>
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Link to="">
                            Shortly
                        </Link>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <span>Buy Now</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <Button variant="gradient" size="sm" fullWidth className="mb-2">
                            <Link to="">
                                <span>Buy Now</span>
                            </Link>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </>
    );
};

export default Header;
