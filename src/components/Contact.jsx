import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h2 className="text-xl font-semibold mb-3">Get in touch</h2>
      <p className="mb-4">
        Email:{" "}
        <a href="mailto:ubilla.anibal@gmail.com" className="underline">
          ubilla.anibal@gmail.com
        </a>
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/ubillanibal"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/anibal-ubilla/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-xs text-slate-500 mt-6">
        © {new Date().getFullYear()} Anibal Ubilla
      </p>
    </footer>
  );
}
