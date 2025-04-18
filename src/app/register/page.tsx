"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const registrationTypes = [
  { name: "Private Limited Company", slug: "private-limited-company" },
  { name: "One Person Company (OPC)", slug: "opc" },
  { name: "Partnership Firm", slug: "partnership-firm" },
  { name: "MSME Registration", slug: "msme" },
  { name: "IEC Code", slug: "iec" },
  { name: "PSARA License", slug: "psara" },
  { name: "CE Certification", slug: "ce" },
  { name: "NBFC Registration", slug: "nbfc" },
  { name: "Plastic Waste Authorization", slug: "plastic-waste" },
  { name: "GST Registration", slug: "gst" },
];

interface Benefit {
  id: number;
  title: string;
  content: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Legal Identity & Protection",
    content:
      "A partnership firm is registered and thereby given legal status. This affords proof of its existence in a court of law. First, it separates the business entity from the partners, ensuring safety of their possessions in case debts or litigations arise as a consequence of business activities.",
  },
  {
    id: 2,
    title: "Formalization of Business Relationship",
    content:
      "The registration of a partnership brings to bear all the legal implications. This helps define what is the function of each partner reducing all misunderstanding and preventing future disputes. The written agreement ensures all partners are aware of their specific roles and duties unambiguously.",
  },
  {
    id: 3,
    title: "Wide Business Opportunities",
    content:
      "Mostly clients, investors, and banks prefer to transact with registered firms. While registered partnerships make it easier for businesses to acquire trust, they also improve the contracts, financing options, and collaboration against which the businesses should grow opportunities.",
  },
  {
    id: 4,
    title: "Flexible Decision Making",
    content:
      "In terms of decision-making, partnership is more flexible since every partners thought and idea can contribute to something valuable; they don't have to follow so many legal rules as other companies do, and this makes running the business smoother and much faster.",
  },
  {
    id: 5,
    title: "Tax Benefits",
    content:
      "The profits of a partnership firm get taxed only once — in the hands of the partners. This means no double taxation exists, unlike the company, which makes it more compassionate while paying taxes.",
  },
  {
    id: 6,
    title: "Cost-Effective",
    content:
      "Setting up a partnership firm online does not cost an arm and a leg. Its procedure is simple, quick, and requires less paperwork. With fewer legal provisions, you also incur less in the name of ongoing compliance and legal formalities.",
  },
  {
    id: 7,
    title: "Specialized Aptitudes",
    content:
      "Every partner brings unique experience and skills into the business. As a result, due to this diversity, the firm would generate a more creative and efficient solution through which problems would be solved, tasks would be managed, and decisions would be made for the growth of the business in the long run.",
  },
  {
    id: 8,
    title: "Improved Borrowing Capacity",
    content:
      "Banks and other financial institutions would most likely give loans to a registered firm partly because of the official registration that the firm would have made it look so reliable and hence raised up its chances for getting funds in times of need.",
  },
];

export default function RegisterPage() {
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const progressValue = (scrollTop / scrollHeight) * 100;
    setProgress(progressValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose a Registration Type</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {registrationTypes.map((type) => (
          <Link
            key={type.slug}
            href={`/register/${type.slug}`}
            className="p-5 bg-white shadow-md hover:shadow-xl transition rounded-xl border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-blue-600">{type.name}</h2>
            <p className="text-gray-500 text-sm mt-2">Click to view details</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
