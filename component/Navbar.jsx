"use client";
import { useState } from "react";   

import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        label:"Home",
        href:"/"
    },
    {
        label:"Team",
        href:"/team"
    },
    {
        label:"About Us",
        href:"/#about"
    },
    {
        label: "Sponsor",
        href:"/sponsor",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen((currentState) => !currentState);
    }

    function closeMenu() {
        setIsOpen(false);
    }
    return (
        <header className="sticky top-0 z-50 w-full bg-[linear-gradient(to_bottom,rgba(8,8,8,1)_0%,rgba(8,8,8,0.88)_45%,rgba(8,8,8,0)_100%)] px-4 py-[10px] md:px-8 xl:px-[47px]">
            <div className= "mx-auto flex w-full max-w-[1920px] items-center justify-between">
                <Link href="/" aria-label="Kembali ke halaman utama" className="shrink-0" onClick={closeMenu}>
                    <Image src="/image/Logo1.png" alt="Logo Gatonomous" width={235} height={88} priority className="h-12 w-auto md:h-16 xl:h-[88px]" />
                </Link>
                <nav aria-label="Navigasi Utama" className="hidden md:block">
                    <ul className="flex items-center gap-8 xl:gap-12">
                        {menuItems.map((item) => (
                        <li  key={item.label}>
                            <Link href={item.href} className="text-sm font-medium text-white transition-colors duration-200 hover:text-gat-orange">
                                {item.label}
                            </Link>
                        </li>
                    ))}            
                    </ul>
                </nav>
                <Link href="/sponsor#contact" className="hidden items-center gap-2 rounded-[4px] bg-gat-orange px-4 py-2 text-sm font-semibold text-gat-black transition duration-200 hover:brightness-110 md:flex">
                    <span>Contact Us</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6h16v12H4z" />
                        <path d="m4 7 8 6 8-6" />
                    </svg>
                </Link>
                <button type="button" aria-label={isOpen ? "Tutup menu" : "Buka menu"} aria-expanded={isOpen} aria-controls="mobile-menu" onClick={toggleMenu}
                    className = "grid h-10 w-10 place-items-center rounded-[4px] border border-white/20 text-xl text-white transition-colors duration-200 hover:border-gat-orange hover:text-gat-orange md:hidden">
                    {isOpen ? "X" : "☰"}        
                </button> 
            </div>
            {isOpen && (
                <div id="mobile-menu" className="border-t border-white/10 pt-4 md:hidden">
                    <nav aria-label="Navigasi mobile">
                        <ul className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} onClick={closeMenu} className="block rounded-[4px] px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10 hover:text-gat-orange">
                                {item.label}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        <Link href="/sponsor#contact" onClick={closeMenu} className="mt-4 flex w-full items-center justify-center rounded-[4px] bg-gat-orange px-4 py-3 text-sm font-semibold text-gat-black transition duration-200 hover:brightness-110">
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
