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
        image: "/image/TeamPage/Alvin.png",
    },
]

const TimOfficial = [
    {
        id: 1,
        name: "Rifky",
        image: "/image/TeamPage/Rifky.png",
    },
    {
        
        id : 2,
        name: "Axel",
        image: "/image/TeamPage/Axell.png",
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
                <svg viewBox ="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true" className="block h-[90px] w-full text-gat-orange md:h-[120px] " fill="none">
                    <path d="M 0 3 H 400 L 500 115 L 600 3 H 1000" stroke="currentColor" strokeWidth="4" vectorEffect="non-scalling"/>
                </svg>

            </div>
            <h2 className="uppercase text-center font-display text-4xl mt-6 font-bold md:text-5xl">
                    <span className="text-[#E99040]">GATON</span>
                    <span className="text-[#FFA600]">OMOUS</span>
            </h2>
                {/* ini buat teknikal*/}
                <div className="mx-auto  w-full max-w-[1230px] px-4 pb-20 md:px-8 md:px-28">
                    <div className="mt-16">
                        <div className="flex items-center gap-3">
                            <span aria-hidden="true" className="h-[2px] w-24 bg-gat-orange md:-36" />

                            <h3 className="text-sm font-semibold text-white md:text-base">
                                Technical Division
                            </h3>
                        </div>
                        {/*foto */}
                        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ">
                            {TimTeknikal.map((member) => (
                                <article key={member.id} className="group relative h-[400px] w-full max-w-[320px] justify-self-center overflow-hidden md:h-[440px] lg:max-w-[360px]">
                                    <Image src={member.image} alt={'${member.name} Technical Division gatonomous '} fill sizes="(min-width: 1024px) 360px, (min-width= 640px) 50vw, 320px" 
                                        className="object-contain transition-[filter, transform] duration-300 ease-out group-hover:-translate-y-2 "/>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                {/*ini buat yang official */} 
                <div className="mx-auto  w-full max-w-[1230px] px-4 pb-20 md:px-8 md:px-28">
                    <div className="mt-16">
                        <div className="flex items-center justify-end gap-3">
                            <h3 className="text-right text-sm font-semibold text-white md:text-base">
                                Official Division
                            </h3>
                            <span aria-hidden="true" className="h-[2px] w-24 bg-gat-orange md:-36" />

                        </div>
                        {/*foto */}
                        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ">
                            {TimOfficial.map((member) => (
                                <article key={member.id} className="group relative aspect-[446/561] w-full max-w-[320px] justify-self-center overflow-hidden md:h-[440px] lg:max-w-[360px]">    
                                    <Image src={member.image} alt={'${member.name} Official Division gatonomous '} fill sizes="(min-width: 1024px) 360px, (min-width= 640px) 50vw, 320px"
                                    className="object-contain transition-[filter, transform] duration-300 ease-out group-hover:-translate-y-2"
                                    />
                                </article>
                            ))}
                        </div>
                    </div>
                </div>         
        </main>
    );
}