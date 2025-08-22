"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RenewableHybridEnergy() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Renewable & Hybrid Energy Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognizing the global shift towards clean energy, we integrate renewable solutions into our core operations, 
            ensuring a balance between sustainability, efficiency, and reliability.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Solar Farms
              </h3>
              <p className="text-gray-600">
                Design, engineering, and installation of utility-scale photovoltaic plants that harness the sun’s 
                energy to provide clean, reliable, and cost-efficient power for industries and communities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Wind Energy
              </h3>
              <p className="text-gray-600">
                Turnkey development of wind farms, from turbine foundation design to grid integration, ensuring 
                maximum energy output while minimizing environmental impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Hybrid Energy Systems
              </h3>
              <p className="text-gray-600">
                Combining renewable energy sources with conventional power generation to deliver 
                stable, efficient, and resilient energy solutions for clients worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Sustainability Goals
              </h3>
              <p className="text-gray-600">
                Supporting clients in achieving net-zero targets through tailored solutions that 
                reduce carbon emissions, increase efficiency, and promote long-term sustainability.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Replace with real image */}
            <Image
              src="/renewable.jpg"
              alt="Renewable & Hybrid Energy"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
