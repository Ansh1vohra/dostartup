import { CheckCircle2 } from 'lucide-react';

const points = [
    {
      heading: "Who is Eligible for GST Registration? ",
      items: [
        " If your business has an annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states), you are required to register under GST.",
        "Service-based businesses must register if their annual turnover crosses ₹20 lakhs (₹10 lakhs for special category states).",
        "Businesses exclusively dealing in exempted goods or services are not bound by these threshold limits and may be exempt from GST registration.",
        "Entities registered under the previous tax regimes such as VAT, Excise, or Service Tax must mandatorily transition to the GST system.",
        "Individuals or businesses based outside India but engaged in taxable supplies within India must obtain GST registration before commencing operations.",
        "Foreign entities providing online information, database access, or digital content services to Indian users (who are not already registered under GST) are also required to register."
      ]
    },
    {
        heading: "Additional Categories That Must Register for GST",
        items: [
          "Any individual or business involved in the supply of goods across state lines must obtain GST registration, regardless of turnover.",
          "Entities that are liable to pay tax under the reverse charge mechanism are mandated to register under GST.",
          "Businesses distributing input tax credit across branches, and their authorized agents, are required to be registered.",
          "Platforms facilitating the supply of goods or services online—like aggregators or marketplaces, must be registered under GST.",
          "Any seller offering taxable goods or services through e-commerce portals must register, even if their turnover is below the standard limit.",
          "Individuals supplying goods or services on behalf of someone else—such as agents or business representatives—fall under mandatory GST registration.",
          "Even if not legally mandated, any individual or business providing taxable supplies may choose to register to avail input credit and build credibility."
        ]
    },
    {
        heading: "Documents Required for GST Registration Online",
        items: [
          "Applicant’s PAN Card",
          "Applicant’s Aadhar Card",
          "Proof of business registration/ Company Registration Certificate of Incorporation",
          "Identity proof of Promoters/Director",
          "Address proof of Promoters/Director",
          "Photographs of Promoters/Director",
          "Address proof of the place of business",
          "Bank Account statement/Cancelled cheque",
          "Digital Signature Certificate (DSC)",
          "Lease/Rent Agreement",
          "Letter of Authorization/Board Resolution for Authorized Signatory"
        ]
    }
];

export default function Eligibility(){
    return(
        <div className="max-w-5xl mx-auto p-6 text-gray-800" id="eligibility">
            {points.map((section, index) => (
                <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                    <ul className="space-y-3">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="text-blue-500 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
        </div>
    )
}