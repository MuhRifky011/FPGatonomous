const robotFeatures = [
    {
        title: "Mechanical",
        description: "Built for stable and precise object handling.",
        items: [
            "4 Degrees of Freedom",
            "Prismatic Joint System",
            "Adaptive Gripper",
            "Lightweight Aluminum Frame",
        ],
    },
    {
        title: "Programming",
        description: "Intelligent software for coordinated movement.",
        items: [
            "Robot Operating System",
            "C++ Control Program",
            "Forward and Inverse Kinematics",
            "Automated Motion Sequence",
        ],
    },
    {
        title: "Electrical",
        description: "Reliable control and real-time communication.",
        items: [
            "STM32 Microcontroller",
            "High-Torque Servo Motors",
            "Position and Distance Sensors",
            "Computer Communication System",
        ],
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
                    <RobotPlaceholder className="min-h-[320px] lg:min-h-[500px]" />

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

                        <RobotPlaceholder className="min-h-[240px] flex-1 lg:min-h-[280px]" />
                    </div>
                </div>

                
                <div className="grid gap-[11px] md:grid-cols-3">
                    {robotFeatures.map((feature) => (
                        <article
                            key={feature.title}
                            className="rounded-[8px] bg-[#ead5d7] p-6 text-gat-black"
                        >
                            <h3 className="text-center font-display text-xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                                {feature.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}