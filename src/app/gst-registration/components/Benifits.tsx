const benefit = [
    {
      title: 'Legal Recognition',
      img: 'https://corpbiz.io/img/adv_icon1.webp',
      description:
        'GST registration gives your business a legal identity, enabling you to operate smoothly across India.',
    },
    {
      title: 'Input Tax Credit',
      description:
        'Registered businesses can claim input tax credit on purchases, which helps reduce overall tax liability.',
    },
    {
      title: 'Wider Market Access',
      description:
        'With GST registration, businesses can trade inter-state without restrictions, opening up wider markets and growth opportunities.',
    },
    {
        title: 'Better Compliance',
        description:
          'Being registered ensures that your business follows a structured and unified tax system, reducing chances of legal issues.',
    },
    {
        title: 'Improved Business Credibility',
        description:
          'A GSTIN builds trust among customers, vendors, and partners, enhancing your professional image.',
    },
    {
      title: 'Eligibility for Tenders and Contracts',
      description:
        'Many government and corporate contracts require GST registration as a mandatory criterion.',
    },
    {
        title: 'Easier Business Expansion',
        description:
          'GST registration simplifies the process of opening branches or operating in multiple states.',
    },
  ];

export default function Benifits(){
    return(
    <div>
        <section className="h-screen overflow-hidden bg-[#fafafa] px-6 py-10 md:px-16 lg:px-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            What Are the Key Benefits of GST Registration?
            </h2>
            <div className="flex h-[calc(100vh-6rem)] gap-8">
                {/* LEFT IMAGE - STICKY */}
                <div className="w-1/2 hidden lg:flex justify-center items-start">
                    <div className="sticky top-10">
                        <img
                            src="https://corpbiz.io/admin/style/images/userfiles/image/adv_img.png"
                            alt="GST Illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* RIGHT SCROLLABLE STACK */}
                <div className="w-full lg:w-1/2 overflow-y-auto pr-2 space-y-5 scrollbar-hide">
                {benefit.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-300 rounded-lg p-5 flex items-start gap-4 bg-white hover:shadow-md transition"
                    >
                    <img
                        src="https://corpbiz.io/img/adv_icon1.webp"
                        alt="Shield Icon"
                        width={30}
                        height={30}
                        className="mt-1"
                    />
                    <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
          </section>
    </div>
    );
}