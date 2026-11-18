import Sponsor from "@/component/Sponsor";
import Image from "next/image";

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
            
        </main>
    );
}