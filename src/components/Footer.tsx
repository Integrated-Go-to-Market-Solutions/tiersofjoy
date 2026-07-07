import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const POLICY_LINKS = [
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/return-policy", label: "Return Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="inline-block rounded-xl bg-cream p-2 shadow-md">
            <Image
              src="/photos/logo-tiers-of-joy.jpg"
              alt="Tiers of Joy, Cakes by Renee"
              width={960}
              height={1113}
              className="h-20 w-auto"
            />
          </div>
          <p className="mt-3 text-sm text-cream/60">{SITE.tagline}</p>
          <div className="mt-4 flex flex-col gap-1 text-sm text-cream/80">
            <a href={`mailto:${SITE.email}`} className="hover:text-marigold">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="hover:text-marigold">
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marigold"
            >
              {SITE.instagramHandle}
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-turquoise">
            Quick Links
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-cream/80">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-marigold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-turquoise">
            Policies
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-cream/80">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-marigold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-6 py-6 text-center text-sm text-cream/50">
        © {year} {SITE.name} · {SITE.tagline}
      </div>
    </footer>
  );
}
