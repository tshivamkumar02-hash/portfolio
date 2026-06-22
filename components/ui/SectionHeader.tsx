interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <>
      <div
        className="
        h-px
        bg-linear-to-r
        from-transparent
        via-cyan-500
        to-transparent
        mb-12
        "
      />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        <p className="text-slate-400 mt-4">
          {subtitle}
        </p>
      </div>
    </>
  );
}