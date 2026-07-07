export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden bg-olive-dark py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm font-semibold uppercase tracking-widest text-cream"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
