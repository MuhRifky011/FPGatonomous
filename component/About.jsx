export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-[108px] px-4 py-20 md:px-8 md:py-24 xl:px-[47px] xl:py-[131px]"
        >
            <div className="mx-auto grid w-full max-w-[1230px] items-stretch gap-10 md:grid-cols-2 md:gap-[23px]">
                
                <div className="flex flex-col justify-center">
                    <div className="mb-6 flex items-center gap-3">
                        <span aria-hidden="true" className="h-[3px] w-16 bg-gat-orange"/>

                        <p className="font-display text-lg font-bold text-gat-orange">
                            About Us
                        </p>
                    </div>

                    <h2 className="max-w-[540px] font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-5xl xl:text-[56px]">
                        Engineering
                        <br />
                        For Every
                        <br />
                        Rescue
                    </h2>

                    <p className="mt-6 max-w-[590px] text-sm leading-relaxed text-white/80 md:text-base xl:text-lg">
                        GATONOMOUS is a robotics team developing autonomous
                        systems to support search and rescue operations. We
                        combine precision engineering, intelligent control,
                        and practical design to help responders work faster
                        and safer in challenging environments.
                    </p>
                </div>

                
                <div
                    role="img"
                    aria-label="Placeholder foto tim Gatonomous"
                    className="relative min-h-[280px] overflow-hidden bg-[#ead5d7] md:min-h-[363px]"
                >
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-[18%] w-[16%] bg-white/55"
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 right-[18%] w-[16%] bg-white/55"
                    />

                    <div className="absolute inset-0 grid place-items-center">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-10 w-10 rounded-[4px] border border-gat-black/50 p-2 text-gat-black/60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M4 5h16v14H4z" />
                            <path d="m6 16 4-4 3 3 2-2 3 3" />
                            <circle cx="16" cy="9" r="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}