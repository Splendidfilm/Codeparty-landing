import { useState, useEffect } from "react";

type EventType = {
  year: string;
  images: string[];
  comment?: string;
};

const events: EventType[] = [
  {
    year: "May 2022 • Jos",
    comment:
      "Our very first gathering of curious minds in Jos city. A day filled with laughter, learning, and the spark of creativity that ignited our journey.",
    images: [
      "/images/2022/IMG_20220527_115139.webp",
      "/images/2022/Copy of IMG_20220527_134206.webp",
      "/images/2022/IMG_20220527_115210.webp",
      "/images/2022/IMG_20220527_115318.webp",
      "/images/2022/IMG_20220527_140012.webp",
      "/images/2022/IMG_20220527_144522.webp",
      "/images/2022/IMG_20220527_144903.webp",
      "/images/2022/IMG_20220527_145305.webp",
    ],
  },
  {
    year: "May 2023 • Jos",
    comment:
      "The Gateway to Infinite Possibilities. A day of digital inclusion...",
    images: [
      "/images/2022_img(group).jpg",
      "/images/2023_img1.jpg",
      "/images/2023_img2.jpg",
    ],
  },
  {
    year: "May 2024 • Jos",
    comment:
      "Launched dedicated AI-assisted creative stations for kids...",
    images: [
      "/images/2022_img(group).jpg",
      "/images/2024_img1.jpg",
      "/images/2022_img(group).jpg",
      "/images/2024_img2.jpg",
    ],
  },
  {
    year: "May 2025 • Jos",
    comment:
      "Starting Jos Early. A day of digital leverage...",
    images: [
      "/images/2022_img(group).jpg",
      "/images/2025_img1.jpg",
      "/images/2025_img2.jpg",
    ],
  },
];

export default function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // preload next image (keeps your slider smooth)
  useEffect(() => {
    if (!selectedEvent) return;

    const nextIndex = (currentIndex + 1) % selectedEvent.images.length;
    const img = new Image();
    img.src = selectedEvent.images[nextIndex];
  }, [currentIndex, selectedEvent]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Past CodeParty Moments
          </h2>
          <p className="text-zinc-500">
            A visual journey through the years
          </p>
        </div>

        {/* COLLAGE PER YEAR */}
        <div className="space-y-20">
          {events.map((event, index) => (
            <div key={index}>

              {/* YEAR */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {event.year}
                </h3>
                <p className="text-zinc-500 max-w-2xl">
                  {event.comment}
                </p>
              </div>

              {/* COLLAGE GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {event.images.map((img, i) => {
                  const isLarge = i % 5 === 0;

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedEvent(event);
                        setCurrentIndex(i);
                      }}
                      className={`relative overflow-hidden rounded-2xl cursor-pointer group
                        ${isLarge ? "col-span-2 row-span-2" : ""}
                      `}
                    >
                      <img
                        src={img}
                        alt="event"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* LEFT */}
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0
                    ? selectedEvent.images.length - 1
                    : prev - 1
                )
              }
              className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-xl"
            >
              ‹
            </button>

            {/* IMAGE */}
            <img
              src={selectedEvent.images[currentIndex]}
              alt="event"
              className="max-h-[85vh] max-w-[90vw] rounded-xl"
            />

            {/* RIGHT */}
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  (prev + 1) % selectedEvent.images.length
                )
              }
              className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-xl"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}