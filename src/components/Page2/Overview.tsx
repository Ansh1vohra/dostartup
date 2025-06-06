"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Documentation from "./Documentation";
import FAQ from "./FAQ";
import FeeStructure from "./FeeStructure";
import Registration from "./Registration";
import Timeline from "./Timeline";
import Why from "./Why";
import Listicles from "./Listicles";

interface OverviewProps {
  overview?: { heading: string; content: string }[];
  benefits?: { heading: string; content: string }[];
  documentsRequired?: { heading: string; content: string }[];
  registrationProcedure?: { heading: string; content: string }[];
  feesStructure?: {
    heading?: string;
    paymentMethods?: string[];
    description?: string;
    feeTable?: { category: string; amount: string }[];
  }[];
  registrationTimeline?: {
    heading: string;
    description?: string;
    steps?: { title: string; duration: string; description: string }[];
    totalTime?: string;
  }[];
  whyUs?: {
    heading?: string;
    description?: string[];
    points?: string[];
    footerText?: string;
  }[];
  faq?: { question: string; answer: string }[];
  listicles?: { category: string; documents: string[] }[]; // Added listicles prop
}

const Overview: React.FC<OverviewProps> = ({
  overview,
  benefits,
  documentsRequired,
  registrationProcedure,
  feesStructure,
  registrationTimeline,
  whyUs,
  faq,
  listicles, // Added listicles prop
}) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Dynamically generate the sections array based on available props
  const sections = [
    overview && { id: "overview", label: "Overview" },
    benefits && { id: "benefits", label: "Key Benefits" },
    documentsRequired && { id: "documents", label: "Required Documents" },
    registrationProcedure && { id: "registration", label: "Registration Steps" },
    feesStructure && { id: "fees", label: "Pricing Plans" },
    registrationTimeline && { id: "timeline", label: "Process Timeline" },
    listicles && { id: "listicles", label: "Listicles" }, // Added Listicles section
    whyUs && { id: "whyus", label: "Why Choose Us" },
    faq && { id: "faq", label: "FAQs" },
  ].filter(Boolean); // Remove undefined entries

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }: any) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:px-12 lg:py-8 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="lg:w-1/5 sticky top-[120px] h-fit bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-[#1D293D] mb-6">Navigation</h3>
        <ul className="space-y-2">
          {sections.map(({ id, label }: any) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer px-4 py-3 rounded-lg ${activeSection === id
                  ? "bg-[#1D293D]/10 text-[#1D293D] font-semibold border-l-4 border-[#7DD756]"
                  : "text-gray-600 hover:bg-[#1D293D]/5 hover:text-[#1D293D]"
                }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-4/5 space-y-12">
        {overview && (
          <section id="overview" className="">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                {overview.map((item, index) => (
                  <div
                    key={index}
                    className=""
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                      {item.heading}
                    </h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {benefits && benefits.length > 0 && (
          <section id="benefits" className="">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {benefits.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {documentsRequired && (
          <section id="documents">
            <Documentation documents={documentsRequired} />
          </section>
        )}
        {registrationProcedure && (
          <section id="registration">
            <Registration procedure={registrationProcedure} />
          </section>
        )}
        {feesStructure && (
          <section id="fees">
            <FeeStructure fees={feesStructure} />
          </section>
        )}
        {registrationTimeline && (
          <section id="timeline">
            <Timeline timeline={registrationTimeline} />
          </section>
        )}
        {listicles && (
          <section id="listicles">
            <Listicles listicles={listicles} />
          </section>
        )}
        {whyUs && (
          <section id="whyus">
            <Why whyUs={whyUs} />
          </section>
        )}
        {faq && (
          <section id="faq">
            <FAQ faqs={faq} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Overview;