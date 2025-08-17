// app/fuel-depot/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FuelDepot() {
  return (
    <div className="bg-gray-500 text-gray-900">
      {/* ✅ Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center">
        <Image
          src="/images/fuel-depot-hero.jpg" // replace with your hero image
          alt="Fuel Depot Hero"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Fuel Depot & Storage Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl"
          >
            Delivering safe, efficient, and sustainable energy storage solutions
            that power industries and communities worldwide.
          </motion.p>
        </div>
      </section>

      {/* ✅ Intro */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Backbone of Global Energy Storage
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ML Global Energy develops cutting-edge storage infrastructure that
            ensures secure handling of crude oil, refined petroleum products,
            LNG, and industrial chemicals. With decades of expertise in
            engineering, construction, and operations, we provide facilities
            that meet the highest international safety and environmental
            standards. Our depots are not just storage—they are critical hubs of
            energy distribution, supporting both domestic industries and global
            trade.
          </p>
        </motion.div>
      </section>

      {/* ✅ Core Capabilities */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            {[
              {
                title: "Tank Construction",
                desc: "We design and build aboveground and underground tanks compliant with API 650/653 standards. Our tanks are engineered for long-term durability, resilience against extreme environments, and minimal maintenance.",
              },
              {
                title: "Terminal Facilities",
                desc: "Our depots feature advanced loading/unloading systems for trucks, rail, and marine vessels. Designed for high throughput, these facilities ensure smooth, safe, and efficient energy transfer at every stage.",
              },
              {
                title: "Safety Systems",
                desc: "Equipped with modern fire suppression, leak detection, and containment solutions, our facilities exceed NFPA and OSHA requirements. We prioritize human safety and environmental protection at all times.",
              },
              {
                title: "Automation & Digital Monitoring",
                desc: "Smart automation ensures real-time inventory management, predictive maintenance, and instant reporting, enabling cost savings and operational excellence.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/fuel-storage.jpg" // replace with real storage tank image
              alt="Fuel Storage Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ Benefits */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ML Global Energy?
          </h2>
          <p className="text-lg text-gray-700">
            Our storage solutions deliver value across safety, efficiency, and
            sustainability.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Unmatched Safety & Compliance",
            "Cost-Efficient Operations",
            "Scalable & Future-Proof",
            "Environmentally Responsible",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Process Timeline */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Project Delivery Process
          </motion.h2>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              "Design & Engineering",
              "Civil & Mechanical Works",
              "Tank & Terminal Construction",
              "Automation Integration",
              "Commissioning & Handover",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Compliance & Sustainability */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Committed to Compliance & Sustainability
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Every project we deliver is fully compliant with international
            standards such as API, NFPA, OSHA, and ISO. Beyond compliance, we
            prioritize sustainability by incorporating energy-efficient systems,
            reducing emissions, and adopting eco-friendly construction
            practices. Our storage depots are built to support the global
            transition toward cleaner and safer energy.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
