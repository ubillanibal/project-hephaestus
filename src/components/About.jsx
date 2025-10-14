export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12" id="about">
      <h2 className="text-2xl font-semibold mb-3">About</h2>
      <p className="leading-relaxed">
        I work across UX research, interaction design and high-fidelity UI.
        Tools I use: <strong>Figma</strong>, <strong>React</strong>, and{" "}
        <strong>Tailwind</strong>. I like shipping small tests and iterating
        from data.
      </p>
      <div className="mt-4 flex gap-3">
        <span className="px-3 py-1 rounded-full bg-white shadow-sm text-sm">
          Figma
        </span>
        <span className="px-3 py-1 rounded-full bg-white shadow-sm text-sm">
          React
        </span>
        <span className="px-3 py-1 rounded-full bg-white shadow-sm text-sm">
          Tailwind
        </span>
      </div>
    </section>
  );
}
