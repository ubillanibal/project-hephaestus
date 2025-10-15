import React from "react";

function LinkButton({ href, children }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">
      {children}
    </a>
  );
}

export default function ProjectCard({ p }) {
  // Destructure the project for clearer code below
  const { title, description, tags = [], links = {}, image } = p ?? {};
  const { live: liveLink, repo: repoLink, figma: figmaLink } = links;

  // Accept image as string or array. Normalize paths and keep them as an array.
  const rawImages = Array.isArray(image) ? image : image ? [image] : [];
  const images = rawImages.map((src) => (src ? src.replace(/^\/public/, "") : src));

  // Use only the first image (do not render a thumbnail strip)
  const imgSrc = images[0] ?? null;

  return (
    <article className="card p-4">
      <div className="img-placeholder">
        {imgSrc ? (
          <div>
            <img src={imgSrc} alt={title} className="w-full h-40 object-cover rounded" />

            {/* No thumbnail strip — single image only */}
          </div>
        ) : (
          // Replace with <img src={image} alt={title} />
          <span>{title} — screenshot</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm mt-2 text-slate-600">{description}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <LinkButton href={liveLink}>Live</LinkButton>
          <LinkButton href={repoLink}>Repo</LinkButton>
          <LinkButton href={figmaLink}>Figma</LinkButton>
        </div>
      </div>
    </article>
  );
}
