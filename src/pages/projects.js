"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectManagement() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden"> {/* ✅ stop horizontal scroll */}
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/projectupdate.jpg"
          alt="Global Project Management & Consultancy"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Global Project Management & Consultancy
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            End-to-end leadership for complex industrial and energy ventures —
            ensuring projects are delivered on time, on budget, and beyond
            expectations.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Strategic Leadership</h2>
          <p className="mb-4">
            At <strong>ML Global Energy</strong>, we bring world-class
            consultancy and management expertise to every project we handle.
            From mega-refineries and LNG terminals to renewable energy parks and
            hybrid power systems, our project teams provide the clarity,
            structure, and execution needed to transform vision into reality.
          </p>
          <p>
            We act as the central command — aligning engineers, contractors,
            investors, regulators, and supply chain partners under one seamless
            project management framework.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/projectDiscuss.jpg"
            alt="Project discussion"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </section>

      {/* Key Services */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Expertise</h2>
            <ul className="space-y-4 text-base sm:text-lg">
              <li><strong>Feasibility Studies –</strong> Technical, commercial, financial, and environmental risk assessments to validate project viability.</li>
              <li><strong>Procurement & Supply Chain –</strong> Strategic sourcing, vendor evaluation, contract negotiations, and just-in-time delivery for cost efficiency.</li>
              <li><strong>Regulatory Navigation –</strong> Securing permits, licenses, environmental clearances, and government approvals in multiple jurisdictions.</li>
              <li><strong>Stakeholder Coordination –</strong> Effective alignment of contractors, suppliers, government agencies, financiers, and investors.</li>
              <li><strong>Risk & Compliance –</strong> Ensuring adherence to international safety standards, ESG goals, and legal frameworks.</li>
              <li><strong>Digital PM Tools –</strong> Utilizing AI-driven dashboards, BIM models, and cloud-based tracking for full project transparency.</li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="/plan.jpg"
              alt="Project planning"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/mapoperate.jpg"
            alt="Global operations map"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Global Reach, Local Impact</h2>
          <p className="mb-4">
            Our consultancy teams are active across Africa, the Middle East,
            Europe, and Asia — leveraging global best practices while adapting
            to local regulations, cultural expectations, and regional challenges.
          </p>
          <p>
            By combining technical expertise with strategic insights, we ensure
            that every project is managed with precision, transparency, and
            maximum value for all stakeholders.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
