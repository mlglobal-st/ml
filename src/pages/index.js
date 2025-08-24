import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const news = [
    {
      date: "27 May 2025",
      title: "Annual General Meeting – Operations Update",
      excerpt:
        "Key production and cash flow highlights ahead of the AGM; strategy focused on energy security and decarbonisation.",
      href: "/news/agm-ops-update",
    },
    {
      date: "12 Feb 2025",
      title: "Full year 2024 operations update and 2025 guidance",
      excerpt:
        "Investment scaled to maintain production, maximise cash flow and reduce future emissions and operating costs.",
      href: "/news/fy24-update",
    },
    {
      date: "11 Aug 2025",
      title: "Heather Alpha topsides removal completed",
      excerpt:
        "Major decommissioning milestone achieved with >95% material recovery expected through recycling and repurposing.",
      href: "/news/heather-alpha-lift",
    },
  ];

  const stats = [
    { label: "Countries", value: "300", sub: "World Wide" },
    { label: "Employees", value: "1,000+", sub: "Group-wide" },
    { label: "Scope 1&2", value: "-40%", sub: "UK emissions since 2018" },
  ];
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero1.jpg"
            alt="Offshore platform at dawn"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Energy security today, decarbonisation for tomorrow
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-100">
            Applying operational excellence to optimise existing assets, reduce
            emissions and enable the energy transition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#operations"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500"
            >
              Our operations
            </Link>
            <Link
              href="#esg"
              className="px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/40 hover:bg-white/20"
            >
              Our ESG approach
            </Link>
          </div>
        </div>
      </section>

      {/* Value props / KPI strip */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-8 md:py-10 flex flex-col items-center text-center"
              >
                <div className="text-3xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-gray-600">{s.label}</div>
                <div className="text-sm text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations */}
      <section id="operations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Operations in the UK and Europe and Asia
              </h2>
              <p className="mt-4 text-gray-700">
                We focus on mature, late-life assets where we can responsibly
                optimise production, drive capital efficiency and reduce
                emissions. Where possible, we repurpose infrastructure for
                renewable and decarbonisation projects before executing
                world-class decommissioning.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                <li>Production optimisation & integrity management</li>
                <li>Electrification and flare reduction initiatives</li>
                <li>
                  Safe, efficient decommissioning with high recycling rates
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                <Link
                  href="#media"
                  className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
                >
                  Latest updates
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-2 rounded-md ring-1 ring-gray-300 hover:bg-gray-100"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/map.jpg"
                alt="Map highlighting UK & Malaysia"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded bg-black/60 text-white text-xs">
                Illustrative footprint
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold">
                Environmental, Social & Governance
              </h2>
              <p className="mt-4 text-gray-700">
                Our Board-approved approach focuses on five pillars: health &
                safety, environment, people, communities and business conduct.
                We embed TCFD-aligned climate reporting and link rewards to
                multi‑year emissions reduction targets.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#investors"
                  className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500"
                >
                  Reports & policies
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-2 rounded-md ring-1 ring-gray-300 hover:bg-gray-100"
                >
                  Engage with ESG
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/emission.jpg"
                alt="Technicians monitoring emissions dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded bg-black/60 text-white text-xs">
                Decarbonisation in action
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}

      <section className="flex flex-col md:flex-row justify-between p-5 max-w-7xl mx-auto gap-8">
  {/* Text */}
  <div className="md:w-1/2 w-full border rounded-2xl border-gray-200 hover:border-green-200 shadow-sm hover:shadow-md p-6 flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
    <p className="mt-4 text-gray-700">
      At ML Global Resources, we are more than an energy company — we are
      a driving force behind the infrastructure that fuels nations,
      empowers industries, and supports communities across the globe.
    </p>
    <Link href="/aboutus">
      <p className="mt-4 text-blue-800 font-medium">See More</p>
    </Link>
  </div>

  {/* Image */}
  <div className="md:w-1/2 w-full">
    <img
      src="/fourmen.jpg"
      alt="Team working together"
      className="w-full h-64 md:h-full object-cover rounded-2xl"
    />
  </div>
</section>

      {/* Media / Press */}
      <section id="media" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Media & press releases
              </h2>
              <p className="mt-2 text-gray-600">
                Browse the latest operations updates, results and
                decommissioning milestones.
              </p>
            </div>
            <Link
              href="/media"
              className="hidden sm:inline-flex px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
            >
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((n) => (
              <article
                key={n.title}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="p-5">
                  <time className="text-xs uppercase tracking-wide text-gray-500">
                    {n.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold group-hover:text-emerald-600">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {n.excerpt}
                  </p>
                </div>
                <div className="px-5 pb-5">
                  <Link
                    href={n.href}
                    className="text-sm font-medium text-emerald-700 hover:text-emerald-600"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/media"
              className="inline-flex px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* Investors CTA */}
      <section id="investors" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Investors</h2>
              <p className="mt-4 text-gray-100">
                Access the latest results, presentations and our strategic
                report. Stay informed on production guidance, capital allocation
                and progress towards emissions reduction targets.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/investors/reports"
                  className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500"
                >
                  Reports & results
                </Link>
                <Link
                  href="/investors/contacts"
                  className="px-4 py-2 rounded-md ring-1 ring-white/30 hover:bg-white/10"
                >
                  IR contacts
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/tradechart.jpg"
                alt="Analyst reviewing financial charts"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded bg-white/10 ring-1 ring-white/30 text-white text-xs">
                Transparent reporting
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Careers</h2>
              <p className="mt-4 text-gray-700">
                Join a team that thrives on problem‑solving and continuous
                improvement. We offer competitive benefits, learning
                opportunities and the chance to shape the energy transition.
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  href="/careers"
                  className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
                >
                  Explore roles
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-2 rounded-md ring-1 ring-gray-300 hover:bg-gray-100"
                >
                  Graduate pathway
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/team.jpg"
                alt="Team collaborating on site"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded bg-black/60 text-white text-xs">
                People first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
              <p className="mt-4 text-gray-700">
                Have a project or enquiry? We’ll respond promptly.
              </p>
              <form className="mt-8 grid grid-cols-1 gap-4">
                <input
                  className="h-11 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Full name"
                />
                <input
                  className="h-11 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-[120px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Message"
                />
                {/* <button
                  type="button"
                  className="h-11 px-6 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 w-fit"
                  src
                >
                  Send message
                </button> */}
              </form>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">Head office</h3>
              <p className="text-gray-600 mt-1">London, United Kingdom</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm text-gray-500">
                    Investor Relations
                  </div>
                  <div className="font-medium">mlglobalenergy@gmail.com</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm text-gray-500">Media Enquiries</div>
                  <div className="font-medium">+447742678190</div>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                Registered in England & Wales. Company No. 01234567
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
