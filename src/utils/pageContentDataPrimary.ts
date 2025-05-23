export type benefits = { heading: string; content: string };
export type documentsRequired = { heading: string; content: string };
export type registrationProcedure = {
  heading: string;
  content: string;
  penalties?: {
    description: string;
    penaltyTable: {
      serialNumber: string;
      particulars: string;
      fine: string;
    }[];
  };
};
export type feesStructure =  {
  heading?: string;
  paymentMethods?: string[];
  description?: string;
  feeTable?: {
    category: string;
    amount: string;
  }[];
};

export type registrationTimeline = {
  heading: string;
  description?: string;
  steps?: {
    title: string;
    duration: string;
    description: string;
  }[];
  totalTime?: string;
};

export type whyUs = {
  heading?: string;
  description?: string[];
  points?: string[];
  footerText?: string;
};

export type faq = { question: string; answer: string };

export type Listicles = {
  category: string;
  documents?: string[];
};

export type pentalies = {
  
}


export type PageContentType = {
  title: string;
  description: string;
  overview: { heading: string; content: string }[];
  benefits?: benefits[];
  documentsRequired?: documentsRequired[];
  Listicles?: Listicles[];
  registrationProcedure?: registrationProcedure[];
  feesStructure?: feesStructure[];
  registrationTimeline?: registrationTimeline[];
  whyUs?: whyUs[];
  faq?: faq[];
};



