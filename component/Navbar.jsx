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
    return (
        <header className ="sticky top-0 z-50 w-full rounded-[4px] bg-[linear-gradient(90deg,#080808_0%,#260905_50%,#080808_100%)] px-4 py-[10px] md:px-8 xl:px-[47px]">
            <div className= "mx-auto flex w-full max-w-[1920px] items-center justify-between">
                <Link href="/" aria-label="Kembali ke halaman utama" className="shrink-0">
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
            </div>
        </header>
    )
}
