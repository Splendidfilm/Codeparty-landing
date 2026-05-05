import { motion } from "framer-motion";

export default function Journey() {
  const years = [
    { year: "2022", title: "The Spark", desc: "The very first gathering of  curious minds in Jos city.",url:"/images/2022_img(kenny).jpg" },
    { year: "2023", title: "Digital Inclusion", desc: "The Gateway to Infinite Possibilities",url:"/images/hero.png" },
    { year: "2024", title: "Bold Builders", desc: "Launched dedicated AI-assisted creative stations for kids.",url:"/images/hero.png"  },
    { year: "2025", title: "Digital Leverage", desc: "Starting Jos Early.",url:"/images/hero.png" },
  ];

  return (
    <section id="journey" className=" py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto bg_hero ">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-7xl md:text-8xl font-bold lg:text-[54px] leading-tight text-brand-green/95 items-center " >
         Our Journey to 
        <span className="text-accent-yellow relative inline-block ml-1" >
         "Civic Miracle"
         <motion.span 
         initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ ease:'backInOut', duration:1.5, delay:1.5 }}
      
         className="absolute -bottom-2 left-0 w-full h-1 bg-brand-green/70 rounded-full transition-all " />
         </span>
         .
       </h2>
          <p className="mt-4 text-brand-green/80 dark:text-zinc-400 text-2xl md:text-3xl max-w-2xl">
            Every miracle begins with a leap of faith
          </p>

          
      
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 place-items-center ">
          {years.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6,ease:'easeInOut' }}
              whileHover={{ y: -12, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className=" h-full group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl border border-zinc-200/50 rounded-3xl transition-all duration-500 shadow-2xl hover:shadow-3xl flex flex-col md:flex-col items-center justify-center space-y-6 md:space-y-0 w-4/5 md:w-full overflow-hidden "
            >
<div className="flex flex-col space-y-4 h-full p-6 items-center justify-center">
              {/* Year Badge */}
                <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className=" bg-gradient-to-r from-brand-green to-accent-yellow text-white font-display text-7xl font-bold px-7 py-4 rounded-xl shadow-inner mb-8 transition-transform w-fit self-center "
              >
                {item.year}
              </motion.div>

              {/* Content */}
              <h3 className="text-5xl font-semibold text-accent-yellow text-center mb-4 transition-colors group-hover:text-brand-green">
                {item.title}
              </h3>     

              <p className=" text-brand-green/80 leading-relaxed text-2xl text-center w-full group-hover:text-brand-green/90">
                {item.desc}
              </p>
</div>

               <motion.img 
               whileHover={{ scale:1.05 }}
               transition={{ duration:0.5,}}
               src={item.url} 
               alt="children"
                className=" h-full w-full object-cover object-top rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-b-3xl transition-all group-hover:brightness-110 " />
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}