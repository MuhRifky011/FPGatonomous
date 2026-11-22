import Image from "next/image";
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
                <div className="relative aspect-[573/363] w-full max-w-[573px] overflow-hidden md:justify-self-end rounded-2xl" >
                    <Image src="/image/Foto.jpeg" alt="Foto" fill priority sizes="(min-width: 768px) 573px, 100vw" />
                </div>
            </div>
        </section>
    );
}