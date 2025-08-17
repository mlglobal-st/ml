
"use client";
import { motion } from "framer-motion";

export default function IndustrialPlant() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-emerald-800 to-emerald-500 text-white">
        <div className="absolute inset-0">
          {/* Banner Image Placeholder */}
          <div className="w-full h-full bg-black opacity-30"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Industrial Plant Development & Maintenance
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Delivering full-scale EPC solutions for refineries, LNG plants, and petrochemical facilities worldwide.
          </p>
        </motion.div>
      </section>

      {/* Section 1 - Overview */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Industrial Plant Image ]</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg leading-relaxed">
            At ML Global Energy Limited, we provide end-to-end EPC (Engineering, Procurement & 
            Construction) services for large-scale industrial facilities including refineries, 
            LNG plants, and petrochemical complexes. 
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            From groundbreaking to commissioning, our projects are designed to achieve 
            productivity, profitability, and environmental responsibility — ensuring plants 
            remain competitive and efficient for decades.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Design & Construction */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Design & Construction</h2>
          <p className="text-lg leading-relaxed">
            Our expert teams bring advanced engineering and construction expertise to every project:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>
              <strong>Design & Engineering:</strong> Process optimization, safety studies, and environmental compliance built into every plan.
            </li>
            <li>
              <strong>Construction:</strong> Civil works, heavy lifting, and mechanical installations executed with precision.
            </li>
            <li>
              <strong>Project Delivery:</strong> On-time, on-budget execution supported by world-class procurement systems.
            </li>
          </ul>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Construction Site Image ]</span>
        </motion.div>
      </section>

      {/* Section 3 - Maintenance & Modernization */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Maintenance Image ]</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Maintenance & Modernization</h2>
          <p className="text-lg leading-relaxed">
            We don’t just build plants — we keep them operating at peak performance. Our services include:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>Planned shutdowns and turnaround management</li>
            <li>Routine inspections, repairs, and safety upgrades</li>
            <li>Modernization projects to extend plant life cycles</li>
            <li>Integration of new technologies with minimal downtime</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            This ensures plants remain competitive, reliable, and ready to meet future energy demands.
          </p>
        </motion.div>
      </section>

      {/* Section 4 - Energy Efficiency & Sustainability */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Energy Efficiency & Sustainability</h2>
          <p className="text-lg leading-relaxed">
            Our commitment to sustainability drives us to deliver solutions that lower costs and 
            reduce environmental impact:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>Energy-efficient process systems that cut emissions</li>
            <li>Heat recovery technologies to optimize fuel use</li>
            <li>Green building materials and eco-friendly construction methods</li>
            <li>Digital monitoring systems for smarter, cleaner operations</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed italic font-medium">
            “Our plants are built not just for today’s productivity, but for tomorrow’s sustainability.”  
            — ML Global Energy
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Energy Efficiency Image ]</span>
        </motion.div>
      </section>
    </div>
  );
}
