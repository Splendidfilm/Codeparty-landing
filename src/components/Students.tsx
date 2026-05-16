import { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion'

interface Student {
  name: string;
  img: string;
  role: string;
  badgeLogos: string[];
}

const students: Student[] = [
  { name: 'Blessing', img: '/images/Students/blessing.png', role: 'BlockBuilder (Scratch)', badgeLogos: [  '/images/badges/scratch.webp','/images/badges/Machine.png'] },
  { name: 'David ', img: '/images/Students/bobo.png', role: 'CreativeSpark (Scratch)', badgeLogos: [  '/images/badges/Machine.png', '/images/badges/scratch.webp',] },
  
  { name: 'Brayan ', img: '/images/Students/jj.png', role: 'CreativeSpark (Scratch)', badgeLogos: [  '/images/badges/Machine.png', '/images/badges/scratch.webp',] },
  
    { name: 'Rhoda', img: '/images/Students/rhoda.jpg', role: 'CreativeSpark (Scratch)', badgeLogos: [  '/images/badges/Machine.png', '/images/badges/scratch.webp',] },
  
  { name: 'Aaron', img: '/images/Students/Aaron.jpg', role: 'Frontend Developer', badgeLogos: [ '/images/badges/Machine.png', '/images/badges/scratch.webp','/images/badges/vscode.png'] },
  
  { name: 'Deborah', img: '/images/Students/debbie.png', role: 'Frontend Developer', badgeLogos: [ '/images/badges/vscode.png', '/images/badges/Machine.png', '/images/badges/scratch.webp',] },

  { name: 'Isreal', img: '/images/Students/Isreal.png', role: 'Frontend Developer', badgeLogos: [ '/images/badges/vscode.png', '/images/badges/Machine.png', '/images/badges/scratch.webp',] },
  
    { name: 'Jayden', img: '/images/Students/J.png', role: ' PixelPioneer (Scratch)', badgeLogos: [ '/images/badges/Machine.png', '/images/badges/scratch.webp',] },

  { name: 'Srarina', img: '/images/Students/S.png', role: 'Frontend Developer', badgeLogos: [ '/images/badges/vscode.png', '/images/badges/Machine.png', '/images/badges/scratch.webp','/images/badges/python.png'] },

  { name: 'Oluwaseyi ', img: '/images/Students/seyi.png', role: 'Game Developer', badgeLogos: [ '/images/badges/vscode.png', '/images/badges/Machine.png', '/images/badges/scratch.webp','/images/badges/unity.png'] },

  { name: 'Oluwagbemi', img: '/images/Students/gbemi.png', role: 'Game Developer', badgeLogos: [ '/images/badges/vscode.png', '/images/badges/Machine.png', '/images/badges/godot.png','/images/badges/unity.png'] },

  { name: 'Williams', img: '/images/Students/Williams.png', role: 'Game Developer', badgeLogos: [ '/images/badges/unity.png', '/images/badges/Machine.png', '/images/badges/scratch.webp','/images/badges/vscode.png'] },

  { name: 'Jonathan', img: '/images/Students/Tisloh.png', role: 'Script Sorcerer (Scratch) ', badgeLogos: [ '/images/badges/Machine.png', '/images/badges/scratch.webp'] },

]

const marqueeStudents = [...students, ...students]

function StudentCard({ student }: { student: Student }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl border border-zinc-100 hover:border-brand-green/20 hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 bg-white">

      {/* Top accent border */}
      <div className="w-full h-1 rounded-full bg-accent-yellow/20 group-hover:bg-accent-yellow transition-all duration-300" />

      {/* Image with stacking badges */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl border border-zinc-100 group-hover:border-brand-green/30 transition-all duration-300">
        <img
          src={student.img}
          alt={student.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge stack */}
        <div
          className="absolute bottom-2 right-2 flex flex-col-reverse items-center"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onTouchStart={() => setExpanded(prev => !prev)}
        >
          {student.badgeLogos.map((logo, i) => (
            <motion.div
              key={i}
              animate={
                expanded
                  ? { y: -(i * 44), opacity: 1, scale: 1 }
                  : { y: -(i * 6), opacity: i === 0 ? 1 : 0.6, scale: 1 - i * 0.06 }
              }
              transition={{ type: 'spring', stiffness: 320, damping: 22, delay: i * 0.04 }}
              className="absolute w-9 h-9 rounded-xl bg-white shadow-md border border-zinc-100 flex items-center justify-center p-1.5"
              style={{ zIndex: student.badgeLogos.length - i }}
            >
              <img
                src={logo}
                alt={`badge-${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          {/* Invisible hit area to keep hover stable */}
          <div className="w-9" style={{ height: `${student.badgeLogos.length * 6 + 36}px` }} />
        </div>
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
    <section id='students' className="w-full py-16 md:py-24 bg-white overflow-hidden">
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