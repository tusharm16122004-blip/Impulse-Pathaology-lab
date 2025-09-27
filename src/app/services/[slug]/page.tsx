"use client";

import { useParams, useRouter } from "next/navigation";
import { ReactNode } from "react";

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

const serviceData: Record<
  string,
  {
    title: string;
    description: string;
    subTests: string[];
    preparation: string;
    gradient: string;
    icon: ReactNode;
  }
> = {
  "blood-test": {
    title: "Blood Test",
    description:
      "Comprehensive blood analysis for cholesterol, sugar, infections, and organ health. Essential for early detection and monitoring.",
    subTests: [
      "Complete Blood Count (CBC)",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Thyroid Function Test (TFT)",
    ],
    preparation: "Fast 8–12 hours before the test. Drink only water unless told otherwise.",
    gradient: "from-red-500 to-red-700",
    icon: <MdBloodtype className="text-4xl text-red-600" />,
  },
  "urine-test": {
    title: "Urine Test",
    description:
      "Detects infections, kidney disorders, diabetes, and hydration levels through chemical and microscopic examination.",
    subTests: ["Routine Urine Examination", "Urine Culture", "Protein & Glucose Test"],
    preparation: "Collect mid-stream urine sample in a sterile container.",
    gradient: "from-yellow-500 to-yellow-700",
    icon: <GiKidneys className="text-4xl text-yellow-600" />,
  },
  "stool-test": {
    title: "Stool Test",
    description:
      "Detects infections, parasites, and digestive health issues. Useful for gut health diagnosis.",
    subTests: ["Stool Routine Test", "Stool Occult Blood Test", "Parasite Detection"],
    preparation: "Provide fresh stool sample in a sterile container.",
    gradient: "from-green-500 to-green-700",
    icon: <GiStomach className="text-4xl text-green-600" />,
  },
  "hormone-tests": {
    title: "Hormone Tests",
    description:
      "Measures thyroid, reproductive, adrenal, and growth hormones. Helps diagnose hormonal imbalance.",
    subTests: ["Thyroid Profile (T3, T4, TSH)", "Testosterone", "Estrogen", "Cortisol"],
    preparation: "Fasting may be required. Consult doctor for specific instructions.",
    gradient: "from-pink-500 to-pink-700",
    icon: <FaFlask className="text-4xl text-pink-600" />,
  },
  "tumor-markers": {
    title: "Tumor Markers",
    description:
      "Measures cancer-related markers for early detection and treatment monitoring.",
    subTests: ["AFP", "CA-125", "CEA", "PSA"],
    preparation: "No special preparation required.",
    gradient: "from-purple-500 to-purple-700",
    icon: <FaMicroscope className="text-4xl text-purple-600" />,
  },
  "allergy-testing": {
    title: "Allergy Testing",
    description: "Identifies triggers like food, dust, pollen, and chemicals.",
    subTests: ["Food Allergy Panel", "Dust & Pollen Test", "Skin Prick Test"],
    preparation: "Avoid antihistamines 48 hours before the test.",
    gradient: "from-orange-500 to-orange-700",
    icon: <FaLungs className="text-4xl text-orange-600" />,
  },
  "immunology-tests": {
    title: "Immunology Tests",
    description:
      "Checks immune system response against autoimmune disorders, HIV, and Hepatitis.",
    subTests: ["HIV Test", "Hepatitis B & C", "Autoimmune Panel"],
    preparation: "No special preparation required.",
    gradient: "from-indigo-500 to-indigo-700",
    icon: <FaVials className="text-4xl text-indigo-600" />,
  },
  "pcr-tests": {
    title: "Molecular Diagnostics (PCR)",
    description:
      "Advanced genetic and viral testing including COVID-19 and hereditary disorders.",
    subTests: ["COVID-19 PCR", "Genetic Mutation Test", "Viral DNA/RNA Detection"],
    preparation: "Depends on the test type. Consult doctor for specific instructions.",
    gradient: "from-blue-500 to-blue-700",
    icon: <BiDna className="text-4xl text-blue-600" />,
  },
  histopathology: {
    title: "Histopathology",
    description: "Microscopic study of biopsied tissues for accurate diagnosis.",
    subTests: ["Biopsy Examination", "Cancer Detection", "Chronic Disease Diagnosis"],
    preparation: "As advised by physician (varies by biopsy type).",
    gradient: "from-teal-500 to-teal-700",
    icon: <FaMicroscope className="text-4xl text-teal-600" />,
  },
  cytology: {
    title: "Cytology",
    description: "Pap smear and FNAC for early infection and cancer detection.",
    subTests: ["Pap Smear", "FNAC", "Cytology Smears"],
    preparation: "Avoid vaginal creams/intercourse 48 hours before Pap smear.",
    gradient: "from-emerald-500 to-emerald-700",
    icon: <FaSyringe className="text-4xl text-emerald-600" />,
  },
  "full-body-checkup": {
    title: "Full Body Checkup",
    description:
      "Complete screening covering major organs, blood, urine, liver, kidney, and heart health.",
    subTests: ["CBC", "LFT", "KFT", "Lipid Profile", "ECG"],
    preparation: "Fasting 8–12 hours required.",
    gradient: "from-cyan-500 to-cyan-700",
    icon: <GiHealthNormal className="text-4xl text-cyan-600" />,
  },
  "diabetes-package": {
    title: "Diabetes Package",
    description:
      "Includes blood sugar, HbA1c, and kidney function tests to monitor diabetes.",
    subTests: ["Fasting Blood Sugar", "HbA1c", "KFT", "Urine Routine"],
    preparation: "Fasting 8–10 hours required.",
    gradient: "from-rose-500 to-rose-700",
    icon: <FaVial className="text-4xl text-rose-600" />,
  },
  "heart-care-package": {
    title: "Heart Care Package",
    description: "Includes lipid profile, ECG, and stress tests for heart health.",
    subTests: ["Lipid Profile", "ECG", "Echocardiography", "TMT"],
    preparation: "Avoid caffeine 12 hours before test.",
    gradient: "from-slate-500 to-slate-700",
    icon: <FaHeartbeat className="text-4xl text-slate-600" />,
  },
  "senior-citizen-package": {
    title: "Senior Citizen Package",
    description:
      "Covers routine tests, chronic illness monitoring, and organ function for elderly patients.",
    subTests: ["CBC", "ECG", "Blood Sugar", "LFT", "KFT"],
    preparation: "Fasting 8–12 hours required.",
    gradient: "from-gray-500 to-gray-700",
    icon: <MdOutlineElderly className="text-4xl text-gray-600" />,
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const service = serviceData[slug as string];

  if (!service) {
    return <p className="text-center py-20 text-gray-600">Service not found</p>;
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className={`bg-gradient-to-r ${service.gradient} text-white text-center py-16 px-6`}
      >
        <div className="flex justify-center mb-4">{service.icon}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          {service.description}
        </p>
      </section>

      {/* Details Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid gap-10">
        {/* Included Tests */}
        <div className="bg-white shadow-md rounded-2xl p-8 border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Included Tests
          </h2>
          <ul className="space-y-3">
            {service.subTests.map((test, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm"
              >
                <span className="text-blue-600">✔️</span>
                <span className="text-gray-700">{test}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation */}
        <div className="bg-white shadow-md rounded-2xl p-8 border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Preparation Guidelines
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {service.preparation}
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() =>
              router.push(`/book-test?service=${encodeURIComponent(service.title)}`)
            }
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
          >
            Book {service.title}
          </button>
        </div>
      </section>
    </main>
  );
}

