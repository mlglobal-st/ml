"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Pipeline() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-sky-800 to-sky-500 text-white">
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
            Pipeline Engineering & Installation
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Designing and delivering world-class pipeline systems that power
            industries and communities for generations.
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
          className="w-full relative h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <Image
            src="/pipe1.jpg"
            fill
            className=" rounded-2xl object-cover object-center"
          />{" "}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg leading-relaxed">
            At ML Global Energy Limited, we specialize in the design,
            construction, and maintenance of high-capacity pipelines for crude
            oil, refined fuels, natural gas, petrochemicals, and industrial
            liquids. Our pipelines are engineered to deliver energy reliably and
            safely under the harshest conditions — ensuring uninterrupted energy
            supply across continents.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether spanning rugged terrains, crossing rivers, or traversing
            urban landscapes, our engineering excellence and commitment to
            quality guarantee pipelines that last decades with minimal
            disruption.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Engineering & Compliance */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Engineering & Compliance
          </h2>
          <p className="text-lg leading-relaxed">
            Our pipelines are engineered with cutting-edge design principles,
            ensuring safety, efficiency, and longevity:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>
              <strong>Advanced Engineering:</strong> Utilizing 3D modeling,
              terrain mapping, and stress analysis to optimize routes and
              guarantee structural integrity.
            </li>
            <li>
              <strong>Global Compliance:</strong> Adhering strictly to
              international standards such as ISO, ASME, and API for world-class
              safety and performance.
            </li>
            <li>
              <strong>Safety-First Culture:</strong> Every phase of our pipeline
              projects is executed with rigorous safety protocols to protect
              both people and the environment.
            </li>
          </ul>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full relative h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <Image
            src="/tddrawing.jpg"
            fill
            className="object-cover object-center rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Section 3 - Sustainability & Innovation */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full relative h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <Image
            src="/pipe1.jpg"
            fill
            className="object-cover object-center rounded-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sustainability & Innovation
          </h2>
          <p className="text-lg leading-relaxed">
            Our pipeline systems are built with sustainability at their core:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>
              <strong>Trenchless Technology:</strong> Using horizontal
              directional drilling and tunneling methods to minimize
              environmental disruption.
            </li>
            <li>
              <strong>Eco-Friendly Materials:</strong> Incorporating
              corrosion-resistant, recyclable materials for longer service life.
            </li>
            <li>
              <strong>Resilience in Harsh Environments:</strong> Designed to
              withstand seismic zones, extreme climates, and high-pressure
              demands.
            </li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            By combining innovation with responsibility, we create
            infrastructure that not only powers industries but also protects
            ecosystems and communities.
          </p>
        </motion.div>
      </section>

      {/* Section 4 - Lifecycle & Global Projects */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lifecycle & Global Projects
          </h2>
          <p className="text-lg leading-relaxed">
            Our commitment extends beyond construction. We deliver full
            lifecycle support to ensure long-term pipeline performance:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>Route surveying and feasibility studies</li>
            <li>Materials selection and procurement</li>
            <li>Construction and commissioning</li>
            <li>Ongoing inspection, monitoring, and repair</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            Our pipeline networks span Europe, Africa, the Middle East, and Asia
            — playing a vital role in delivering crude oil, refined fuels,
            natural gas, and petrochemicals to industries and households
            worldwide.
          </p>
          <p className="mt-4 text-lg leading-relaxed italic font-medium">
            “Pipelines are more than infrastructure — they are lifelines that
            connect communities, fuel industries, and drive global progress.” —
            ML Global Energy
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=" relative w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
        >
          <Image
            src="/pipelocation.jpg"
            fill
            className="object-cover object-center rounded-2xl"
          />{" "}
        </motion.div>
      </section>
    </div>
  );
}
