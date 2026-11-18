import Image from "next/image";
import Sponsor from "@/component/Sponsor";
export default function sponsor() {
    return ( 
        <main className="min-h-screen bg-[#690c05] text-white">
          <section className="relative min-h-[950px] w-full overflow-hidden rounded-b-[clamp(60px,7vw,133px)] xl:aspect-[1923/908] xl:min-h-0">
            <Image src="/image/TeamPage/BackgroundOverlay.svg" alt="Background" fill priority className="object-cover object-center"/>

            <div className="absolute inset-0 z-10 mx-auto grid w-full max-w-[1230px] items-center gap-10 px-4 pt-24 md:grid-cols-2 md:gap-x-[97px] md:px-8">             
                <div className="flex flex-col justify-center md:translate-y-12" >
                    <h2 className="max-w-[520px] font-display text-4xl font-bold uppercase leading-[0.95] md:text-5xl xl:text-[56px] text-gat-orange">
                        LET`S BUILD SAFER MISSIONS TOGETHER
                    </h2>
                <p className="mt-6 max-w-[600px] text-lg font-semibold leading-relaxed text-white md:text-xl">
                    Connect with GATONOMOUS for sponsorships, technical
                    collaboration, and strategic partnerships. Together, we can
                    develop autonomous robotic solutions that make search and rescue
                    missions safer, faster, and more effective.
                </p>
                </div>
                    <form
                        id="contact"
                        className="rounded-[30px] bg-black/95 p-6 shadow-2xl md:p-8">
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label
                            htmlFor="fullname"
                            className="block text-xs font-medium text-white">
                            Full Name
                        </label>

                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Enter Fullname"
                            autoComplete="name"
                            required
                            className="mt-2 h-11 w-full rounded-md bg-white px-3 text-sm text-black outline-none focus:ring-2 focus:ring-gat-orange"
                        />
                        </div>

                        <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-medium text-white"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@gmail.com"
                            autoComplete="email"
                            required
                            className="mt-2 h-11 w-full rounded-md bg-white px-3 text-sm text-black outline-none focus:ring-2 focus:ring-gat-orange"
                        />
                        </div>
                    </div>

                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                        <label
                            htmlFor="organization"
                            className="block text-xs font-medium text-white"
                        >
                            Organization
                        </label>

                        <input
                            id="organization"
                            name="organization"
                            type="text"
                            placeholder="Enter your organization"
                            className="mt-2 h-11 w-full rounded-md bg-white px-3 text-sm text-black outline-none focus:ring-2 focus:ring-gat-orange"
                        />
                        </div>

                        <div>
                        <label
                            htmlFor="phone"
                            className="block text-xs font-medium text-white"
                        >
                            Phone
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+62xxxxxxxxxxx"
                            autoComplete="tel"
                            className="mt-2 h-11 w-full rounded-md bg-white px-3 text-sm text-black outline-none focus:ring-2 focus:ring-gat-orange"
                        />
                        </div>
                    </div>

                    
                    <div className="mt-4">
                        <label
                        htmlFor="message"
                        className="block text-xs font-medium text-white"
                        >
                        Message
                        </label>

                        <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your interest"
                        required
                        rows={4}
                        className="mt-2 w-full resize-none rounded-md bg-white p-3 text-sm text-black outline-none focus:ring-2 focus:ring-gat-orange"
                        />
                    </div>

                    <button
                        type="button"
                        className="mt-5 w-full rounded-md bg-gat-orange py-3 text-sm font-semibold text-black transition hover:brightness-110"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
        <Sponsor />

    </main>
    )
    
}

