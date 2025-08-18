"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RigConstruction() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/images/rig-hero.jpg" // 📸 Replace with actual hero image
          alt="Rig Construction & Offshore Engineering"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Rig Construction & Offshore Engineering
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We design, construct, and maintain offshore and onshore rigs for
            oil, gas, and renewable energy operations — engineered for strength,
            safety, and long-term reliability.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Building the Future of Energy
          </h2>
          <p className="mb-4">
            At <strong>ML Global Energy</strong>, our offshore and onshore rigs
            are engineered to operate in some of the world’s most challenging
            environments. Whether it’s deepwater drilling in turbulent seas or
            land rigs in remote desert locations, our teams combine cutting-edge
            engineering with decades of fabrication experience.
          </p>
          <p>
            We provide end-to-end solutions — from design and heavy fabrication
            to logistics, crew support, and environmentally responsible
            decommissioning.
          </p>
        </motion.div>
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            📸 Image Placeholder (Offshore rig construction)
          </div>
        </motion.div>
      </section>

      {/* Services / Expertise */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Offshore Expertise</h2>
            <ul className="space-y-4">
              <li>
                <strong>Heavy Fabrication –</strong> Designing and assembling
                steel structures, derricks, and sub-sea platforms capable of
                withstanding harsh marine environments.
              </li>
              <li>
                <strong>Equipment Integration –</strong> Installation of
                drilling systems, blowout preventers (BOPs), risers, and safety
                devices that ensure operational integrity.
              </li>
              <li>
                <strong>Offshore Logistics –</strong> End-to-end vessel support,
                supply chain coordination, helicopter transport, and crew
                accommodation solutions.
              </li>
              <li>
                <strong>End-of-Life Services –</strong> Safe dismantling,
                recycling, and decommissioning of rigs, ensuring compliance with
                international environmental standards.
              </li>
              <li>
                <strong>Hybrid Energy Integration –</strong> Incorporating
                renewable systems such as offshore wind and solar to reduce
                emissions and improve efficiency.
              </li>
            </ul>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              📸 Image Placeholder (Crew & offshore operations)
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation & Safety */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            📸 Image Placeholder (Rig safety systems / modern controls)
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Innovation & Safety First</h2>
          <p className="mb-4">
            Our offshore engineering teams prioritize safety above all else.
            Every rig is equipped with advanced monitoring systems, automated
            safety shut-offs, and real-time condition tracking to minimize risk
            and protect lives.
          </p>
          <p>
            By combining robust engineering with digital innovation, we ensure
            our rigs deliver maximum uptime, operational efficiency, and reduced
            environmental impact.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
