import Image from "next/image";
import Robot3d from "./Robot3d";

const robotFeatures = [
    {
     id : 1,
     name : "Mekanikal",
     image : "/image/Fitur/Mekanikal.png",
    },
    {
     id : 2,
     name : "Programming",
     image : "/image/Fitur/Programming.png",
    },
    {
     id : 3,
     name : "Elektrikal",
     image : "/image/Fitur/Electrical.png",
    },
];

function RobotPlaceholder({ className = "" }) {
    return (
        <div
            role="img"
            aria-label="Placeholder gambar robot Gatonomous"
            className={`relative overflow-hidden bg-[#ead5d7] ${className}`}
        >
            <div
                aria-hidden="true"
                className="absolute inset-x-[12%] top-[12%] h-[36%] bg-white/45"
            />

            <div
                aria-hidden="true"
                className="absolute inset-x-[12%] bottom-[10%] h-[36%] bg-white/45"
            />

            <div
                aria-hidden="true"
                className="absolute inset-y-0 left-[25%] w-[12%] bg-white/25"
            />

            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-[25%] w-[12%] bg-white/25"
            />
        </div>
    );
}

export default function OurRobot() {
    return (
        <section
            id="robot"
            className="relative overflow-hidden scroll-mt-[108px] px-4 pb-20 md:px-8 md:pb-24 xl:px-[47px] xl:pb-[131px]"
        > 
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_45%,rgba(233,144,64,0.20),transparent_30%),radial-gradient(circle_at_80%_55%,rgba(0,0,0,0.35),transparent_48%)]"  />
            <div aria-hidden=" pointer-events-none absolute inset-0  opacity-[0.07]  bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)]
                bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"/>
            <div aria-hidden="true" className=" pointer-events-none absolute left-[3%] top-[18%] h-[500px] w-[500px] rounded-full bg-gat-orange/10 blur-[100px]"/>
            <div className="mx-auto flex w-full max-w-[1432px] flex-col gap-[11px] xl:min-h-[1002px]">
                <div className="flex items-center justify-center gap-5">
                    <span
                        aria-hidden="true"
                        className="h-[3px] w-20 bg-gat-orange"
                    />

                    <p className="font-display text-lg font-bold text-gat-orange">
                        Our Robot
                    </p>

                    <span
                        aria-hidden="true"
                        className="h-[3px] w-20 bg-gat-orange"
                    />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="relative h-[320px] w-full min-w-0 overflow-hidden rounded-xl lg:h-[500px]">
                     <Robot3d />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-5xl xl:text-[56px] mt-30">
                                Built To Reach
                                <br />
                                The Unreachable
                            </h2>

                            <p className="mt-6 max-w-[650px] text-sm leading-relaxed text-white/80 md:text-base xl:text-lg">
                                Autonomous robotic arm designed to pick, move, and
                                precisely arrange blocks into a triangular structure. It is developed
                                to perform this task in hazardous or hard-to-reach areas, reducing
                                direct human exposure while making operations safer, faster, and more
                                efficient.
                            </p>
                        </div>
                    {/*
                    <div className="relative aspect-[646/262] w-full max-w-[646px] overflow-hidden rounded-2xl md:justify-self-end">
                        <Image src="/image/FotoFull.jpg" alt="FotoReal" fill priority/>
                    </div>
                    */}
                    </div>
                </div>

                
                <div className="grid gap-y-14 md:grid-cols-3 md:gap-x-8 xl:gap-x-10">
                    {robotFeatures.map((feature) => (
                        <article
                            key={feature.id}
                            className="group relative isolate aspect-[459/402] w-full max-w-[360px] justify-self-center overflow-visible lg-max-w-[380px] xl:max-w-[400px]"
                        >
                            <span aria-hidden="true" className="pointer-events-none absolute inset-[8%] z-0 origin-center scale-95 rounded-[22px] bg-gat-orange opacity-0
                            shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out group-hover:rotate-[9deg] group-hover:scale-100 group-hover:opacity-100"/>
                            <div className="relative z-10 h-full w-full overflow-hidden rounded-[8px] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01]">

                            <Image src={feature.image} alt={`${feature.name} Gatonomous`} fill sizes="(min-width: 768px) 33vw, 340px" className="object-contain"/>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}