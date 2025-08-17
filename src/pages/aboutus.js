// app/about/page.tsx  (Next.js 13+ App Router)
// or pages/about.js if using Pages Router

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div className="absolute inset-0">
          {/* Banner Image Placeholder */}
          <div className="w-full h-full bg-gray-800 opacity-30"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the story, vision, and leadership of{" "}
            <span className="font-semibold">Mr. Michael Lee Yeong</span> — CEO of ML Global Energy Limited.
          </p>
        </motion.div>
      </section>

      {/* Section 1 - Early Life & Education */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ CEO Image Placeholder ]</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Early Life & Education</h2>
          <p className="text-lg leading-relaxed">
            Mr. Michael Lee Yeong was born in Norwich, Norfolk, United Kingdom, into a richly multicultural family. 
            His mother, originally from Miri Sarawak Malaysia, and his father, a British Korean, instilled in him 
            a deep appreciation for diverse cultures, values, and traditions. This unique blend of Eastern and Western 
            influences shaped his worldview and laid the foundation for the global mindset he carries into his work today.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            From an early age, Michael demonstrated a natural curiosity for how things work and an exceptional aptitude 
            for science and engineering. Growing up in Norwich, he excelled in academics, balancing a strong work ethic 
            with an eagerness to explore new ideas.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Career & Achievements */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Career & Achievements</h2>
          <p className="text-lg leading-relaxed">
            Michael Lee Yeong has carved an extraordinary path in the global energy sector, making history as one of 
            the youngest CEOs to lead a major integrated oil, gas, and renewable energy company in the United Kingdom. 
            His appointment to the helm of ML Global Energy Limited marked a generational shift in the industry, symbolizing 
            the rise of bold, forward-thinking leadership in a traditionally older-dominated field.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Under his leadership, ML Global Energy has rapidly evolved into a multi-disciplinary powerhouse engaged in 
            pipeline installation, crude oil drilling, offshore gas exploration, nuclear infrastructure, renewable energy rigs, 
            and global fuel development.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Career Image Placeholder ]</span>
        </motion.div>
      </section>

      {/* Section 3 - Vision & Leadership */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Vision Image Placeholder ]</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vision & Leadership</h2>
          <p className="text-lg leading-relaxed">
            Michael Lee Yeong’s leadership philosophy is grounded in innovation, integrity, and global collaboration. 
            He believes the future of energy depends on a seamless integration of technical excellence and sustainable practices.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            At the heart of his vision for ML Global Energy Limited is a commitment to energy diversification: leveraging 
            traditional oil and gas expertise while actively investing in clean, renewable solutions to responsibly meet 
            the world’s growing energy demands.
          </p>
          <p className="mt-4 text-lg leading-relaxed italic font-medium">
            “The world’s energy future is not a choice between fossil fuels or renewables — it’s about engineering a balanced, 
            innovative, and sustainable path forward. That’s the mission I’ve committed my life’s work to achieving.”  
            — Michael Lee Yeong
          </p>
        </motion.div>
      </section>
    </div>
  );
}
