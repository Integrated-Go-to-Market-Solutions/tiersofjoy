import Link from "next/link";
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
    <footer className="border-t border-black/[.08] bg-white">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{SITE.name}</p>
          <p className="mt-1 text-sm text-ink/60">{SITE.tagline}</p>
          <div className="mt-4 flex flex-col gap-1 text-sm text-ink/70">
            <a href={`mailto:${SITE.email}`} className="hover:underline">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="hover:underline">
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {SITE.instagramHandle}
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Policies</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/[.06] px-6 py-6 text-center text-sm text-ink/50">
        © {year} {SITE.name} — {SITE.tagline}
      </div>
    </footer>
  );
}
