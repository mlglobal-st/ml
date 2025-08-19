// app/about/page.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* ✅ Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center">
        <Image
          src="/companyvalue.jpg" // 📸 replace with your hero image
          alt="About ML Global Energy"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white">
            Discover the story, vision, and leadership of{" "}
            <span className="font-semibold">Mr. Michael Lee Yeong</span> — CEO
            of ML Global Energy Limited.
          </p>
        </motion.div>
      </section>

      {/* ✅ Section 1 - Early Life & Education */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/owner1.jpeg"
            alt="Michael Lee Yeong - Early Life"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-prose"
        >
          <h2 className="text-2xl md:text-4xl font-bold">Early Life & Education</h2>
          <p>
            Mr. Michael Lee Yeong was born in the vibrant city of Norwich,
            Norfolk, United Kingdom, into a richly multicultural family. His
            mother, originally from Miri Sarawak Malaysia and his father, a
            British Korean, instilled in him a deep appreciation for diverse
            cultures, values, and traditions.
          </p>
          <p>
            This unique blend of Eastern and Western influences shaped his
            worldview, nurtured a respect for different perspectives, and laid
            the foundation for the global mindset he carries into his work
            today. From an early age, Michael demonstrated a natural curiosity
            for how things work and an exceptional aptitude for science and
            engineering.
          </p>
          <p>
            Growing up in Norwich, he excelled in academics, balancing a strong
            work ethic with an eagerness to learn beyond the classroom. Science
            fairs, engineering clubs, and independent research projects were not
            just extracurricular activities — they were the beginnings of a
            lifelong passion for innovation in the energy sector.
          </p>
          <p>
            At the age of 18, Michael was accepted into the prestigious Imperial
            College London, one of the world’s leading universities for science
            and engineering. His academic journey focused on Petrochemical
            Engineering, a field that perfectly aligned with his interests in
            energy, industrial processes, and sustainable resource development.
          </p>
          <p>
            Driven by a desire to contribute to the advancement of energy
            technology, Michael pursued postgraduate studies, culminating in an
            Engineering Doctorate (EngD) in Petrochemical Engineering. His
            doctoral research focused on advanced pipeline systems, crude oil
            extraction methods, and next-generation energy infrastructure —
            knowledge that would later become the backbone of his professional
            career.
          </p>
          <p>
            Further cementing his professional standing, Michael earned the
            prestigious title Bachelor of Engineering (BEng) in the United
            Kingdom — an honor that signifies both exceptional technical
            expertise and adherence to the highest ethical and professional
            standards in engineering practice.
          </p>
          <p>
            With his academic and professional credentials firmly established,
            Michael founded ML Global Energy Limited, building on a vision
            inspired in part by his late father’s entrepreneurial legacy. Under
            his leadership, the company has expanded its scope to include
            pipeline installation, crude oil drilling, gas exploration, nuclear
            and renewable energy projects, offshore rig infrastructure, and fuel
            depot operations.
          </p>
          <p>
            Michael’s leadership is defined by his commitment to innovation,
            sustainability, and global collaboration — values deeply rooted in
            both his upbringing and professional journey.
          </p>
        </motion.div>
      </section>

      {/* ✅ Section 2 - Career & Achievements */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-prose"
        >
          <h2 className="text-2xl md:text-4xl font-bold">Career & Achievements</h2>
          <p>
            Michael Lee Yeong has carved an extraordinary path in the global
            energy sector, making history as one of the youngest CEOs to lead a
            major integrated oil, gas, and renewable energy company in the
            United Kingdom.
          </p>
          <p>
            His appointment to the helm of ML Global Energy Limited at a
            record-setting age marked a generational shift in the industry —
            symbolizing the rise of bold, forward-thinking leadership in a field
            traditionally dominated by older executives.
          </p>
          <p>
            Under his leadership, ML Global Energy has rapidly evolved from a
            specialized petrochemical engineering firm into a multi-disciplinary
            powerhouse engaged in pipeline installation, crude oil drilling,
            offshore gas exploration, nuclear infrastructure, renewable energy
            rigs, and global fuel depot networks.
          </p>
          <p>
            Michael’s strategic vision has positioned the company as a trusted
            partner for governments, multinational corporations, and pioneering
            green energy initiatives.
          </p>
          <p className="font-semibold">Awards & Recognitions</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Global Energy Leadership Award – Energy Council, 2018</strong>: Recognizing executives who have demonstrated exceptional vision,
              innovation, and influence in shaping the future of the global
              energy landscape.
            </li>
            <li>
              <strong>Petrochemical Industry Excellence Award – World Petroleum
              Council, 2020</strong>: Awarded for achievements in petrochemical engineering,
              particularly in high-efficiency pipeline design and advanced
              offshore rig safety systems.
            </li>
            <li>
              <strong>Energy Transition Pioneer Medal – International Renewable
              & Clean Energy Forum, 2022</strong>: Honoring leadership in bridging the gap between fossil fuels and
              clean energy, guiding ML Global into wind, solar, and nuclear
              hybrid projects.
            </li>
            <li>
              <strong>Chartered Engineer of the Year – Engineering Council UK,
              2023</strong>: A rare recognition for Chartered Engineers who made large-scale
              contributions through innovation, mentoring, and industry
              leadership.
            </li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/owner2.jpeg"
            alt="Michael Lee Yeong - Career & Achievements"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </section>

      {/* ✅ Section 3 - Vision & Leadership */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/owner3.jpeg"
            alt="Michael Lee Yeong - Vision & Leadership"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-prose"
        >
          <h2 className="text-2xl md:text-4xl font-bold">Vision & Leadership</h2>
          <p>
            Michael Lee Yeong’s leadership philosophy is grounded in innovation,
            integrity, and global collaboration. Drawing on a career that spans
            the full spectrum of the energy industry — from crude oil
            exploration to nuclear and renewable energy infrastructure — he
            believes that the future of energy depends on a seamless integration
            of technical excellence and sustainable practices.
          </p>
          <p>
            At the heart of his vision for ML Global Energy Limited is a
            commitment to energy diversification: leveraging traditional oil and
            gas expertise while actively investing in clean, renewable solutions
            to responsibly meet the world’s growing energy demands.
          </p>
          <p>
            Michael leads with a hands-on, solutions-driven style, personally
            overseeing major infrastructure projects and ensuring they meet the
            highest standards of safety, efficiency, and environmental
            compliance. His ability to unite engineers, investors, policymakers,
            and community stakeholders behind a common purpose has been a
            driving force in the company’s expansion into Europe, Africa, the
            Middle East, and Southeast Asia.
          </p>
          <p>
            As a Chartered Engineer and international award-winning executive,
            Michael’s influence extends beyond corporate boardrooms. He actively
            mentors young professionals, advocates for greater inclusion in the
            engineering sector, and champions cross-border cooperation to tackle
            the pressing issues of energy security, climate change, and
            sustainable economic growth.
          </p>
          <p className="italic font-medium">
            “The world’s energy future is not a choice between fossil fuels or
            renewables — it’s about engineering a balanced, innovative, and
            sustainable path forward. That’s the mission I’ve committed my
            life’s work to achieving.” — Michael Lee Yeong
          </p>
        </motion.div>
      </section>
    </div>
  );
}
