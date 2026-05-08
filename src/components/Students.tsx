import { motion } from 'framer-motion'

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

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
//   }),
// }

export default function Students() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
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
            className="mt-5 text-brand-green/70 text-lg md:text-xl italic font-serif max-w-xl"
          >
            Meet our kids who are making the magic happen behind the scenes.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            //   variants={cardVariants}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-zinc-100 hover:border-brand-green/20 hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 bg-white"
            >
              {/* Avatar */}
<div className="w-full aspect-square overflow-hidden rounded-2xl border border-zinc-100 group-hover:border-brand-green/30 transition-all duration-300">
  <img
    src={student.img}
    alt={student.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>
              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="font-extrabold text-lg md:text-base lg:text-lg text-zinc-800 font-['Nunito'] leading-tight">
                  {student.name}
                </h3>
                <span className=" font-semibold text-brand-green bg-green-50 px-3 py-1 rounded-full font-['Nunito'] text-sm lg:text-base ">
                  {student.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}