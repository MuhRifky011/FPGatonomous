"use client";

import Image from "next/image"
import {Splide, SplideSlide} from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";



const sponsors = [
    {
        id: 1,
        name: "Sponsor 1",
        image: "/image/LogoSponsor/sponsor 1.svg",
    },
    {
        id: 2,
        name: "Sponsor 2",
        image: "/image/LogoSponsor/sponsor2.svg",
    },
    {
        id: 3,
        name: "Sponsor 3",
        image: "/image/LogoSponsor/Sponsor3.svg",
    },
    {
        id: 4,
        name: "Sponsor 4",
        image: "/image/LogoSponsor/sponsor4.svg",
    },
    {
        id: 5,
        name: "Sponsor 5",
        image: "/image/LogoSponsor/Sponsor5.svg",
    },
    {
        id: 6,
        name: "Sponsor 6",
        image: "/image/LogoSponsor/Sponsor6.svg",
    },
    {
        id: 7,
        name: "Sponsor 7",
        image: "/image/LogoSponsor/sponsor 7.svg",
    },
    {
        id: 8,
        name: "Sponsor 8",
        image: "/image/LogoSponsor/sponsor 8.svg",
    },
    {
        id: 9,
        name: "Sponsor 9",
        image: "/image/LogoSponsor/sponsor 9.svg",
    },
    {
        id: 10,
        name: "Sponsor 10",
        image: "/image/LogoSponsor/sponsor 10.svg",
    },
];

function Sponsor({ name, image }) {
    return (
        <div className="relative h-24 overflow-hidden rounded-md bg-transparent md:h-32 xl:h-[148px]">
            <Image src={image} alt={`logo ${name}`} fill sizess="(min-width: 1024px) 20vw, 50vw" className="object-contain p-4 md:p-5 transition-transform duration-300 ease-out hover:scale-110 md:p-5"/>
        </div>
    );
}

function SponsorCarousel({ items, speed, label }) {
  return (
    <Splide
      aria-label={label}
      extensions={{ AutoScroll }}
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        arrows: false,
        pagination: false,
        perPage: 5,
        gap: "2.5rem",

        autoScroll: {
          speed: speed,
          pauseOnHover: true,
          pauseOnFocus: true,
        },

        breakpoints: {
          1024: {
            perPage: 4,
            gap: "2rem",
          },
          768: {
            perPage: 3,
            gap: "1.5rem",
          },
          640: {
            perPage: 2,
            gap: "1rem",
          },
        },
      }}
    >
      {items.map((sponsor) => (
        <SplideSlide key={sponsor.id}>
          <Sponsor
            name={sponsor.name}
            image={sponsor.image}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default function SponsorSect() {
    return (
        <section
            id="partners"
            aria-labelledby="sponsor-heading"
            className="px-4 pb-6 md:px-8 md:pb-8 xl:px-[47px] xl:pb-10"
        >
            <div className="mx-auto flex w-full max-w-[1431px] flex-col gap-6 px-6 md:gap-8 md:pt-10 xl:gap-12 xl:pt-12">
                
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

                
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 md:gap-8 xl:gap-10">
                    {sponsors.map((sponsor) => (
                        <Sponsor
                            key={sponsor.id}
                            name={sponsor.name}
                            image={sponsor.image}
                        />
                    ))}
                </div>

<div className="overflow-hidden">
                <Splide
                    aria-label="Logo sponsor berjalan"
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    drag: "free",
                    focus: "center",
                    arrows: false,
                    pagination: false,
                    perPage: 5,
                    gap: "2rem",

                    autoScroll: {
                        speed: 0.8,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                    },

                    breakpoints: {
                        1024: {
                        perPage: 4,
                        },
                        768: {
                        perPage: 3,
                        },
                        640: {
                        perPage: 2,
                        gap: "1rem",
                        },
                    },
                    }}
                >
                    {sponsors.map((sponsor) => (
                    <SplideSlide key={`slider-${sponsor.id}`}>
                        <Sponsor
                        name={sponsor.name}
                        image={sponsor.image}
                        />
                    </SplideSlide>
                    ))}
                </Splide>
                </div>

            </div>
        </section>
    );
}