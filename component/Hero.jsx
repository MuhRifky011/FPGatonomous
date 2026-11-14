import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
         <section className="relative flex h-[calc(100svh-68px)] overflow-hidden pb-4 pt-10 md:h-[calc(100svh-84px)] md:pb-6 md:pt-14 xl:h-[calc(100svh-108px)] xl:pb-8 xl:pt-[clamp(72px,10vh,131px)]">
            <Image
                src="/image/PlaceholderHero.png"
                alt=""
                fill
                sizes="100vw"
                className="pointer-events-none object-cover opacity-[0.09]"
            />

        
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(151,24,13,0.85)_0%,_rgba(86,12,5,0.45)_55%,_rgba(45,6,3,0.85)_100%)]" />

           
            <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1230px] flex-1 flex-col items-center px-4 text-center md:px-8 xl:px-0">
                <div className="w-full">
                    <h1 className="font-display text-[36px] font-black leading-tight tracking-normal text-white md:text-[48px] xl:text-[64px] xl:leading-[75px]">
                        Precision In{" "}
                            <span
                            className=" text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.82)]"
                            >
                            Every
                            </span>{" "}
                            Placement
                    </h1>

                    <p className="mx-auto mt-5 max-w-[850px] text-sm leading-relaxed text-white/80 md:text-base xl:text-xl">
                        GATONOMOUS is a robotics team developing an
                        Autonomous Robotic Arm designed to pick and arrange
                        objects automatically, more safely, and efficiently.
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="#robot"
                            className="inline-flex items-center gap-2 rounded-[4px] bg-gat-orange px-5 py-3 text-sm font-semibold text-gat-black transition hover:brightness-110"
                        >
                            Explore Our Robot
                            <span aria-hidden="true">→</span>
                        </Link>

                        <Link
                            href="/team"
                            className="inline-flex items-center rounded-[4px] border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-gat-orange hover:text-gat-orange"
                        >
                            Meet Our Team
                        </Link>
                    </div>
                </div>

                <div className="relative mt-6 min-h-0 w-full max-w-[930px] flex-1 md:mt-8">
                    <Image
                        src="/image/PlaceholderHero.png"
                        alt="Ilustrasi area kerja robot Gatonomous"
                        fill
                        sizes="(min-width: 1280px) 930px, 90vw"
                        priority
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}