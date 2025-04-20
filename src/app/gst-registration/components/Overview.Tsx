'use client';
import React from "react";
import Link from "next/link";


export default function Overview(){
    return(
        <div>
            <section className="px-6 py-12 md:px-16 lg:px-32 bg-white" id="overview">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* LEFT SIDE - TEXT */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    GST Registration Made Simple
                    </h2>
                    <p className="text-gray-700 mb-4">
                    If you're seeking GST registration to legally strengthen your business operations, you've come to the right place.
                    </p>
                    <p className="text-gray-700 mb-4">
                    Introduced on July 1, 2017, the Goods and Services Tax (GST) replaced a range of central and state taxes such as Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax, and VAT. Since its implementation, GST has simplified the tax structure across India, bringing greater transparency and efficiency.
                    </p>
                    <p className="text-gray-700 mb-4">
                    By merging multiple indirect taxes—including VAT, service tax, and excise duty—GST has created a unified tax system. This integration has enhanced compliance, minimized tax evasion, eliminated the cascading effect of taxes, and significantly improved the ease of doing business in India.
                    </p>
                    <p className="text-gray-700 mb-6">
                    Connect with the experts at Dostartup for a hassle-free and timely GST registration experience.
                    </p>

                    <button
                    className="inline-block px-6 py-3 bg-[#009966] hover:bg-[#00b377] text-white font-semibold rounded shadow-md transition">
                     Get started with DoStartup
                    
                    </button>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="lg:w-1/2 flex justify-center">
                <img
                    src="https://corpbiz.io/img/img1.webp"
                    alt="GST Illustration"
                    width={450}
                    height={300}
                    className="object-contain"
                />
                </div>
            </div>
          </section>
          <section className="px-6 py-12 md:px-16 lg:px-32 bg-white bg-[#66cc99]">
            <div className="flex flex-col lg:flex-row items-center gap-10 rounded-lg overflow-hidden shadow-md">
                {/* LEFT IMAGE SECTION */}
                <div className="relative lg:w-1/2 bg-[#FFF6EF] flex justify-center items-center">
                {/* ICON overlay */}
                <div className="absolute left-12 z-20">
                    <img
                        src="https://corpbiz.io/admin/style/images/userfiles/image/FBOs.png"
                        alt="Briefcase Icon"
                        width={400}
                        height={400}
                    />
                </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="lg:w-1/2 bg-gradient-to-r from-[#66cc99] to-[#33b388] p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                All About the GST Registration Certificate
                </h2>
                <p className="text-gray-700 mb-4">
                A GST Registration Certificate is an official document provided by the Government of India to businesses that have successfully registered under the Goods and Services Tax (GST) system. It serves as legal proof that the business is recognized under the GST law and is authorized to collect and remit GST.This certificate contains essential details such as the GSTIN, the legal name of the business, and its registered address. Holding a valid GST certificate not only reflects the business’s legal compliance but also enhances its authenticity in the eyes of customers, partners, and regulatory bodies.
                </p>
                <p className="text-gray-700">
                For companies like LLPs, OPCs, private limited and public limited entities, having a GST registration certificate is crucial—not just for fulfilling tax responsibilities but also for building trust and legitimacy in the marketplace. Additionally, verifying GST registration helps prevent fraud and ensures that the business is operating under the proper regulatory framework.
                </p>
            </div>
            </div>
          </section>
        </div>
    )
}