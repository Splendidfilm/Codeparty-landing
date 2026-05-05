import { useState, useEffect } from "react";

type EventType = {
  year: string;
  images: string[];
  comment?: string;
};

const events: EventType[] = [
  {
    year: "May 2022 • Jos",
    comment:'Our very first gathering of curious minds in Jos city. A day filled with laughter, learning, and the spark of creativity that ignited our journey.',
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
    comment:'The Gateway to Infinite Possibilities. A day of digital inclusion, where we broke barriers and opened doors to a world of creativity and innovation for every child.',
    images: [
      "/images/2022_img(group).jpg",
      "/images/2023_img1.jpg",
      "/images/2023_img2.jpg",
    ],
  },
  {
    year: "May 2024 • Jos",
    comment:'Launched dedicated AI-assisted creative stations for kids. A day where technology met imagination, empowering our young builders to create with the help of AI and take their ideas to new heights.',
    images: [
      "/images/2022_img(group).jpg",
      "/images/2024_img1.jpg",
      "/images/2022_img(group).jpg",
      "/images/2024_img2.jpg",
    ],
  },
  {
    year: "May 2025 • Jos",
    comment:'Starting Jos Early. A day of digital leverage, where we equipped our young innovators with the tools and knowledge to shape the future of our city and beyond.',
    images: [
      "/images/2022_img(group).jpg",
      "/images/2025_img1.jpg",
      "/images/2025_img2.jpg",
    ],
  },
];

export default function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (event: EventType) => {
    setSelectedEvent(event);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (!selectedEvent) return;

    setCurrentIndex((prev) =>
      (prev + 1) % selectedEvent.images.length
    );
  };

  const prevImage = () => {
    if (!selectedEvent) return;

    setCurrentIndex((prev) =>
      prev === 0
        ? selectedEvent.images.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
  if (!selectedEvent) return;

  const nextIndex = (currentIndex + 1) % selectedEvent.images.length;
  const img = new Image();
  img.src = selectedEvent.images[nextIndex];
}, [currentIndex, selectedEvent]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Past CodeParty Moments
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => openModal(event)}
              className="cursor-pointer group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={event.images[0]}
                  alt={event.year}
                  className="w-full h-72 object-cover group-hover:scale-105 transition"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent h-1/3"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-base font-semibold ">{event.year}</p>
                  <p className="text-sm text-zinc-200">{event.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* LEFT */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-4xl p-1 bg-black/60 rounded-xl material-symbols-outlined active:opacity-90 transition-all "
            >   
              arrow_left
            </button>

            {/* IMAGE */}
            <img
              src={selectedEvent.images[currentIndex]}
              alt="event"
              className="max-h-[80vh] rounded-xl"
            />

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-4xl p-1 bg-black/60 rounded-xl material-symbols-outlined active:opacity-90 transition-all"
            >
            arrow_right
            </button>
          </div>
        )}
      </div>
    </section>
  );
}