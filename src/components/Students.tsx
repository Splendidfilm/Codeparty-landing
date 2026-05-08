import { motion, useAnimationControls } from 'framer-motion'

interface Student {
  name: string;
  img: string;
  role: string;
}

const students: Student[] = [
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
  { name: 'John Doe', img: '/images/Students/hero.png', role: 'Frontend Developer' },
]

const marqueeStudents = [...students, ...students]

function StudentCard({ student }: { student: Student }) {
  return (
    <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl border border-zinc-100 hover:border-brand-green/20 hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 bg-white">
      
      {/* Top accent border */}
      <div className="w-full h-1 rounded-full bg-brand-green/20 group-hover:bg-brand-green transition-all duration-300" />

      {/* Image */}
      <div className="w-full aspect-square overflow-hidden rounded-xl border border-zinc-100 group-hover:border-brand-green/30 transition-all duration-300">
        <img
          src={student.img}
          alt={student.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-extrabold text-base text-zinc-800 font-['Nunito'] leading-tight">
          {student.name}
        </h3>
        <span className="font-semibold text-brand-green bg-green-50 px-3 py-1.5 rounded-full font-['Nunito'] text-sm w-fit mx-auto">
          {student.role}
        </span>
      </div>
    </div>
  )
}

export default function Students() {
  const controls = useAnimationControls()

  const startMarquee = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { duration: 30, ease: 'linear', repeat: Infinity },
    })
  }

  const stopMarquee = () => controls.stop()

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl lg:text-[54px] font-semibold leading-tight text-brand-green"
          >
            The Team Behind{" "}<br />
            <span className="italic relative inline-block text-accent-yellow">
              "Codeplay72"
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ ease: 'backInOut', duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 h-[3px] bg-brand-green/60 rounded-full"
              />
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-5 text-brand-green/70 text-base md:text-lg italic font-serif max-w-xl"
          >
            Meet our kids who are making the magic happen behind the scenes.
          </motion.p>
        </div>
      </div>

      {/* Mobile: 2-col static grid */}
      <div className="md:hidden grid grid-cols-2 gap-4 px-4">
        {students.map((student, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <StudentCard student={student} />
          </motion.div>
        ))}
      </div>

      {/* Desktop: marquee */}
      <div className="relative hidden md:flex overflow-hidden">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 items-stretch"
          animate={controls}
          onViewportEnter={startMarquee}
          onMouseEnter={stopMarquee}
          onMouseLeave={startMarquee}
        >
          {marqueeStudents.map((student, index) => (
            <div key={index} className="flex-shrink-0 w-52">
              <StudentCard student={student} />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}