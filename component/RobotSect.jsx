import Image from "next/image";
import Robot3d from "./Robot3d";

const robotFeatures = [
    {
     id : 1,
     name : "Mekanikal",
     image : "/image/Mekanikal.png",
    },
    {
     id : 2,
     name : "Programming",
     image : "/image/Programming.png",
    },
    {
     id : 3,
     name : "Elektrikal",
     image : "/image/Elektrikal.png",
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
            className="scroll-mt-[108px] px-4 pb-20 md:px-8 md:pb-24 xl:px-[47px] xl:pb-[131px]"
        >
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
                            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-5xl xl:text-[56px]">
                                Built To Reach
                                <br />
                                The Unreachable
                            </h2>

                            <p className="mt-6 max-w-[650px] text-sm leading-relaxed text-white/80 md:text-base xl:text-lg">
                                Designed to perform precise pick-and-place
                                operations in hazardous or hard-to-reach
                                environments. The system combines coordinated
                                mechanical, electrical, and software control
                                for reliable autonomous movement.
                            </p>
                        </div>

                        <div className="relative aspect-[646/262] w-full max-w-[646px] overflow-hidden rounded-2xl md:justify-self-end">
                            <Image src="/image/FotoFull.jpg" alt="FotoReal" fill priority/>
                        </div>
                    </div>
                </div>

                
                <div className="grid gap-[11px] md:grid-cols-3">
                    {robotFeatures.map((feature) => (
                        <article
                            key={feature.id}
                            className="relative aspect-[459/402] w-full max-w-[459px] justify-self-center overflow-hidden rounded-[8px] md:max-w-none"
                        >
                            <Image src={feature.image} alt={`${feature.name} Gatonomous`} fill sizes="(min-width: 768px) 33vw, 340px" className="object-contain transition-transform duration-300 ease-out hover:scale-90"/>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}