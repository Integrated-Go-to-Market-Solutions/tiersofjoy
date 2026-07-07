import Link from "next/link";
import TieredCakeIcon from "@/components/TieredCakeIcon";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import { CATEGORIES, getBestSellers, getProduct } from "@/lib/products";
import { SITE } from "@/lib/site";

const TRUST_POINTS = [
  { emoji: "🧵", label: "Handmade to Order" },
  { emoji: "🎁", label: "Gift-Ready Presentation" },
  { emoji: "💌", label: "Free Note Card" },
  { emoji: "📍", label: "Local NJ Delivery" },
];

const FULFILLMENT_OPTIONS = [
  {
    emoji: "🚚",
    title: "Nationwide Shipping",
    description: "Gifting from anywhere — cakes ship nationwide.",
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
      "Every cake is built by hand, tier by tier — thoughtfully assembled, not machine-wrapped.",
  },
  {
    title: "Genuinely Useful Gifts",
    description:
      "Real diapers, real essentials, real toys. Nothing filler, nothing wasted — the “cake” comes apart into things they'll actually use.",
  },
  {
    title: "Local NJ Roots",
    description:
      "Based in New Jersey, with local delivery available and nationwide shipping for gifting from anywhere.",
  },
  {
    title: "Customizable",
    description:
      "Themes, colors, and sizes tailored to the baby shower, gender reveal, or new-pet celebration you're shopping for.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Placeholder: [Customer name] — short quote about how the cake was the hit of the shower.",
  },
  {
    quote:
      "Placeholder: [Customer name] — short quote about gifting for a new puppy.",
  },
  {
    quote:
      "Placeholder: [Customer name] — short quote about ease of ordering / customization.",
  },
];

const heroCake = getProduct("sage-and-cream-classic")!;
const bestSellers = getBestSellers(6);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5 text-left">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Tiers of Joy
          </h1>
          <p className="font-display text-xl text-blush-dark">
            Inedible Cakes by Renee
          </p>
          <p className="max-w-md text-lg text-ink/70">
            Handcrafted diaper cakes and adorable gifts for baby showers, new
            arrivals, and the pups who deserve a little celebration too. Made
            with love in New Jersey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
            >
              Shop Now
            </Link>
            <Link
              href="/how-it-works"
              className="flex h-12 items-center justify-center rounded-full border border-black/[.12] px-6 text-base font-medium transition-colors hover:bg-black/[.04]"
            >
              How It Works
            </Link>
          </div>
          <p className="text-sm font-medium text-ink/50">
            Handcrafting cakes since {SITE.sinceYear} — 35+ years of
            experience.
          </p>
        </div>
        <div className="flex items-center justify-center rounded-3xl bg-sage/25 p-10">
          <TieredCakeIcon
            theme={heroCake.theme}
            topper={heroCake.topper}
            tiers={heroCake.tiers}
            className="h-full w-full max-w-[220px]"
          />
        </div>
      </section>

      {/* Trust row */}
      <section className="border-y border-black/[.06] bg-white">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <div key={point.label} className="flex flex-col items-center gap-1.5">
              <span className="text-2xl">{point.emoji}</span>
              <span className="text-sm font-medium text-ink/70">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / trust line */}
      <section className="border-b border-black/[.06] bg-white">
        <p className="mx-auto max-w-2xl px-6 py-8 text-center text-lg text-ink/70">
          Every cake is handmade to order, right here in New Jersey — no two
          are exactly alike, and every tier is packed with things baby (or
          pup) will actually use.
        </p>
      </section>

      {/* Shop by category */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
          Shop by Category
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col gap-3 rounded-2xl border border-black/[.06] bg-white p-6"
            >
              <span className="text-3xl">{category.emoji}</span>
              <h3 className="font-display text-xl font-semibold">
                {category.name}
              </h3>
              <p className="flex-1 text-sm text-ink/70">
                {category.description}
              </p>
              <Link
                href={`/shop?category=${category.slug}`}
                className="text-sm font-semibold underline-offset-4 hover:underline"
              >
                Shop {category.shortName} Cakes →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Ways to get your order */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
          Ways to Get Your Order
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FULFILLMENT_OPTIONS.map((option) => (
            <div
              key={option.title}
              className="flex flex-col items-center gap-2 rounded-2xl border border-black/[.06] bg-white p-6 text-center"
            >
              <span className="text-3xl">{option.emoji}</span>
              <h3 className="font-display text-lg font-semibold">
                {option.title}
              </h3>
              <p className="text-sm text-ink/70">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Tiers of Joy */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
            Why Tiers of Joy
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Best Sellers */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
          Featured &amp; Best Sellers
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/shop"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
            Kind Words
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <blockquote
                key={i}
                className="rounded-2xl bg-cream p-6 text-sm italic text-ink/70"
              >
                “{testimonial.quote}”
              </blockquote>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink/40">
            Note: swap in real reviews once collected — even a few short ones
            go a long way for gift-buyer trust.
          </p>
        </div>
      </section>

      {/* For Businesses teaser */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-sand/25 px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Own a boutique, daycare, or pet grooming business?
          </h2>
          <p className="max-w-xl text-ink/70">
            Tiers of Joy partners with local NJ businesses to bring inedible
            cakes to your customers — no pricing pressure, just a simple
            conversation.
          </p>
          <Link
            href="/for-businesses"
            className="flex h-12 items-center justify-center rounded-full border border-black/[.12] px-6 text-base font-medium transition-colors hover:bg-black/[.04]"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Instagram / social proof */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight">
            Follow Along {SITE.instagramHandle}
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {bestSellers.slice(0, 6).map((product) => (
              <div
                key={product.slug}
                className="flex aspect-square items-center justify-center rounded-xl bg-blush/15 p-3"
              >
                <TieredCakeIcon
                  theme={product.theme}
                  topper={product.topper}
                  tiers={product.tiers}
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink/50">
            Placeholder grid — connect a live Instagram embed for{" "}
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
      <section className="bg-blush/25 py-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Get 10% off your first cake
          </h2>
          <p className="text-ink/70">
            Join the list for shower season tips, new designs, and first
            access to seasonal releases (hello, summer swim cakes 🏖️).
          </p>
          <EmailSignup />
        </div>
      </section>
    </div>
  );
}
