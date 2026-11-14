import Image from "next/image";
import Link from "next/link";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "About Us", href: "/#about" },
  { label: "Partners & Sponsor", href: "/sponsor" },
];

const socialMedia = [
  {
    name: "Instagram",
    image: "/image/Instagram.png",
    href: "#",
  },
  {
    name: "YouTube",
    image: "/image/YouTube.png",
    href: "#",
  },
  {
    name: "LinkedIn",
    image: "/image/LinkedIn.png",
    href: "#",
  },
  {
    name: "Facebook",
    image: "/image/Facebook.png",
    href: "#",
  }
];

export default function Footer() {
  return (
    <footer
      className="
        bg-[linear-gradient(180deg,rgba(8,8,8,0)_0%,rgba(8,8,8,0.72)_48%,#080808_100%)]
        px-4
        py-12
        md:px-8
        lg:min-h-[319px]
        lg:px-12
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1432px]
          gap-10
          lg:min-h-[223px]
          lg:grid-cols-[0.8fr_1.7fr_0.7fr]
          lg:items-end
          lg:gap-[61px]
        "
      >
        
        <div className="flex flex-col items-center text-center">
          <Image
            src="/image/Gatonomous logo flat.png"
            alt="Gatonomous logo"
            width={80}
            height={80}
            className="h-auto w-[72px]"
          />

          <p className="mt-2 text-xs text-white">
            Robotics Arm Team
          </p>

          <div
            aria-label="Social media Gatonomous"
            className="mt-4 flex gap-2"
          >
            {socialMedia.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="
                    grid
                    h-8
                    w-8
                    place-items-center
                    rounded-full
                    transition-transform
                    hover:scale-110
                    "
                >
                    <Image
                    src={social.image}
                    alt={`${social.name} logo`}
                    width={32}
                    height={32}
                    className="h-7 w-7 object-contain"
                    />
                </a>
                ))}
          </div>
        </div>

        
        <div className="text-center lg:text-left">
          <h2
            className="
              font-display
              text-3xl
              font-bold
              uppercase
              leading-[0.95]
              text-white
              md:text-4xl
              xl:text-[44px]
            "
          >
            Let&apos;s Build Safer
            <br />
            Missions Together
          </h2>

          <p className="mt-3 text-sm text-white/70">
            Open for collaboration, partnership, and inquiries.
          </p>

          <Link
            href="/sponsor#contact"
            className="
              mt-5
              flex
              w-full
              max-w-[620px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gat-orange
              px-6
              py-3
              text-sm
              font-semibold
              text-gat-black
              transition-colors
              hover:bg-gat-orange/90
            "
          >
            Contact Our Team
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        
        <nav
          aria-label="Footer navigation"
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-sm font-semibold text-white">
            Navigation
          </p>

          <ul className="space-y-2">
            {footerNavigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    text-xs
                    text-white/65
                    transition-colors
                    hover:text-gat-orange
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}