import Image from "next/image";



const TimTeknikal =[
    {
        id: 1,
        name: "kaleil",
        image: "/image/TeamPage/Kaleil.png",
    },
    {
        id: 2,
        name: "Aulla",
        image: "/image/TeamPage/Aulla.png",
    },
    {
        id: 3,
        name: "Alvin",
        image: "/image/TeampPage/Alvin.png",
    },
]

const TimOfficial = [
    {
        id : 1,
        name: "Axel",
        image: "/image/TeamPage/Axel.png",
    },
    {
        id: 2,
        name: "Rifky",
        image: "/image/TeampPage/Rifky.png",
    },
    {
        id: 3,
        name: "Aryo",
        image: "/image/TeamPage/Aryo.png"
    }
]


export default function timPage() {
    return (
        <main className=" min-h-screen bg-[#690c05] text-white" >
            <section className="relative aspect-[1923/908] w-full overflow-hidden rounded-b-[clamp(60px,7vw,133px)]">
                <Image src="/image/TeamPage/FrameBarengan.svg" alt="Tim gatonomous" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        Meet The Team
                    </h1>
                </div>
            </section>
            <div className="mt-[33px] w-full">
                <svg viewbox ="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true" className="block h-[90px] w-full text-gat-orange md:h-[120px] " fill="none">
                    <path d="M 0 3 H 400 L 500 115 L 600 3 H 1000" stroke="currentColor" strokeWidth="4" vectorEffect="non-scalling"/>
                </svg>

            </div>
            <h2 className="uppercase text-center font-display text-4xl mt-6 font-bold md:text-5xl">
                    <span className="text-[#E99040]">GATON</span>
                    <span className="text-[#FFA600]">OMOUS</span>
            </h2>
                <div className="mx-auto grid w-full max-w-[1230px] items-stretch gap-10 md:grid-cols-2 md:gap-[23px]">
                                
                                
                </div>
        </main>
    );
}