import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { CATEGORIES, getBestSellers } from "@/lib/products";
import { GALLERY_PHOTOS } from "@/lib/gallery";
import { SITE } from "@/lib/site";

const MARQUEE_ITEMS = [
  "Handmade in New Jersey",
  "Free Note Card",
  "Baby Shower · Swim · Pet Cakes",
  `Cake Artistry Since ${SITE.sinceYear}`,
];

const TRUST_POINTS = [
  { emoji: "🧵", label: "Handmade to Order", bg: "bg-coral/35" },
  { emoji: "🎁", label: "Gift-Ready Presentation", bg: "bg-marigold/35" },
  { emoji: "💌", label: "Free Note Card", bg: "bg-turquoise/35" },
  { emoji: "📍", label: "Local NJ Delivery", bg: "bg-olive/35" },
];

const CATEGORY_BG: Record<string, string> = {
  "baby-shower": "bg-coral/30",
  swim: "bg-turquoise/30",
  pet: "bg-marigold/30",
};

const FULFILLMENT_OPTIONS = [
  {
    emoji: "🚚",
    title: "Nationwide Shipping",
    description: "Gifting from anywhere. Nationwide shipping is coming soon.",
  },
  {
    emoji: "📍",
    title: "Local NJ Delivery",
    description: "Local delivery available across New Jersey.",
  },
  {
    emoji: "🛍️",
    title: "Pickup",
    description: "Prefer to grab it yourself? Pickup can be arranged.",
  },
];

const WHY_US = [
  {
    title: "Handmade, Not Mass-Produced",
    description:
      "Every cake is built by hand, tier by tier. Thoughtfully assembled, never machine-wrapped.",
  },
  {
    title: "Actually Useful Gifts",
    description:
      "Real diapers, real essentials, real toys. Nothing filler, nothing wasted. The cake comes apart into things they'll actually use.",
  },
  {
    title: "Local NJ Roots",
    description:
      "Based in New Jersey, with local delivery available and nationwide shipping for gifting from anywhere (coming soon).",
  },
  {
    title: "Customizable",
    description:
      "Themes, colors, and sizes tailored to the baby shower, gender reveal, or new pet celebration you're shopping for.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Placeholder: [Customer name]. A short quote about how the cake was the hit of the shower.",
  },
  {
    quote: "Placeholder: [Customer name]. A short quote about gifting for a new puppy.",
  },
  {
    quote:
      "Placeholder: [Customer name]. A short quote about how easy it was to order and customize.",
  },
];

