"use client";

import Link from "next/link";
import {
  FaVial,
  FaMicroscope,
  FaFlask,
  FaHeartbeat,
  FaLungs,
  FaSyringe,
  FaVials,
} from "react-icons/fa";
import { GiStomach, GiHealthNormal, GiKidneys } from "react-icons/gi";
import { MdBloodtype, MdOutlineElderly } from "react-icons/md";
import { BiDna } from "react-icons/bi";

const services = [
  {
    slug: "blood-test",
    title: "Blood Test",
    description: "Comprehensive analysis for cholesterol, sugar, and organ health.",
    gradient: "from-red-500 to-red-700",
    icon: <MdBloodtype className="text-4xl text-red-600" />,
  },
  {
    slug: "urine-test",
    title: "Urine Test",
    description: "Detects infections, kidney issues, and diabetes.",
    gradient: "from-yellow-500 to-yellow-700",
    icon: <GiKidneys className="text-4xl text-yellow-600" />,
  },
  {
    slug: "stool-test",
    title: "Stool Test",
    description: "Analyzes digestive health and detects parasites.",
    gradient: "from-green-500 to-green-700",
    icon: <GiStomach className="text-4xl text-green-600" />,
  },
  {
    slug: "hormone-tests",
    title: "Hormone Tests",
    description: "Thyroid, reproductive, adrenal, and growth hormones.",
    gradient: "from-pink-500 to-pink-700",
    icon: <FaFlask className="text-4xl text-pink-600" />,
  },
  {
    slug: "tumor-markers",
    title: "Tumor Markers",
    description: "Cancer-related marker detection and monitoring.",
    gradient: "from-purple-500 to-purple-700",
    icon: <FaMicroscope className="text-4xl text-purple-600" />,
  },
  {
    slug: "allergy-testing",
    title: "Allergy Testing",
    description: "Finds triggers like food, dust, and pollen.",
    gradient: "from-orange-500 to-orange-700",
    icon: <FaLungs className="text-4xl text-orange-600" />,
  },
  {
    slug: "immunology-tests",
    title: "Immunology Tests",
    description: "Covers HIV, Hepatitis, and autoimmune panels.",
    gradient: "from-indigo-500 to-indigo-700",
    icon: <FaVials className="text-4xl text-indigo-600" />,
  },
  {
    slug: "pcr-tests",
    title: "Molecular Diagnostics (PCR)",
    description: "Advanced viral and genetic testing, including COVID-19.",
    gradient: "from-blue-500 to-blue-700",
    icon: <BiDna className="text-4xl text-blue-600" />,
  },
  {
    slug: "histopathology",
    title: "Histopathology",
    description: "Microscopic tissue study for accurate diagnosis.",
    gradient: "from-teal-500 to-teal-700",
    icon: <FaMicroscope className="text-4xl text-teal-600" />,
  },
  {
    slug: "cytology",
    title: "Cytology",
    description: "Pap smear & FNAC for early infection and cancer detection.",
    gradient: "from-emerald-500 to-emerald-700",
    icon: <FaSyringe className="text-4xl text-emerald-600" />,
  },
  {
    slug: "full-body-checkup",
    title: "Full Body Checkup",
    description: "Complete screening for overall health.",
    gradient: "from-cyan-500 to-cyan-700",
    icon: <GiHealthNormal className="text-4xl text-cyan-600" />,
  },
  {
    slug: "diabetes-package",
    title: "Diabetes Package",
    description: "Blood sugar, HbA1c, and kidney tests for monitoring diabetes.",
    gradient: "from-rose-500 to-rose-700",
    icon: <FaVial className="text-4xl text-rose-600" />,
  },
  {
    slug: "heart-care-package",
    title: "Heart Care Package",
    description: "Covers lipid profile, ECG, and stress tests.",
    gradient: "from-slate-500 to-slate-700",
    icon: <FaHeartbeat className="text-4xl text-slate-600" />,
  },
  {
    slug: "senior-citizen-package",
    title: "Senior Citizen Package",
    description: "Covers chronic illness monitoring for elderly patients.",
    gradient: "from-gray-500 to-gray-700",
    icon: <MdOutlineElderly className="text-4xl text-gray-600" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Our Diagnostic Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <Link
            key={i}
            href={`/services/${service.slug}`}
            className={`bg-gradient-to-r ${service.gradient} text-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition`}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="opacity-90 mb-6">{service.description}</p>
            <span className="bg-white text-gray-800 px-5 py-2 rounded-lg font-medium shadow">
              View Details
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
