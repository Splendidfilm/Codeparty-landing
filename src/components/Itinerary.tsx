import jsPDF from "jspdf";

const downloadSchedulePDF = () => {
  const pdf = new jsPDF();

  // 🎨 Header background
  pdf.setFillColor(23, 207, 57); // deep blue
  pdf.rect(0, 0, 210, 30, "F");

  // 🖼 Logo
  pdf.addImage("/Logo.png", "PNG", 15, 5, 20, 20);

  // 📝 Title
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(16);
  pdf.text("CodeParty Event Schedule", 40, 18);

  let y = 40;

  schedule.forEach((item) => {
    // Title
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text(`${item.time} — ${item.title}`, 20, y);
    y += 6;

    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(50, 50, 50);

    // Description
    if (item.description) {
      const text = pdf.splitTextToSize(item.description, 160);
      pdf.text(text, 25, y);
      y += text.length * 5;
    }

    // Speaker
    if (item.speaker) {
      pdf.text(`Speaker: ${item.speaker}`, 25, y);
      y += 5;
    }

    // Room
    if (item.room) {
      pdf.text(`Room: ${item.room}`, 25, y);
      y += 5;
    }

    // Divider
    pdf.setDrawColor(200, 200, 200);
    pdf.line(20, y, 190, y);
    y += 8;

    // New page if needed
    if (y > 280) {
      pdf.addPage();
      y = 20;
    }
  });

  pdf.save("CodeParty-Schedule.pdf");
};

type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
  tag?: string;
  speaker?: string;
  room?: string;
  details?: string;
};
const schedule: ScheduleItem[] = [
  {
    time: "9:00 AM - 10:00 AM",
    title: "Registration",
    description: "Arrival and check-in of students and schools",
    room: "Entrance Hall",
  },
  {
    time: "10:00 AM - 10:20 AM",
    title: "Opening Experience",
    description: "Welcome + overview of the day",
    speaker: "Event Hosts",
    room: "Main Hall",
  },
  {
    time: "10:30 AM - 11:15 AM",
    title: "Workshops (Parallel Sessions)",
    description: "45 mins • Choose one track",
    tag: "Parallel",
    room: "Room A, B, C, D",
    details: `
Room A – Web Design  
Room B – Game Development  
Room C – Digital Design  
Room D – Storytelling & Animation
`
  },
  {
    time: "11:20 AM - 12:10 PM",
    title: "Pitching Competition (Semi-Finals)",
    speaker: "Judging Panel",
    room: "Main Hall",
    details:
      "Teams present solutions developed before the event. Top teams advance to finals.",
  },
  {
    time: "12:10 PM - 1:30 PM",
    title: "Tech Talks",
    description: "4 × 20 mins",
    speaker: "Guest Speakers",
    room: "Main Stage",
    details:
      "Short, high-impact talks focused on tech, creativity, and innovation.",
  },
  {
    time: "1:30 PM - 3:25 PM",
    title: "Refreshment Break & Gaming Tournament",
    description:
      "Relax, recharge, and network with fellow participants and mentors. Followed by 45 mins • Virtual games • Only registered schools can participate",
    tag: "Break & Competitive",
    room: "Gaming Zone",
  },
  {
    time: "2:50 PM - 3:20 PM",
    title: "Tech Demonstrations",
    description:
      "Interactive showcase of student projects and innovations",
    room: "Exhibition Area",
  },
  {
    time: "3:20 PM - 3:30 PM",
    title: "Feedback & Closing",
    description: "Wrap-up & reflections",
    speaker: "Organizing Team",
    room: "Main Hall",
  },
];

import { useState } from "react";

export default function EventSchedule() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className=" w-full py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center text-brand-green">
          Event Schedule
        </h2>

    <div className=" flex my-10 items-center justify-around text-center">

        
        <button
  onClick={downloadSchedulePDF}
  className="mt-8 px-6 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-700 shadow-lg hover:shadow-xl active:scale-95 transition-all  flex items-center gap-2"
>
  Download Schedule <span className="material-symbols-outlined" >download</span>
</button>
    </div>

        <div className="space-y-5">
          {schedule.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition py-5 "
              >  
                {/* CLICKABLE HEADER */}
                <div
                  onClick={() => toggle(index)}
                  className="cursor-pointer p-5 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm text-brand-green font-semibold">
                      {item.time}
                    </p>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>

                  {/* ICON */}
                  <span className={!isOpen ? "text-2xl text-white w-14 h-14 flex items-center justify-center text-center p-4  shadow-md transition-all  rounded-full bg-brand-green " : "text-2xl text-white w-10 h-10 flex items-center justify-center text-center p-4  shadow-md transition-all  rounded-full bg-zinc-900 " }>
                    {isOpen ? "−" : "+"}
                  </span>
                  
                </div>

                {/* EXPANDED CONTENT */}
                <div
                  className={`px-5 transition-all duration-300 ${
                    isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {item.description && (
                    <p className="text-gray-600 mb-2">
                      {item.description}
                    </p>
                  )}

                  {item.speaker && (
                    <p className="text-sm text-gray-700">
                      <strong>Speaker:</strong> {item.speaker}
                    </p>
                  )}

                  {item.room && (
                    <p className="text-sm text-gray-700">
                      <strong>Room:</strong> {item.room}
                    </p>
                  )}

                  {item.details && (
                    <p className="text-sm text-gray-600 mt-2">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}