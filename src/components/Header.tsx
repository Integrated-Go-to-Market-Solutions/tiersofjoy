import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-cream/95 backdrop-blur">
      <div className="h-1.5 w-full bg-[linear-gradient(90deg,var(--color-olive-dark),var(--color-marigold-dark),var(--color-turquoise-dark),var(--color-coral-dark))]" />
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-6 py-4">
        <Link href="/" className="shrink-0 transition-transform hover:scale-105">
          <Image
            src="/photos/logo-tiers-of-joy.jpg"
            alt="Tiers of Joy, Cakes by Renee"
            width={960}
            height={1113}
            priority
            className="h-16 w-auto"
          />
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-ink/70 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-olive-dark after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
