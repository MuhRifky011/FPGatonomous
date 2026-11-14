const sponsors = [
    {
        id: 1,
        name: "Sponsor 1",
    },
    {
        id: 2,
        name: "Sponsor 2",
    },
    {
        id: 3,
        name: "Sponsor 3",
    },
    {
        id: 4,
        name: "Sponsor 4",
    },
    {
        id: 5,
        name: "Sponsor 5",
    },
    {
        id: 6,
        name: "Sponsor 6",
    },
];

function SponsorPlaceholder({ name }) {
    return (
        <div
            role="img"
            aria-label={`Placeholder logo ${name}`}
            className="relative h-24 overflow-hidden bg-[#c4abad] md:h-32 xl:h-[148px]"
        >
            <div
                aria-hidden="true"
                className="absolute inset-y-0 left-[22%] w-[16%] bg-white/25"
            />

            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-[22%] w-[16%] bg-white/25"
            />
        </div>
    );
}

export default function SponsorSect() {
    return (
        <section
            id="partners"
            aria-labelledby="sponsor-heading"
            className="px-4 pb-20 md:px-8 md:pb-24 xl:px-[47px] xl:pb-[131px]"
        >
            <div className="mx-auto flex w-full max-w-[1431px] flex-col gap-6 p-6 md:gap-10 md:p-10 xl:gap-12 xl:p-12">
                {/* Judul section */}
                <div className="flex items-center justify-center gap-5">
                    <span
                        aria-hidden="true"
                        className="h-[3px] w-16 bg-gat-orange md:w-24"
                    />

                    <h2
                        id="sponsor-heading"
                        className="text-center font-display text-lg font-bold text-gat-orange md:text-xl"
                    >
                        Our Sponsor &amp; Partnership
                    </h2>

                    <span
                        aria-hidden="true"
                        className="h-[3px] w-16 bg-gat-orange md:w-24"
                    />
                </div>

                {/* Kumpulan logo sponsor */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-10 xl:gap-12">
                    {sponsors.map((sponsor) => (
                        <SponsorPlaceholder
                            key={sponsor.id}
                            name={sponsor.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}