export const pageContent: Record<string, PageContentType> = {
  "fssai-state-license": {
    title: "FSSAI State License",
    description: "Get your FSSAI state food license with our expert guidance.",
    overview: [
      {
        heading: "FSSAI State License – A Comprehensive Guide",
        content: `The Food Safety and Standards Authority of India (FSSAI) is the apex regulatory body responsible for overseeing food safety and hygiene across the country. Operating under the Ministry of Health & Family Welfare, FSSAI enforces the provisions of the Food Safety and Standards Act, 2006 to ensure that food businesses maintain strict safety standards.\n Any Food Business Operator (FBO) in India is legally required to obtain an FSSAI State License before starting operations. Running a food business without proper FSSAI registration or license is considered a legal offense and can attract penalties.`,
      },
      {
  heading: "Role of the Food Safety and Standards Authority of India (FSSAI)",
  content: "The Food Safety and Standards Authority of India (FSSAI) plays a pivotal role in regulating and supervising food safety to protect public health across the nation. As the primary authority under the Ministry of Health & Family Welfare, FSSAI enforces food safety standards and promotes responsible food practices through a range of strategic functions:\n● Establishing regulations and guidelines for the food industry\n● Launching food safety awareness initiatives nationwide\n● Issuing instructions and compliance requirements for Food Business Operators (FBOs)\n● Setting standards for food testing laboratories\n● Collecting and analyzing data on food contaminants\n● Advising the Government of India on food-related policies and legislation\n● Operating a rapid alert system to detect and respond to food safety risks promptly"
},
{
  heading: "",
  content: "FSSAI has introduced strict regulations for proprietary food businesses, many of which previously operated without defined standards. These businesses are now required to obtain a valid FSSAI State License without exception.\nTo ensure hygiene and food safety across all stages—manufacturing, storage, distribution, and sale—FSSAI has made licensing and regulation mandatory for all FBOs. Additionally, the authority has developed an extensive information network to provide the public with accurate and timely updates related to food safety and hygiene in India."
}
    ],
    benefits: [
      {
        heading: "Key Benefits of Obtaining an FSSAI State License",
        content: `Securing an FSSAI State License is not just a legal requirement for food businesses operating within a particular state in India—it also offers a range of strategic advantages. Some of the major benefits include:\n
● Enhanced Brand Credibility: Builds trust and recognition among consumers, helping your business stand out in a competitive market.\n
● Improved Business Reputation: An FSSAI license signals quality and safety, boosting your brand’s credibility and market appeal.\n
● Customer Trust and Retention: Consumers are more likely to choose and remain loyal to a licensed food business that prioritizes safety and hygiene.\n
● Legal Compliance and Stability: Avoid legal hassles and ensure smooth operations by meeting all state-level food safety regulations.\n
● Adoption of Best Practices: Encourages food businesses to follow standardized safety protocols, improving overall product quality and operational efficiency.
`,
      },
      {
        heading: "Who Requires an FSSAI State License?",
        content: `An FSSAI State License is mandatory for medium-scale food businesses operating within a single state in India. It applies to various food-related activities including manufacturing, processing, storage, distribution, and sale. If your food business meets any of the following criteria, you are required to obtain an FSSAI State License:\n
●      Annual Turnover: Businesses operating within one state with an annual turnover exceeding Rs. 12 lakhs but below Rs. 20 crores.\n
●      Proprietary Food Units: Facilities involved in the production or handling of proprietary food products.\n
●      Edible Oil Production: Units engaged in vegetable oil manufacturing or processing using solvent extraction, within the above turnover range.\n
●      Hotels: Establishments with a star rating of 4 or below.\n
●      Dairy Operations: Units handling dairy products or milk chilling plants with a daily capacity between 500 to 50,000 liters.\n
●      Storage Facilities: Warehouses or cold storages with a capacity of less than 50,000 metric tons per year.\n
●      Slaughterhouses: Units processing more than 2 and up to 50 large animals, 10 to 150 small animals, or 50 to 1,000 poultry birds per day.\n
●      Food Processing Units: All food processing or re-packing facilities handling a minimum of 100 kg/l to a maximum of 2 metric tons per day.\n
If your business falls under any of these categories, securing an FSSAI State License is not just beneficial—it’s mandatory for legal operation and public trust.\n
`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required for FSSAI State License Registration",
        content: `To apply for an FSSAI State License, food business operators must submit a set of mandatory documents as per the regulatory guidelines. These documents help verify the legitimacy and operational standards of the

business. Below is a comprehensive list of documents required for FSSAI State License registration:\n
●      Details of Key Personnel: Names, addresses, and contact information of Directors, Partners, Proprietors, or Executive Members (in case of a society).\n
●      Photographs: Recent passport-sized photographs of the applicant.\n
●      Identity & Address Proof: Valid government-issued ID and address proof of the individual applying for the license.\n
●      PAN Card: A copy of the applicant’s Permanent Account Number (PAN) card.\n
●      Proof of Business Premises:\n
●  	Owned Property: Copy of property documents.\n
●      Rented Property: Copy of the rent agreement along with a No Objection Certificate (NOC) from the property owner.\n
●      Supplier Details: List of raw material suppliers associated with the business.\n
●      Form B: Duly filled and signed application form (Form B).\n
●      Machinery List: Detailed list of machinery and equipment installed at the business facility.\n
●      Municipal NOC: Clearance or No Objection Certificate issued by the local municipal authority.\n
●      Product Information: List of proposed food products and their respective food categories to be manufactured or processed.\n
●      Import Export Code (IEC): Issued by the Directorate General of Foreign Trade (DGFT), if applicable.\n
●      Form IX: Nomination of persons by a company along with a board resolution.\n
●      Authorization Letter: Letter of authorization mentioning the name and address of the responsible individual.\n
●      Food Safety Management System Plan (FSMS): A copy of the FSMS plan or certificate.\n
Submitting these documents correctly and completely is crucial for a successful application process. It helps ensure quicker processing and regulatory compliance for your food business under the FSSAI norms.\n
`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Penalties for Non-Compliance with FSSAI Regulations",
        content: "1. Food quality not adhering to the standards of the Act - Up to ₹2,00,000 (₹25,000 for petty manufacturers)\n 2. Sale or distribution of sub-standard food - Up to ₹5,00,000\n 3. Misbranded or misleadingly labeled food - Up to ₹3,00,000\n 4. False advertising or deceptive product description - Up to ₹10,00,000\n 5. Presence of extraneous or foreign matter in food - Up to ₹1,00,000\n 6. Failure to comply with directions of Food Safety Officer - Up to ₹2,00,000\n 7. Manufacturing or processing food in unhygienic conditions - Up to ₹1,00,000.\n Note: In addition to fines, repeated or severe violations may result in license suspension or cancellation.\n Strict adherence to FSSAI regulations is essential not only for avoiding penalties but also for ensuring consumer safety and maintaining business credibility.\n Here’s a clean, SEO-friendly, and professionally rephrased version of the “Fee Structure for Obtaining FSSAI State License” section for your client’s website."
      },
    ],
    feesStructure: [
      {
        heading: "FSSAI State License Fee Structure",
        description: "The cost of obtaining an FSSAI State License depends on the scale and nature of your food business operations. Applicants can pay the applicable fees via Demand Draft (DD), Treasury Challan, or Cash, as per the norms laid out by the Food Safety and Standards Authority of India.\n Below is the categorized fee structure based on the type and capacity of the food business:",
        feeTable: [
          {
            category: "Small businesses",
            amount: "2000/-",
          },
          {
            category: "Medium businesses",
            amount: "5000/-",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain FSSAI State License",
        description: "The process typically takes 6-12 weeks.",
        steps: [
          {
            title: "Document Preparation",
            duration: "1-2 weeks",
            description: "Gather all required documents.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "Why Choose Us?",
        description: ["We provide expert guidance and support."],
        points: ["99% success rate", "Affordable pricing"],
      },
    ],
    faq: [
      {
        question: "What is an FSSAI state license?",
        answer: "It is a mandatory license for food businesses.",
      },
    ],
    
  },
  "fssai-license-renewal": {
    title: "FSSAI State License",
    description: "Get your FSSAI state food license with our expert guidance.",
    overview: [
      {
        heading: "FSSAI State License - An Overview",
        content: `FSSAI (Food Safety and Standards Authority of India) regulates the food sector across India. 
                  It ensures food safety by implementing strict guidelines. 
                  Every food business operator (FBO) must secure an FSSAI state license to operate legally. 
                  Operating without a valid license is a punishable offence under the FSS Act, 2006.`,
      },
    ],
    benefits: [
      {
        heading: "Benefits of Obtaining FSSAI State License",
        content: `- Boosts consumer confidence by assuring food safety standards
        - Improves brand credibility and goodwill
        - Helps in business expansion and legal compliance`,
      },
    ],
    documentsRequired: [
      {
        heading: "Documents Required to Obtain FSSAI State License",
        content: `- Details of key management personnel
        - Passport-sized photos
        - Identification and address proof`,
      },
    ],
    registrationProcedure: [
      {
        heading: "Process for Obtaining FSSAI State License",
        content: `- Arrange documents
        - Submit application
        - Inspection and approval`,
      },
    ],
    feesStructure: [
      {
        heading: "Fee Structure for Obtaining FSSAI State License",
        description: "The applicable fee varies based on production capacity.",
        feeTable: [
          {
            category: "Small businesses",
            amount: "2000/-",
          },
          {
            category: "Medium businesses",
            amount: "5000/-",
          },
        ],
      },
    ],
    registrationTimeline: [
      {
        heading: "Timeline to Obtain FSSAI State License",
        description: "Obtaining an FSSAI State License is a step-by-step process that involves documentation, application, review, and inspection stages. Here’s a breakdown of the estimated timeline involved in acquiring the license:",
        steps: [
          {
            title: "1.Document Preparation & Initial Assessment",
            duration: "1-2 weeks",
            description: "Begin by collecting all mandatory documents, including identity/address proof, business registration certificates, and your Food Safety Management System (FSMS) plan. Conduct a preliminary check to ensure all paperwork is in place before filing.",
          },
          {
            title: "2. Application Submission",
            duration: "Up to 1 Week",
            description: "Submit the duly filled Form B through the official FoSCoS (Food Safety Compliance System) portal or at your nearest FSSAI office. Make sure to pay the prescribed application fee.",
          },
          {
            title: "3.  Application Review & Scrutiny",
            duration: "2–3 Weeks",
            description: "FSSAI authorities will review your application and attached documents. During this phase, they may seek clarification or request additional information.",
          },
          {
            title: "4. On-Site Inspection",
            duration: "2–4 Weeks",
            description: "FSSAI officials may conduct a physical inspection of your premises to verify adherence to hygiene, safety, and infrastructure requirements as per FSSAI guidelines.",
          },
          {
            title: "5. Grant of License",
            duration: "1–2 Weeks",
            description: "Following a successful inspection and final document verification, your FSSAI State License will be approved and issued.",
          },
        ],
      },
    ],
    whyUs: [
      {
        heading: "2. Application Submission",
        description: ["We provide expert guidance and support."],
        points: ["99% success rate", "Affordable pricing"],
      },
    ],
    faq: [
      {
        question: "What is an FSSAI state license?",
        answer: "It is a mandatory license for food businesses.",
      },
    ],
    
  },

  
  

//   "eating-house-license": {
//     title: "Eating House License Registration",
//     description:
//       "An Eating House License is an essential legal authorization required to operate any establishment that serves food or beverages for public consumption. It must be obtained along with other key regulatory approvals to ensure lawful operation of restaurants, cafés, food trucks, dhabas, takeaways, and similar outlets.",
//     overview: [
//       {
//         heading: "Overview of Eating House License Registration",
//         content:
//           "An Eating House License is an essential legal authorization required to operate any establishment that serves food or beverages for public consumption. It is a mandatory license for anyone looking to start a food-related business, and it must be obtained along with other key regulatory approvals.",
//       },
//       {
//         heading: "What is an Eating House?",
//         content:
//           "An Eating House includes any premises where food and drinks are prepared, served, or sold for consumption by the public. This covers a wide range of food service establishments such as restaurants, cafes, food trucks, dhabas, takeaways, and other similar outlets.",
//       },
//       {
//         heading: "Issuing Authority for Eating House License",
//         content:
//           "As per the Delhi Police Act, an Eating House License must be applied for through the local police department or the Commissioner of Police. The license is granted after thorough verification of documents and premises by the concerned authority.",
//       },
//     ],
//     benefits: [],
//     documentsRequired: [
//       {
//         heading:
//           "Mandatory Documents Required for Eating House License Registration",
//         content:
//           "- Valid identity proof (Aadhar Card, Passport, Voter ID, Driving License, or PAN Card)\n- Address proof (Aadhar Card, Passport, electricity bill, landline bill, rent/lease deed, or property ownership papers)\n- Certificate of Incorporation (for companies)\n- Details of directors (DIR-12) or board resolution nominating the authorized signatory\n- Ownership proof, tenancy agreement, or lease deed of the business premises\n- Copy of paid water and electricity bills\n- Building safety certificate issued by a certified architect or empanelled structural engineer\n- Electrical safety certificate from the Electrical Inspector or authorized contractor\n- Lift fitness certificate (if applicable)\n- Receipt of property tax payment\n- Proof of payment of regularization charges (if applicable)\n- Receipt of land-use conversion charges (if applicable)\n- Parking charges receipt (if in-house parking is insufficient)\n- Proof of source of water supply\n- FSSAI Food License\n- GST Registration Certificate\n- PAN of the proprietor, company, or firm\n- Medical fitness certificates of all employees with photographs\n- Police verification of all employees\n- Environmental clearance certificate\n- Affidavits as per police and municipal requirements\n- Smoking area details in compliance with COTPA Act, 2003\n- Valid tobacco license (if applicable)\n- Pest control records\n- Rainwater harvesting system details\n- Layout plan of the premises",
//       },
//     ],
//     registrationProcedure: [
//       {
//         heading: "Step-by-Step Procedure to Obtain an Eating House License",
//         content:
//           "1. Fill out the online application form on the state police or licensing portal.\n2. Upload all required documents (identity proofs, establishment details, safety certificates, declarations, etc.).\n3. Attend document and premises verification by the Additional Commissioner of Police (Licensing).\n4. Follow up regularly with the licensing department to respond to any additional queries.\n5. Upon satisfactory verification and inspection, the Eating House License is issued within 30–60 days.",
//         penalties: {
//           description: "",
//           penaltyTable: [],
//         },
//       },
//     ],
//     feesStructure: [],
//     registrationTimeline: [],
//     whyUs: [
//       {
//         heading:
//           "Why Choose DoStartup for Your Eating House License Registration?",
//         description: [
//           "Our team has years of experience handling government registrations and licenses across India, ensuring a smooth and efficient process.",
//           "We prioritize timely submissions and follow-ups to help you get your license within the committed time frame.",
//           "We simplify the complex paperwork, reducing errors and eliminating unnecessary back-and-forth with authorities.",
//           "Our professionals provide expert legal guidance on all compliance norms essential for food business licensing.",
//         ],
//         points: [
//           "Extensive experience in government registrations and licensing",
//           "Timely license delivery within promised timelines",
//           "Streamlined documentation process with minimal delays",
//           "Expert legal guidance for full compliance",
//           "End-to-end support from application to issuance",
//         ],
//         footerText: "",
//       },
//     ],
//     faq: [
//       {
//         question:
//           "What is the usual time required to obtain an Eating House License?",
//         answer:
//           "Generally, it takes about 30 to 60 days from application submission to license issuance, depending on documentation, inspection, and internal verification.",
//       },
//       {
//         question: "What is the validity period of an Eating House License?",
//         answer:
//           "The Eating House License is typically valid for up to three years, although the duration may vary based on state regulations and related licenses such as the Health Trade License.",
//       },
//       {
//         question: "Who issues the Eating House License?",
//         answer:
//           "The Additional Commissioner of Police (Licensing) or equivalent local police authority is responsible for issuing the Eating House License.",
//       },
//       {
//         question: "Can I operate without an Eating House License?",
//         answer:
//           "No, operating an eating house or food service business without a valid Eating House License is illegal and may attract penalties or closure notices.",
//       },
//       {
//         question:
//           "Is an FSSAI food license mandatory along with the Eating House License?",
//         answer:
//           "Yes, securing a valid FSSAI food license is mandatory for any entity involved in food preparation, distribution, or service.",
//       },
//       {
//         question: "How do I apply for an Eating House License?",
//         answer:
//           "You must file the application online through the designated state police licensing portal, upload all supporting documents, and pay the applicable fees.",
//       },
//       {
//         question: "What are common reasons for application rejection?",
//         answer:
//           "Applications may be rejected due to incomplete documentation, inaccurate information, non-compliance with safety regulations, or pending dues/taxes related to the premises.",
//       },
//     ],
//   },
//   "fpo-certification": {
//     title: "FPO Certification in India – Everything You Need to Know",
//     description:
//       "FPO Certification (Fruit Products Order) is mandatory for businesses involved in processed fruit and vegetable products. Governed by MoFPI and regulated by FSSAI, it ensures quality, safety, and hygiene standards are met.",
//     overview: [
//       {
//         heading: "FPO Certification – An Overview",
//         content:
//           "Introduced in 1955, the Fruit Products Order (FPO) Certification is required for all businesses producing processed fruit- and vegetable-based products. It validates compliance with quality, safety, and hygiene norms set by MoFPI and FSSAI.",
//       },
//     ],
//     typesOfCertification: [
//       {
//         heading: "Fruit-Based Products Certification",
//         content:
//           "Mandatory for jams, jellies, squashes, preserves, and fruit concentrates to ensure food safety and quality.",
//       },
//       {
//         heading: "Vegetable-Based Products Certification",
//         content:
//           "Required for pickles, sauces, canned vegetables, and purees, confirming hygiene and process controls.",
//       },
//       {
//         heading: "Beverages Certification",
//         content:
//           "Covers fruit juices, syrups, and drinks, guaranteeing defined safety and quality benchmarks.",
//       },
//       {
//         heading: "Canned Fruit Products Certification",
//         content:
//           "Applies to canned fruits, pulps, and vegetables to demonstrate hygienic processing and preservation techniques.",
//       },
//       {
//         heading: "Frozen Fruit Products Certification",
//         content:
//           "Ensures freezing and storage processes for fruits and vegetables comply with safety regulations.",
//       },
//       {
//         heading: "Dehydrated Products Certification",
//         content:
//           "For dried fruits, vegetables, and powders, verifying manufacturing under controlled, hygienic conditions.",
//       },
//       {
//         heading: "Edible Oils and Fats Certification",
//         content:
//           "Required for refined oils, ghee, and butter to confirm food-safe practices and nutritional standards.",
//       },
//       {
//         heading: "Honey Certification",
//         content:
//           "Verifies purity and quality of honey and honey-based products under FSSAI norms.",
//       },
//       {
//         heading: "Dairy Products Certification",
//         content:
//           "Ensures hygienic processing of milk-derived goods like butter, cheese, and cream.",
//       },
//       {
//         heading: "Miscellaneous Processed Food Certification",
//         content:
//           "Covers biscuits, snacks, and ready-to-eat items for compliance with food safety laws.",
//       },
//     ],
//     benefits: [
//       {
//         heading: "Key Benefits of Obtaining FPO Certification",
//         content:
//           "- Guarantees product quality through stringent safety standards\n- Ensures regulatory compliance with MoFPI and FSSAI\n- Builds consumer trust and loyalty with the recognized FPO mark\n- Enables market expansion domestically and internationally\n- Strengthens product labeling and branding\n- Supports export opportunities without regulatory roadblocks\n- Simplifies application via an online process\n- Enhances overall brand value and competitiveness\n- Promotes hygienic and responsible manufacturing\n- Drives sustainable, long-term business growth",
//       },
//     ],
//     fruitProductsRequireCertification: [
//       {
//         heading: "Fruit-Based Products",
//         content:
//           "Jams, jellies, marmalades, concentrates, squashes, preserves, chutneys, and pulps.",
//       },
//       {
//         heading: "Vegetable-Based Products",
//         content: "Pickles, sauces, canned vegetables, and purees.",
//       },
//       {
//         heading: "Beverages",
//         content: "Fruit juices, nectars, syrups, and fruit-flavored drinks.",
//       },
//       {
//         heading: "Canned Fruit Products",
//         content: "Canned fruits, vegetables, pulps, and purees.",
//       },
//       {
//         heading: "Frozen Fruit Products",
//         content: "Frozen fruits, vegetables, purees, and concentrates.",
//       },
//       {
//         heading: "Dehydrated Products",
//         content: "Dried fruits, vegetables, and powders.",
//       },
//       {
//         heading: "Edible Oils and Fats",
//         content: "Refined oils, ghee, and butter.",
//       },
//       {
//         heading: "Dairy-Based Products",
//         content: "Milk-based beverages, paneer, and dairy alternatives.",
//       },
//       {
//         heading: "Honey and Natural Sweeteners",
//         content: "Raw honey and infused honey blends.",
//       },
//       {
//         heading: "Miscellaneous Processed Foods",
//         content: "Biscuits, bakery items, and ready-to-eat snacks.",
//       },
//     ],
//     eligibilityCriteria: [
//       {
//         heading: "Eligibility Criteria for FPO Certification",
//         content:
//           "- Registered business entity (proprietorship, partnership, company, or cooperative)\n- Valid FSSAI food license\n- Operational manufacturing facility meeting hygiene standards\n- Products fall within approved FPO categories\n- Established quality control and testing systems\n- Infrastructure compliant with FPO guidelines\n- Employee health certifications\n- Proper record-keeping of sourcing, production, and audits\n- (If applicable) Trademark registration\n- Accurate and complete application submission",
//       },
//     ],
//     documentsRequired: [
//       {
//         heading: "Documents Required for FPO Mark Certification",
//         content:
//           "- Duly filled application form\n- Business registration certificate\n- PAN card and GST certificate\n- Valid FSSAI food license\n- Food Safety Management Plan (FSMP)\n- Facility layout plans and blueprints\n- List of equipment and machinery\n- List of raw materials and ingredients\n- Product details, specifications, and label samples\n- Quality control and laboratory test reports\n- Quality assurance plan\n- Ownership or lease agreements\n- Employee health certificates\n- (If applicable) Trademark registration proof",
//       },
//     ],
//     applicationProcedure: [
//       {
//         heading: "How to Apply for FPO Mark Certification",
//         content:
//           "1. Verify eligibility (registered entity, FSSAI license, compliant facility)\n2. Gather all mandatory documents\n3. Register and log in on the FSSAI portal\n4. Complete the online application form accurately\n5. Upload supporting documents in prescribed formats\n6. Pay the application fee and retain the receipt\n7. Facilitate facility inspection by FSSAI officials\n8. Submit product samples for laboratory testing\n9. Await review of documents, inspection, and test reports\n10. Receive FPO certification upon approval\n11. Monitor certificate validity and apply for renewal before expiry",
//       },
//     ],
//     registrationTimeline: [
//       {
//         heading: "Timeline for Obtaining FPO Certification",
//         description:
//           "The end-to-end process typically takes 30 to 45 days, covering documentation review, facility inspection, product testing, and final approval.",
//         totalTime: "30–45 days",
//       },
//     ],
//     whyUs: [
//       {
//         heading: "Why Choose Dostartup for FPO Certification?",
//         description: [
//           "Comprehensive eligibility assessment to ensure readiness.",
//           "Expert support with documentation and online filing.",
//           "Pre-audit facility evaluation to address gaps in advance.",
//           "Coordination of sample testing with FSSAI-approved labs.",
//           "Regulatory compliance advisory throughout the process.",
//           "Employee training for hygiene and inspection preparedness.",
//           "On-ground support during official inspections.",
//           "Proactive certificate renewal management.",
//           "Significant time and cost savings with our proven methodology.",
//         ],
//         points: [
//           "10+ years of experience in food industry certifications",
//           "99% first-time approval rate",
//           "Dedicated project manager for seamless coordination",
//           "Transparent pricing and no hidden fees",
//           "24/7 customer support",
//         ],
//         footerText: "",
//       },
//     ],
//     faq: [
//       {
//         question: "What is FPO Certification?",
//         answer:
//           "FPO Certification is a quality assurance mark issued by MoFPI and regulated by FSSAI, certifying that processed fruit and vegetable products meet mandatory safety, hygiene, and quality standards.",
//       },
//       {
//         question: "How long does it take to obtain FPO Certification?",
//         answer:
//           "Typically, the process takes 30 to 45 days, depending on document accuracy, inspection schedules, and lab test turnaround times.",
//       },
//       {
//         question: "Is an FSSAI license mandatory for FPO Certification?",
//         answer:
//           "Yes, a valid FSSAI food license is a prerequisite for applying for FPO Certification.",
//       },
//       {
//         question: "Can I export products with FPO Certification?",
//         answer:
//           "Yes, FPO Certification is recognized internationally and facilitates export by demonstrating compliance with global food safety norms.",
//       },
//       {
//         question: "How do I renew my FPO Certification?",
//         answer:
//           "Submit a renewal application through the FSSAI portal before the certificate expiry date, along with updated documents and applicable fees.",
//       },
//     ],
//   },
//   "fssai-product-approval": {
//     title: "FSSAI Product Approval – Everything You Need to Know",
//     description:
//       "FSSAI Product Approval is the official process by which the Food Safety and Standards Authority of India grants permission for food products or ingredients that fall outside existing standards. Managed via the online Food Product Approval System (FPAS), it ensures safety and quality compliance before market launch.",
//     overview: [
//       {
//         heading: "FSSAI Product Approval – An Overview",
//         content:
//           "FSSAI Product Approval is a crucial process through which FSSAI grants approval for food products or ingredients that do not comply with prescribed standards under the Food Safety & Standards Act. It is managed by the Central Government to ensure that new or proprietary food items meet safety and quality benchmarks before entering the Indian market.",
//       },
//       {
//         heading: "Why Approval Is Mandatory",
//         content:
//           "Before launching any non-standard food product—ingredients, formulations, or novel foods—manufacturers must obtain FSSAI approval. This step guarantees adherence to safety, hygiene, and nutritional regulations, protecting consumer health and reinforcing brand trust.",
//       },
//     ],
//     onlineSystem: [
//       {
//         heading: "FSSAI Online Product Approval System (FPAS)",
//         content:
//           "The FPAS portal replaces the earlier manual submission process. FBOs can now submit, pay fees, and track their product approval applications online, benefiting from enhanced transparency, speed, and accessibility.",
//       },
//     ],
//     whenRequired: [
//       {
//         heading: "When Do You Need FSSAI Product Approval?",
//         content:
//           "- For ingredients or products not covered by existing FSSAI standards\n- Onboarding new or proprietary food formulations\n- Launching items never previously produced or tested globally\n- Seeking approval for substances that have never undergone a safety assessment",
//       },
//     ],
//     benefits: [
//       {
//         heading: "Key Benefits of Obtaining FSSAI Product Approval",
//         content:
//           "- Streamlined, standardized assessment procedures\n- Reduced regulatory delays and minimal risk of compliance issues\n- Enhanced consumer trust through recognized safety endorsements\n- Confidence of domestic and international buyers via rigorous quality testing\n- Greater industry engagement and market reach",
//       },
//     ],
//     informationRequired: [
//       {
//         heading: "Information Required for Application",
//         content:
//           "- Business name, address, and FBO license details\n- Brand and common product name\n- Manufacturing method and facility address\n- Complete ingredient list and pack size\n- Shelf life, serving details, and nutritional/health claims\n- Product category, country of origin, and market status\n- Contact email and phone number",
//       },
//     ],
//     documentsRequired: [
//       {
//         heading: "Supporting Documents",
//         content:
//           "- Detailed manufacturing process description\n- Product label design (prototype or final)\n- Real-time and accelerated stability data sheets\n- NABL-accredited laboratory analysis certificates\n- Form-9, undertaking, and end-use declaration\n- Any additional test reports or safety assessments",
//       },
//     ],
//     registrationProcedure: [
//       {
//         heading: "Procedure for Obtaining FSSAI Product Approval",
//         content:
//           "1. Incorporate a registered entity (Pvt. Ltd. or LLP) for smoother license transfer.\n2. Secure a valid FBO license and attach it to your application.\n3. Obtain required lab test reports from NABL-accredited facilities.\n4. Prepare compliant product label designs.\n5. Submit the complete application online via the FPAS portal.\n6. Facilitate facility inspection and sample testing as scheduled.\n7. Monitor application status and respond to any queries.\n8. Receive official FSSAI Product Approval to legally market your product.",
//       },
//     ],
//     faq: [
//       {
//         question: "What is FSSAI Product Approval?",
//         answer:
//           "FSSAI Product Approval is the certification process for food items or ingredients not covered under existing standards, ensuring their safety and compliance before market introduction.",
//       },
//       {
//         question: "Who can apply for product approval?",
//         answer:
//           "Any Food Business Operator (manufacturer, importer, or marketer) with a valid FBO license can apply via the FPAS portal.",
//       },
//       {
//         question: "How long does approval take?",
//         answer:
//           "Typical turnaround is 30–45 days, subject to complete documentation, facility inspection, and laboratory testing.",
//       },
//       {
//         question: "Is FBO license mandatory?",
//         answer:
//           "Yes. A valid FBO (registration or license) is required to submit an FSSAI product approval application.",
//       },
//       {
//         question: "Can I track my application online?",
//         answer:
//           "Yes. The FPAS portal allows applicants to submit, pay fees, and track approval status in real time.",
//       },
//     ],
//   },
//   "food-recycling-license": {
//     title: "Food Recycling License in India – Everything You Need to Know",
//     description:
//       "A Food Recycling License (Consent to Establish & Operate) from the State Pollution Control Board is mandatory for any entity that processes or recycles food waste via composting, anaerobic digestion, or industrial treatment. It ensures compliance with environmental regulations and promotes sustainable waste management.",
//     overview: [
//       {
//         heading: "Overview of Food Recycling License",
//         content:
//           "India generates over 817,000 tonnes of food waste annually (2021), yet recycles only 19% of it. With nearly 40% of produced food wasted and an economic loss of ₹92,000 crores each year, a Food Recycling License helps organizations implement sustainable waste‐management solutions while meeting legal requirements.",
//       },
//       {
//         heading: "Food Waste Management Hierarchy",
//         content:
//           "Effective management follows a four-tier hierarchy: prevention and reduction at source; redistribution of surplus edible food; recycling and treatment (e.g., anaerobic digestion, industrial composting); and final composting into nutrient-rich soil amendments.",
//       },
//     ],
//     benefits: [
//       {
//         heading: "Key Benefits of Composting Food Waste",
//         content:
//           "- Prevents soil erosion by improving soil structure\n- Promotes healthier plant growth through enhanced nutrient availability\n- Conserves water via increased soil moisture retention\n- Reduces landfill waste and associated disposal costs\n- Lowers greenhouse gas emissions and agricultural odors",
//       },
//     ],
//     documentsRequired: [
//       {
//         heading: "Documents Required for Food Recycling License",
//         content:
//           "- Covering letter describing recycling activities\n- Proof of site ownership or lease deed\n- Company registration (MOA or partnership deed)\n- Detailed site layout plan showing equipment, ETP, storage areas\n- Environmental impact diagram (2 km radius)\n- Process flowchart of recycling/manufacturing\n- CA certificate for pollution control provisions\n- KYC of authorized signatory (PAN/Aadhaar)\n- Recent utility bills (electricity/water)\n- GST registration certificate\n- Factory license under the Factories Act",
//       },
//     ],
//     registrationProcedure: [
//       {
//         heading: "Procedure for Obtaining Food Recycling License",
//         content:
//           "1. Submit the prescribed application form to the relevant State Pollution Control Board (SPCB).\n2. Attach all required documents and detailed process descriptions.\n3. SPCB conducts a site inspection to verify compliance.\n4. Authority reviews inspection report and documentation.\n5. On approval, SPCB issues Consent to Establish (CTE) and Consent to Operate (CTO).",
//       },
//     ],
//     whyUs: [
//       {
//         heading: "How Dostartup Helps You Secure Your License",
//         description: [
//           "Tailored end-to-end support for all application steps.",
//           "Expert guidance on document collection and drafting.",
//           "Coordination with SPCB officials for inspections.",
//           "Timely follow-up to ensure swift approval.",
//         ],
//         points: [
//           "Dedicated project manager",
//           "100% application completeness guarantee",
//           "Transparent pricing and progress tracking",
//           "Post-approval compliance support",
//         ],
//         footerText:
//           "Partner with Dostartup to turn your food waste challenge into a sustainable opportunity.",
//       },
//     ],
//     faq: [
//       {
//         question: "What is a Food Recycling License?",
//         answer:
//           "It is the combined Consent to Establish (CTE) and Consent to Operate (CTO) issued by the State Pollution Control Board, allowing you to legally set up and run a food waste recycling facility.",
//       },
//       {
//         question: "Who issues the Food Recycling License?",
//         answer:
//           "The relevant State Pollution Control Board (SPCB) or Pollution Control Committee (PCC) in Union Territories.",
//       },
//       {
//         question: "How long does the licensing process take?",
//         answer:
//           "Typically 45–60 days, depending on state-specific procedures and application completeness.",
//       },
//       {
//         question: "Is a Food Recycling License mandatory?",
//         answer:
//           "Yes. Any entity processing or recycling food waste in India must obtain both CTE and CTO from the SPCB.",
//       },
//       {
//         question: "Which legislation governs food waste management?",
//         answer:
//           "Solid Waste Management Rules, 2016 under the Environment Protection Act, 1986, along with state-specific pollution control regulations.",
//       },
//     ],
//   },
};
