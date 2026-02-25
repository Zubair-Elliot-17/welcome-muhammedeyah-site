import { useState } from "react";
import galleryArts from "@/assets/gallery-arts.jpg";
import gallerySports from "@/assets/gallery-sports.jpg";
import galleryConcert from "@/assets/gallery-concert.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import schoolBuilding from "@/assets/school-building.jpg";

const categories = ["All", "Events", "Sports", "Arts", "Campus"];

const photos = [
  { src: heroStudents, alt: "Students in the courtyard", category: "Campus" },
  { src: galleryArts, alt: "Arts and crafts activities", category: "Arts" },
  { src: gallerySports, alt: "Annual sports day", category: "Sports" },
  { src: galleryConcert, alt: "School concert", category: "Events" },
  { src: schoolBuilding, alt: "Our beautiful campus", category: "Campus" },
  { src: gallerySports, alt: "Inter-house athletics", category: "Sports" },
  { src: galleryArts, alt: "Classroom creativity", category: "Arts" },
  { src: galleryConcert, alt: "Year-end celebration", category: "Events" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="bg-school-warm-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">
            Capturing Memories
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold text-foreground">
            Photo Gallery
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Browse through highlights from our school events, sports days, arts programmes, and everyday moments.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground ring-1 ring-border hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((photo, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl shadow-md ring-1 ring-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-card p-3">
                <p className="text-sm font-medium text-foreground">{photo.alt}</p>
                <span className="text-xs text-muted-foreground">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