const bestSellers = getBestSellers(6);
const instagramPhotos = GALLERY_PHOTOS.slice(0, 6);

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 px-6 py-8 sm:py-10 md:grid-cols-2">
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-marigold/40 blur-2xl" />
        <div className="pointer-events-none absolute right-0 top-40 h-32 w-32 rounded-full bg-turquoise/40 blur-2xl" />
        <Reveal className="relative flex flex-col items-start gap-4 text-left">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Tiers of Joy
          </h1>
          <p className="font-script text-3xl text-olive-dark">
            Cakes by Renee
          </p>
          <p className="max-w-md text-lg text-ink/70">
            Handmade diaper cakes for baby showers, new arrivals, and the
            pups who deserve a little celebration too. Made with love in New
            Jersey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="flex h-12 items-center justify-center rounded-full bg-olive-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-coral-dark hover:shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/how-it-works"
              className="flex h-12 items-center justify-center rounded-full border-2 border-ink/15 px-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-ink/5"
            >
              How It Works
            </Link>
          </div>
          <p className="text-sm font-semibold text-ink/50">
            Handcrafting cakes since {SITE.sinceYear}. 35+ years of cake
            artistry.
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className="animate-float relative mx-auto max-h-[360px] w-full max-w-[300px] overflow-hidden rounded-[2rem] bg-turquoise/30 shadow-xl"
        >
          <Image
            src="/photos/montage-courtyard.jpg"
            alt="A trio of handmade Tiers of Joy diaper cakes styled on a courtyard table"
            width={704}
            height={1018}
            priority
            className="h-[360px] w-full object-cover"
          />
        </Reveal>
      </section>

      {/* Team spirit callout */}
      <section className="relative overflow-hidden bg-sky/25 py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/60 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/photos/cake-sports-allstar.jpg"
              alt="A sports-themed diaper cake with football, basketball, and soccer accents"
              width={896}
              height={1062}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-col items-start gap-4 text-left">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Cheering on a Future MVP?
            </h2>
            <p className="text-lg text-ink/70">
              Do you know a baby sports fan on the way? We customize for any
              NBA, NFL, MLB, or NHL team, plus college teams. We&apos;ve even
              done a local high school alumni cake!
            </p>
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center rounded-full bg-olive-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-coral-dark hover:shadow-lg"
            >
              Request a Team Cake
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* Trust row */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6 px-6 py-10 text-center sm:grid-cols-4">
          {TRUST_POINTS.map((point, i) => (
            <Reveal key={point.label} delay={i * 80} className="flex flex-col items-center gap-2">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${point.bg}`}
              >
                {point.emoji}
              </span>
              <span className="text-sm font-semibold text-ink/70">
                {point.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro / trust line */}
      <section className="border-b border-ink/10 bg-white">
        <Reveal className="mx-auto max-w-2xl px-6 py-8 text-center">
          <p className="text-lg text-ink/70">
            Every cake is handmade to order right here in New Jersey. No two
            are exactly alike, and every tier is packed with things baby (or
            pup) will actually use.
          </p>
        </Reveal>
      </section>

      {/* Shop by category */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
            Shop by Category
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.slug} delay={i * 100}>
              <div
                className={`flex h-full flex-col gap-3 rounded-3xl border-2 border-ink/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:shadow-xl ${CATEGORY_BG[category.slug]}`}
              >
                <span className="animate-wiggle inline-block w-fit text-3xl">
                  {category.emoji}
                </span>
                <h3 className="font-display text-xl font-semibold">
                  {category.name}
                </h3>
                <p className="flex-1 text-sm text-ink/70">
                  {category.description}
                </p>
                <Link
                  href={`/shop?category=${category.slug}`}
                  className="text-sm font-bold underline-offset-4 hover:underline"
                >
                  Shop {category.shortName} Cakes &rarr;
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ways to get your order */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
            Ways to Get Your Order
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FULFILLMENT_OPTIONS.map((option, i) => (
            <Reveal key={option.title} delay={i * 100}>
              <div className="flex h-full flex-col items-center gap-2 rounded-3xl border-2 border-ink/10 bg-white p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <span className="text-3xl">{option.emoji}</span>
                <h3 className="font-display text-lg font-semibold">
                  {option.title}
                </h3>
                <p className="text-sm text-ink/70">{option.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Tiers of Joy */}
      <section className="bg-turquoise/20 py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
              Why Tiers of Joy
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <h3 className="font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink/70">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Best Sellers */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
            Featured &amp; Best Sellers
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/shop"
            className="flex h-12 items-center justify-center rounded-full bg-olive-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-coral-dark hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-coral/20 py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
              Kind Words
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal key={i} delay={i * 100}>
                <blockquote className="h-full rounded-3xl bg-white p-6 text-sm italic text-ink/70 shadow-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink/40">
            Note: swap in real reviews once collected. Even a few short ones
            go a long way for gift-buyer trust.
          </p>
        </div>
      </section>

      {/* For Businesses teaser */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <Reveal className="flex flex-col items-center gap-4 rounded-[2rem] bg-marigold/30 px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Own a boutique, daycare, or pet grooming business?
          </h2>
          <p className="max-w-xl text-ink/70">
            Tiers of Joy partners with local NJ businesses to bring handmade
            cakes to your customers. No pricing pressure, just a simple
            conversation.
          </p>
          <Link
            href="/for-businesses"
            className="flex h-12 items-center justify-center rounded-full border-2 border-ink/15 bg-white px-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-ink/5"
          >
            Learn More
          </Link>
        </Reveal>
      </section>

      {/* Instagram / social proof */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
              Follow Along {SITE.instagramHandle}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {instagramPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 60}>
                <div className="aspect-square overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:rotate-2">
                  <Image
                    src={photo.src}
                    alt={photo.name}
                    width={photo.width}
                    height={photo.height}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink/50">
            Preview grid. Connect a live Instagram embed for{" "}
            <a
              href={SITE.instagramUrl}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.instagramHandle}
            </a>{" "}
            once the account is linked, for the latest real creations.
          </p>
        </div>
      </section>

      {/* Email signup band */}
      <section className="bg-[linear-gradient(120deg,var(--color-coral),var(--color-marigold))] py-16">
        <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Get 10% off your first cake
          </h2>
          <p className="text-ink/70">
            Join the list for shower season tips, new designs, and first
            access to seasonal releases (hello, summer swim cakes 🏖️).
          </p>
          <EmailSignup />
        </Reveal>
      </section>
    </div>
  );
}
