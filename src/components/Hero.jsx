import React from "react";

export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto py-14 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Anibal Ubilla — Design meets Code
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
        I build thoughtful interfaces that feel simple, look sharp, and work fast, from Figma to React, every pixel has a purpose.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-5 py-2 rounded-xl bg-babyblue/80 hover:opacity-90"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
