import { useState, useEffect } from "react";

type EventType = {
  year: string;
  images: string[];
  comment?: string;
};

const events: EventType[] = [
  {
    year: "MAY • Jos, Plateau State",
    comment:
      "From our humble beginnings in 2022 to our latest gathering in 2024, each year has been a chapter filled with laughter, learning, and unforgettable moments. Dive into our visual journey and relive the magic of past CodeParty events.",
    images: [
      "/images/2024/Main.jpg",
      // "/images/2024/1.jpg",
      "/images/2024/16.jpg",
      "/images/2024/2.jpg",
      "/images/2024/3.jpg",
      "/images/2024/4.jpg",
      "/images/2022/IMG_20220527_144522.webp",
      "/images/2024/5.jpg",
      "/images/2022/bashjpg.jpg",
      "/images/2024/6.jpg",
      "/images/2024/7.jpg",
      "/images/2024/9.jpg",
      "/images/2024/10.jpg",
      "/images/2024/11.jpg",
      "/images/2022/IMG_20220527_115139.webp",
      "/images/2024/12.jpg",
      "/images/2024/13.jpg",
      "/images/2024/14.jpg",
      "/images/2022/IMG_20220527_140012.webp",
      "/images/2024/15.jpg",
      "/images/2024/28.jpg",
      "/images/2024/16.jpg",
      "/images/2024/17.jpg",
      "/images/2022/IMG_20220527_115318.webp",
      "/images/2024/18.jpg",
      "/images/2024/19.jpg",
      "/images/2022/IMG_20220527_144903.webp",
      "/images/2024/20.jpg",
      "/images/2024/21.jpg",
      "/images/2022/IMG_20220527_145305.webp",
      "/images/2024/22.jpg",
      "/images/2024/23.jpg",
      "/images/2022/Copy of IMG_20220527_134206.webp",
      "/images/2022/IMG_20220527_115210.webp",
      "/images/2024/26.jpg",
      "/images/2024/27.jpg",
      "/images/2024/24.jpg",
      "/images/2024/25.jpg",

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
    <section className="py-20 bg-white" id="highlights" >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="  text-4xl font-bold text-brand-green mb-3">
           Gallery: <span className=" font-serif text-zinc-800 text-3xl" >Past CodeParty Moments</span> 
          </h2>
          <p className="text-zinc-500 text-xl ">
            A visual journey through the years
          </p>
        </div>

        {/* COLLAGE PER YEAR */}
        <div className="space-y-20">
          {events.map((event, index) => (
            <div key={index}>

              {/* YEAR */}
              <div className="mb-6 space-y-5">
                <h3 className="text-2xl font-semibold text-brand-green   ">
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
                      className={`relative overflow-hidden rounded-2xl cursor-pointer  group
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
              className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-xl material-symbols-outlined active:scale-95 transition-all "
            >
              arrow_left
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
              className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-xl material-symbols-outlined active:scale-95 transition-all  "
            >
              arrow_right
            </button>
          </div>
        )}
      </div>
    </section>
  );
}