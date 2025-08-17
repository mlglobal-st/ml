// app/oil-gas/page.tsx  (Next.js App Router)
// or pages/oil-gas.js if using Pages Router

"use client";
import { motion } from "framer-motion";

export default function OilGas() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-amber-700 to-orange-500 text-white">
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
            Oil & Gas Exploration & Production
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Driving energy discovery and production through innovation, safety,
            and sustainable practices worldwide.
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
          <span className="text-gray-500">[ Exploration Image ]</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg leading-relaxed">
            Oil & Gas exploration and production form the backbone of the global
            energy industry. At ML Global Energy Limited, we specialize in
            identifying, extracting, and refining hydrocarbons from both onshore
            and offshore reserves, powering industries and communities across
            the world.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            From seismic surveys and geological studies to advanced drilling
            techniques, our approach integrates precision engineering with
            sustainable practices, ensuring efficiency while minimizing
            environmental impact.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Our Expertise */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg leading-relaxed">
            With decades of combined experience, our engineers and geoscientists
            deliver cutting-edge solutions in:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>Offshore and onshore drilling operations</li>
            <li>Seismic exploration and reservoir mapping</li>
            <li>Production optimization and enhanced oil recovery (EOR)</li>
            <li>Pipeline engineering and safe transportation</li>
            <li>Integrated refining and petrochemical solutions</li>
          </ul>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Drilling Rig Image ]</span>
        </motion.div>
      </section>

      {/* Section 3 - Technology & Innovation */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Technology Image ]</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Technology & Innovation
          </h2>
          <p className="text-lg leading-relaxed">
            We leverage state-of-the-art technologies such as AI-driven
            reservoir modeling, advanced 3D seismic imaging, and automated
            drilling systems to maximize efficiency and safety.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Innovation is at the heart of our operations, enabling us to push
            boundaries while maintaining the highest global standards of
            environmental responsibility.
          </p>
        </motion.div>
      </section>

      {/* Section 4 - Global Impact & Sustainability */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Global Impact & Sustainability
          </h2>
          <p className="text-lg leading-relaxed">
            Our exploration and production projects span across Europe, Africa,
            the Middle East, and Southeast Asia, ensuring energy security for
            millions of people.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Beyond profitability, ML Global Energy is committed to reducing
            carbon emissions, supporting renewable alternatives, and engaging
            local communities for long-term growth. Sustainability isn’t an
            afterthought — it’s integrated into every operation.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <span className="text-gray-500">[ Sustainability Image ]</span>
        </motion.div>
      </section>
    </div>
  );
}