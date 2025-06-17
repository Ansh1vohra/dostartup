// Base Types
export type benefits = {
  heading: string;
  content: string;
  points?: string[];
};
export type documentsRequired = {
  heading: string;
  content: string;
};
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
export type feesStructure = {
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
  stats?: string[];
  advantages?: string[];
};
export type overviewItem = {
  heading: string;
  content: string;
  sections?: sectionWithItems[];
  statistics?: {
    year: string;
    target: string;
  }[];
};
export type faq = {
  question: string;
  answer: string;
  relatedServices?: string[];
};
export type Listicles = {
  category: string;
  documents?: string[];
};
export type penalties = {};
// Service Types
export type services = {
  heading: string;
  offerings?: {
    title: string;
    description: string;
  }[];
  services?: string[];
  contactInfo?: {
    text: string;
    email: string;
    phone: string;
  };
  additionalServices?: string[];
  supportServices?: string[];
  coreServices?: {
    title: string;
    description: string;
  }[];
};
export type applicationProcess = {
  heading: string;
  content?: string;
  steps?: {
    title: string;
    description: string;
  }[];
};
export type marketInsights = {
  heading: string;
  content: string;
  statistics?: {
    year: string;
    units: string;
  }[];
  trendData?: (
    | {
      sector: string;
      investment: string;
      growthRate?: string;
    }
    | {
      trend: string;
      impact: 'Low' | 'Medium' | 'High' | 'Transformational';
    }
  )[];
};
export type complianceGuidelines = {
  heading: string;
  content: string;
  penalties?: {
    description: string;
    penaltyTable?: {
      serialNumber: string;
      particulars: string;
      fine: string;
    }[];
  };
};
export type marketTrends = {
  heading: string;
  description?: string;
  trendData?: {
    country: string;
    value: string;
    share: string;
  }[];
};
export type legalFramework = {
  heading: string;
  regulations: {
    name: string;
    description: string;
  }[];
};
// Common Component Types
export type challenges = {
  heading: string;
  items: challengeItem[];

};
export type sectionWithItems = {
  title: string;
  items: string[];
};
export type whyUsItem = {
  heading: string;
  stats: string[];
  advantages: string[];
};
export type policySupport = {
  heading: string;
  items: policyItem[];
};
export type challengeItem = {
  title: string;
  description: string;
  severity?: 'low' | 'medium' | 'high';
  costImplications?: {}[];
  complianceAreas?: {}[];
  dataTypes?: {}[];
  impactAreas?: string[];
};
export type serviceOffering = {
  title: string;
  description: string;
};
export type policyItem = {
  title: string;
  description: string;
};
export type contactInfo = {
  text: string;
  email: string;
  phone: string;
};
export type importanceItem = {
  heading: string;
  content: string;
  points: string[];
};
// Tobacco Industry
export type tobaccoIndustryOverview = {
  heading: string;
  content: string;
  impacts?: {
    environmental: string[];
    social: string[];
  };
};
export type tobaccoIndustryChallenges = {
  heading: string;
  challenges: {
    title: string;
    description: string;
    severity?: 'low' | 'medium' | 'high';
  }[];
};
export type tobaccoIndustryServices = {
  heading: string;
  services: {
    title: string;
    description: string;
    implementation?: string[];
  }[];
};
export type tobaccoIndustryRegulations = {
  heading: string;
  regulations: {
    name: string;
    description: string;
    country?: string;
  }[];
};
export type tobaccoIndustryFAQ = {
  question: string;
  answer: string;
  relatedRegulations?: string[];
};
// Aerospace Industry
export type aerospaceIndustryOverview = {
  heading: string;
  content: string;
  growthStatistics?: {
    year: string;
    value: string;
  }[];
};
export type aerospaceIndustryChallenges = {
  heading: string;
  challenges: {
    title: string;
    description: string;
    impactLevel?: 'low' | 'medium' | 'high';
  }[];
};
export type aerospaceIndustryServices = {
  heading: string;
  coreServices: {
    title: string;
    description: string;
    implementationSteps?: string[];
  }[];
  additionalServices?: string[];
};
export type aerospaceIndustryFAQ = {
  question: string;
  answer: string;
  relatedServices?: string[];
};
// Renewable Energy Industry
export type renewableEnergyOverview = {
  heading: string;
  content: string;
  sections?: {
    title: string;
    items: string[];
  }[];
  statistics?: {
    year: string;
    target: string;
  }[];
};
export type renewableEnergyChallenges = {
  heading: string;
  items: {
    title: string;
    description: string;
    severity?: 'low' | 'medium' | 'high';
  }[];
};
export type renewableEnergyServices = {
  heading: string;
  coreServices: {
    title: string;
    description: string;
    implementationSteps?: string[];
  }[];
  supportServices?: string[];
};
export type renewableEnergyMarket = {
  heading: string;
  content: string;
  trendData?: {
    sector: string;
    investment: string;
    growthRate?: string;
  }[];
};
export type renewableEnergyFAQ = {
  question: string;
  answer: string;
  relatedServices?: string[];
};
// Financial Sector
export type financialSectorOverview = {
  heading: string;
  content: string;
  sections?: {
    title: string;
    items: string[];
  }[];
  growthMetrics?: {
    period: string;
    metric: string;
    value: string;
  }[];
};
export type financialSectorChallenges = {
  heading: string;
  items: {
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    mitigationStrategies?: string[];
  }[];
};
export type financialSectorServices = {
  heading: string;
  offerings: {
    title: string;
    description: string;
    complianceStandards?: string[];
  }[];
  supportServices?: string[];
};
export type financialMarketTrends = {
  heading: string;
  content: string;
  trendData: {
    trend: string;
    impact: 'low' | 'medium' | 'high' | 'transformational';
    timeframe?: string;
  }[];
};
export type financialSectorFAQ = {
  question: string;
  answer: string;
  relatedServices?: string[];
  regulatoryReferences?: string[];
};

//Dairy Industry
export type ESDDProcess = {
  heading: string;
  steps: {
    title: string;
    duration: string;
    description: string;
  }[];
  totalTime: string;
};
export type DairyRegulatoryCompliance = {
  heading: string;
  regulations: {
    name: string;
    description: string;
    complianceDeadline?: string;
  }[];
};
export type DairyMarketInsights = {
  heading: string;
  content: string;
  trendData: {
    trend: string;
    impact: 'Low' | 'Medium' | 'High' | 'Transformational';
    marketSize?: string;
  }[];
  statistics?: {
    year: string;
    units: string;
    growthRate?: string;
  }[];
};
//Sugar Indusry
export type SugarWasteManagement = {
  heading: string;
  byproducts: {
    name: string;
    generationRate: string;
    reuseOptions: string[];
    environmentalImpact?: string;
  }[];
};
export type SugarIndustryChallenge = {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  regulatoryImplications?: string[];
};
export type SugarMarketInsights = {
  heading: string;
  content: string;
  trendData: {
    trend: string;
    impact: 'Low' | 'Medium' | 'High';
    marketImplications?: string;
  }[];
  productionCosts?: {
    year: string;
    costPerUnit: string;
    comparison?: string;
  }[];
};
// Iron and Steel  Industry
export type SteelEmissionsData = {
  heading: string;
  metrics: {
    type: string;
    india: string;
    global?: string;
    bestPractice?: string;
  }[];
  reductionStrategies: string[];
  timeline?: {
    year: string;
    reductionTarget: string;
  }[];
};
export type SteelTechnologyRoadmap = {
  heading: string;
  phases: {
    phase: string;
    technologies: string[];
    costImplications?: string;
    emissionImpact?: string;
  }[];
};
export type SteelIndustryChallenge = {
  title: string;
  description: string;

  severity: 'low' | 'medium' | 'high';
  costImplications?: string[];
  complianceAreas?: string[];
  dataTypes?: string[];
};
//Agricultural Equipment Manufacturing Industry
export type complianceData = {
  heading: string;
  metrics: {
    type: string;
    [key: string]: string;
  }[];
  improvementStrategies: string[];
};
export type technologyRoadmap = {
  heading: string;
  phases: {
    phase: string;
    technologies: string[];
  }[];
};
export type emissionsData = {
  heading: string;
  metrics: {
    type: string;
    [key: string]: string;
  }[];
  reductionStrategies: string[];
};
//Furniture and Fixtures Industry
export type sustainabilityData = {
  heading: string;
  metrics: {
    type: string;
    [key: string]: string;
  }[];
  improvementStrategies: string[];
};
export type PageContentType = {
  // Main Page Content Type
  title: string;
  description: string;
  overview: overviewItem[];
  benefits?: benefits[];
  documentsRequired?: documentsRequired[];
  Listicles?: Listicles[];
  registrationProcedure?: registrationProcedure[];
  feesStructure?: feesStructure[];
  registrationTimeline?: registrationTimeline[];
  whyUs?: whyUs[];
  faq?: faq[];

  // Core Services
  applicationProcess?: applicationProcess[];
  marketInsights?: marketInsights[];
  complianceGuidelines?: complianceGuidelines[];
  marketTrends?: marketTrends[];
  legalFramework?: legalFramework[];
  importance?: importanceItem[];
  challenges?: challenges[];
  services?: services[];
  policySupport?: policySupport[];
  contact?: contactInfo;

  // Industry-Specific Content
  tobaccoIndustryOverview?: tobaccoIndustryOverview[];
  tobaccoIndustryChallenges?: tobaccoIndustryChallenges[];
  tobaccoIndustryServices?: tobaccoIndustryServices[];
  tobaccoIndustryRegulations?: tobaccoIndustryRegulations[];
  tobaccoIndustryFAQ?: tobaccoIndustryFAQ[];
  aerospaceIndustryOverview?: aerospaceIndustryOverview[];
  aerospaceIndustryChallenges?: aerospaceIndustryChallenges[];
  aerospaceIndustryServices?: aerospaceIndustryServices[];
  aerospaceIndustryFAQ?: aerospaceIndustryFAQ[];
  renewableEnergyOverview?: renewableEnergyOverview[];
  renewableEnergyChallenges?: renewableEnergyChallenges[];
  renewableEnergyServices?: renewableEnergyServices[];
  renewableEnergyMarket?: renewableEnergyMarket[];
  renewableEnergyFAQ?: renewableEnergyFAQ[];
  financialSectorOverview?: financialSectorOverview[];
  financialSectorChallenges?: financialSectorChallenges[];
  financialSectorServices?: financialSectorServices[];
  financialMarketTrends?: financialMarketTrends[];
  financialSectorFAQ?: financialSectorFAQ[];
  esddProcess?: ESDDProcess;
  regulatoryCompliance?: DairyRegulatoryCompliance;
  wasteManagement?: SugarWasteManagement;
  emissionsData?: SteelEmissionsData;
  technologyRoadmap?: SteelTechnologyRoadmap;
  complianceData?: complianceData;
  sustainabilityData?: sustainabilityData;
};



export const pageContent: Record<string, PageContentType> = {

  //lead-acid-battery-import


  "new-lead-acid-battery-import-license": {
    "title": "New Lead Acid Battery Import License",
    "description": "Start Importing Lead Acid Batteries – Get Licensed with DOstartup",
    "overview": [
      {
        "heading": "New Lead Acid Battery Import License – Overview",
        "content": "To legally import new lead acid batteries into India, businesses must obtain a valid New Lead Acid Battery Import License from the Central Pollution Control Board (CPCB). This license is mandatory under environmental regulations due to the potential hazards associated with lead acid batteries.\nAt DOstartup, we help you navigate the licensing process smoothly, from documentation to approval, with expert guidance at every step."
      },
      {
        "heading": "What Are Lead Acid Batteries?",
        "content": "Lead acid batteries are a cost-effective method of energy storage. They contain two main electrodes—lead and lead oxide—immersed in a solution of sulfuric acid and water. Energy generation involves a chemical reaction that produces lead sulphate and water. This process is reversed when the battery is recharged.\nWhile widely used, lead acid batteries can pose serious environmental risks if not properly handled or disposed of, including soil and groundwater contamination."
      }
    ],
    "benefits": [
      {
        "heading": "Why Choose DOstartup?",
        "content": "● 10+ Years of Regulatory Expertise\n● 400+ In-House CAs, CS, and Legal Experts\n● 99% SLA-Based Delivery Assurance\n● Pan-India Coverage Across 10,000+ Pincodes"
      }
    ],
    "documentsRequired": [
      {
        "heading": "Documents Required for Application",
        "content": "● Form I\n● Form II\n● Form III (mention quantity in MT to be imported)\n● Attested copy of IEC (Import Export Code) Certificate\n● Application on company letterhead"
      }
    ],
    "applicationProcess": [
      {
        "heading": "How to Apply for a New Import License?",
        "content": "Importers must complete the online application process via the CPCB’s official portal and submit a hard copy of the application along with the required documents.",
        "steps": [
          {
            "title": "Apply Online",
            "description": "Submit application via CPCB web portal."
          },
          {
            "title": "Submit Hard Copy",
            "description": "Send documents to CPCB on company letterhead."
          },
          {
            "title": "License Issuance",
            "description": "HWMD Division In-charge issues the registration."
          }
        ]
      },
      {
        "heading": "Renewal of License",
        "content": "👉 Validity of renewal: 1 year\n👉 Apply for renewal on the BRMS portal, 45 days before license expiry.\n👉 Non-compliance may result in non-renewal."
      }
    ],
    "registrationProcedure": [
      {
        "heading": "Penalties for Non-Compliance",
        "content": "Strict adherence to CPCB regulations is essential to avoid penalties and ensure business continuity.",
        "penalties": {
          "description": "Failure to comply may result in license cancellation or suspension.",
          "penaltyTable": [
            {
              "serialNumber": "1",
              "particulars": "Non-filing of half-yearly returns",
              "fine": "License cancellation"
            },
            {
              "serialNumber": "2",
              "particulars": "Non-compliance for over a year",
              "fine": "Notice issued, potential cancellation"
            }
          ]
        }
      }
    ],
    "whyUs": [
      {
        "heading": "How DOstartup Helps",
        "points": [
          "Eligibility Check and Licensing Guidance",
          "Document Preparation & Verification",
          "Online Application Filing",
          "Liaison with CPCB for smooth processing",
          "Compliance Advisory to avoid cancellation risks"
        ],
        "footerText": "Ready to Get Started? Connect with DOstartup today for a fast, compliant, and hassle-free license."
      }
    ],
    "faq": [
      {
        "question": "Who grants the Lead Acid Battery Import License?",
        "answer": "The Central Pollution Control Board (CPCB), as delegated by the Ministry of Environment and Forests (MoEF)."
      },
      {
        "question": "Can a cancelled license be reactivated?",
        "answer": "Yes, upon approval by the CPCB Member Secretary."
      }
    ]
  },



  //lithium-ion-battery-import


  "lithium-ion-battery-import-license": {
    "title": "Lithium-Ion Battery Import License",
    "description": "Start Importing Lithium-Ion Batteries with a Valid CPCB License",
    "overview": [
      {
        "heading": "Lithium-Ion Battery Import License – Overview",
        "content": "To import lithium-ion batteries into India, businesses must acquire a Lithium-Ion Battery Import License issued by the Central Pollution Control Board (CPCB). These batteries are widely used in electronic devices, EVs, and aerospace applications due to their fast-charging and eco-efficient nature.\nAt DOstartup, we help you obtain your license swiftly and stay compliant with environmental laws—end-to-end support, zero hassle."
      },
      {
        "heading": "What Are Lithium-Ion Batteries?",
        "content": "A lithium-ion battery is a type of secondary (rechargeable) battery that uses lithium-ion movement between electrodes to store and release energy. Compared to other types, lithium-ion batteries offer:\n✔️ Quick charging\n✔️ Long lifespan\n✔️ Enhanced safety\n✔️ Lower environmental impact"
      },
      {
        "heading": "Primary vs. Secondary Batteries – Key Difference",
        "content": "Primary batteries (e.g., Zinc Carbon) are single-use. Secondary batteries like lithium-ion can be recharged multiple times and are environmentally sustainable when properly managed."
      }
    ],
    "benefits": [
      {
        "heading": "Why Choose DOstartup?",
        "content": "● 10+ Years of Licensing & Compliance Expertise\n● 400+ In-House Legal & Technical Experts (CAs, CS, Lawyers)\n● 99% SLA Delivery Rate Across India\n● 10,000+ Pincodes Service Reach"
      }
    ],
    "marketInsights": [
      {
        "heading": "Lithium-Ion Battery Import in India – Market Snapshot",
        "content": "🔺 Import value rose from ₹2,600 crore to ₹6,500 crore in 2019\n🔌 Major Import Sources: China, Japan, South Korea\n🏭 China leads the global lithium battery market with ~75% of cell manufacturing capacity",
        "statistics": [
          {
            "year": "2016",
            "units": "175M units"
          },
          {
            "year": "2019",
            "units": "450M units"
          }
        ]
      }
    ],
    "applicationProcess": [
      {
        "heading": "How to Get a Lithium-Ion Battery Import License?",
        "steps": [
          {
            "title": "Apply Online",
            "description": "Visit the BRMS Portal and submit Form II & III."
          },
          {
            "title": "Submit Documents",
            "description": "Send hard copies (IEC, BIS Certificate) to CPCB."
          },
          {
            "title": "License Issuance",
            "description": "Approval by CPCB nodal officer; dispatched by post."
          }
        ]
      }
    ],
    "documentsRequired": [
      {
        "heading": "Documents Required for License",
        "content": "● PAN Card\n● IEC Certificate\n● BIS Certificate\n● Half-Yearly Returns\n● Industrial License (if applicable)"
      }
    ],
    "complianceGuidelines": [
      {
        "heading": "License Renewal Process",
        "content": "Apply at least 45 days before expiry. Renewal requires submission of half-yearly returns and verification by CPCB."
      },
      {
        "heading": "License Suspension or Cancellation",
        "content": "Non-compliance (e.g., missing returns) may lead to cancellation. Reapplication requires an affidavit.",
        "penalties": {
          "description": "CPCB may issue notices or suspend the license.",
          "penaltyTable": [
            {
              "serialNumber": "1",
              "particulars": "Late submission of returns",
              "fine": "Notice → Suspension"
            },
            {
              "serialNumber": "2",
              "particulars": "No response to non-compliance notice",
              "fine": "License cancellation"
            }
          ]
        }
      }
    ],
    "whyUs": [{
      "heading": "How DOstartup Helps You",
      "points": [
        "Step-by-step guidance on licensing",
        "Document prep and portal submissions",
        "Renewal/reactivation support",
        "Environmental compliance advisory"
      ],
      "footerText": "Get Started with DOstartup Today – Fast, compliant, and worry-free licensing."
    }],
    "faq": [
      {
        "question": "Where is the license issued?",
        "answer": "To the address mentioned in your IEC certificate."
      },
      {
        "question": "Can a cancelled license be reinstated?",
        "answer": "Yes, with an affidavit and fresh documentation."
      }
    ]

  },



  //lead-acid-battery-recycling

  "lead-acid-battery-recycling-registration": {
    "title": "Lead Acid Battery Recycling Registration",
    "description": "Avoid Environmental Hazards with Compliant Battery Recycling",
    "overview": [
      {
        "heading": "Overview: Lead Acid Battery Recycling in India",
        "content": "Lead Acid Batteries are one of the most economical energy storage solutions, commonly used across industries and households. These batteries operate using two electrodes—lead and lead oxide—immersed in a sulfuric acid solution. When discharged, lead sulphate forms; this reverses during charging.\nDespite their utility, improper disposal of lead-acid batteries can contaminate soil and water, creating severe environmental and health hazards. That's why regulated recycling is essential—and legally mandated."
      }
    ],
    "benefits": [
      {
        "heading": "Why Recycle Lead Acid Batteries?",
        "content": "● 98% recyclability: Lead, plastic, and sulfuric acid are reusable.\n● Eco-friendly: Reduces toxic waste and pollution.\n● Energy-efficient: Recycled lead and plastic are used in new batteries or other products."
      }
    ],
    "documentsRequired": [
      {
        "heading": "Documents for Registration",
        "content": "● Valid consent under Water & Air Acts\n● Authorization under Hazardous Waste Rules\n● Registration from District Industries Centre\n● Proof of installed recycling capacity"
      }
    ],
    "registrationProcedure": [
      {
        "heading": "Registration Process",
        "content": "1. Submit Application: Apply to the MoEFCC in Form VI with required documents\n2. Facility Verification: Technical infrastructure and environmental safeguards verification\n3. Registration Grant: Issued for two years upon successful verification"
      },
      {
        "heading": "Renewal of Registration",
        "content": "Submit Form VI before expiry. Renewal granted after compliance review.",
        "penalties": {
          "description": "Non-compliance may lead to:",
          "penaltyTable": [
            {
              "serialNumber": "1",
              "particulars": "Failure to comply with rules",
              "fine": "Suspension/Cancellation"
            }
          ]
        }
      }
    ],
    "complianceGuidelines": [
      {
        "heading": "Responsibilities of a Recycler",
        "content": "● Submit annual returns in Form VII\n● Maintain records of batteries processed\n● Mark recovered lead with 'Recycled'\n● Promote public awareness",
        "penalties": {
          "description": "Registration may be cancelled for non-compliance:",
          "penaltyTable": [
            {
              "serialNumber": "1",
              "particulars": "Failure to comply with rules",
              "fine": "Suspension/Cancellation"
            },
            {
              "serialNumber": "2",
              "particulars": "No response to show-cause notice",
              "fine": "Final cancellation"
            }
          ]
        }
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose DOstartup?",
        "points": [
          "10+ Years of Industry Experience",
          "400+ In-House Experts",
          "99% SLA-Based Delivery Rate",
          "PAN-India Coverage"
        ]
      },
      {
        "heading": "How DOstartup Can Help",
        "points": [
          "Application preparation and filing",
          "Documentation review",
          "Advisory on plant design",
          "Compliance tracking"
        ],
        "footerText": "Let's build a cleaner, safer future—one battery at a time. → Contact DOstartup to Get Started"
      }
    ],
    "faq": [
      {
        "question": "Who governs battery recycling in India?",
        "answer": "The Batteries (Management and Handling) Rules, 2001"
      },
      {
        "question": "How long is registration valid?",
        "answer": "Two years, renewable upon compliance"
      }
    ]
  },


  //scrap-battery

  "scrap-battery-import-registration": {
    "title": "Registration for Scrap Battery Import",
    "description": "Secure Legal Registration to Import Scrap Batteries into India",
    "overview": [
      {
        "heading": "Overview: Why Registration Matters",
        "content": "Scrap batteries contain hazardous substances like lead and mercury..."
      }
    ],
    "legalFramework": [
      {
        "heading": "Legal Framework for Scrap Battery Import",
        "regulations": [
          {
            "name": "Batteries (Management and Handling) Rules, 2001",
            "description": "Rule 5 delegates import registration to CPCB from MoEF"
          },
          {
            "name": "Hazardous Waste Management Rules",
            "description": "Governs import, transport, recycling and disposal"
          }
        ]
      }
    ],
    "marketTrends": [
      {
        "heading": "India's Import Trend of Scrap Batteries",
        "description": "India is one of the largest importers of scrap batteries",
        "trendData": [
          {
            "country": "USA",
            "value": "106.5",
            "share": "11.91%"
          },
          {
            "country": "Malaysia",
            "value": "72.89",
            "share": "8.15%"
          }
        ]
      }
    ],
    "services": [
      {
        "heading": "How Corpbiz Helps You",
        "services": [
          "Application filing with SPCB & MoEF",
          "Documentation preparation & submission",
          "Legal advisory on compliance obligations"
        ],
        "contactInfo": {
          "text": "Start Your Registration Today!",
          "email": "support@corpbiz.io",
          "phone": "+91-XXXXXXXXXX"
        }
      }
    ],
    "registrationProcedure": [
      {
        "heading": "Registration Process",
        "content": "1. Apply to SPCB... 2. Obtain NOC..."
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose Us?",
        "points": [
          "10+ Years Experience",
          "400+ In-House Experts"
        ]
      }
    ]
  }
  ,




  //food-processing

  "environmental-social-due-diligence-food-processing": {
    "title": "Environmental & Social Due Diligence in the Food Processing Industry",
    "description": "Comprehensive ESDD solutions for sustainable food processing operations",
    "overview": [
      {
        "heading": "Overview",
        "content": "DoStartup is an AI-driven technology platform offering legal, financial, and environmental consulting services through a dedicated team of experts..."
      },
      {
        "heading": "Structure of the Indian Food Processing Sector",
        "content": "The industry adds value to raw agricultural and livestock products...",
        "sections": [
          {
            "title": "Key Segments",
            "items": [
              "Dairy: Powders, ice cream, butter",
              "Fruits & Vegetables: Juices, concentrates"
            ]
          },
          {
            "title": "Processing Stages",
            "items": [
              "Primary: Cleaning, grading",
              "Secondary: Purees, meat processing"
            ]
          }
        ]
      }
    ],
    "importance": [
      {
        "heading": "Why ESDD is Essential",
        "content": "The food processing industry is resource-intensive...",
        "points": [
          "Optimizes resource use",
          "Ensures ethical sourcing"
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key Challenges",
        "items": [
          {
            "title": "Infrastructure Gaps",
            "description": "Inadequate storage and transportation facilities..."
          },
          {
            "title": "Limited Access to Capital",
            "description": "High compliance costs for small-scale operators..."
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "Benefits of ESDD",
        "content": "Supply chain optimization and centralized process oversight...",
        "points": [
          "Point 1",
          "Point 2"
        ]
      }
    ],
    "services": [
      {
        "heading": "DoStartup's Core ESDD Services",
        "offerings": [
          {
            "title": "Site Liability Assessment",
            "description": "Evaluates site-specific responsibilities..."
          },
          {
            "title": "Grievance Redress Mechanism",
            "description": "Establishes community complaint systems..."
          }
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Reasons to Choose DoStartup",
        "stats": [
          "40,000+ legal experts",
          "500+ professionals"
        ],
        "advantages": [
          "AI-powered platform",
          "Global partnerships"
        ]
      }
    ],
    "policySupport": [
      {
        "heading": "Policy Incentives",
        "items": [
          {
            "title": "Tax Benefits",
            "description": "100% profit exemption for 5 years..."
          },
          {
            "title": "Funding",
            "description": "NABARD's ₹2,000-crore special fund..."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "What is environmental due diligence?",
        "answer": "Systematic assessment of environmental risks..."
      },
      {
        "question": "What are the penalties for non-compliance?",
        "answer": "Heavy fines and legal action..."
      }
    ],
    "contact": {
      "text": "Partner with DoStartup",
      "email": "support@dostartup.com",
      "phone": "+91-XXXXXXXXXX"
    }
  },






  //Tobacco Industry

  "environmental-social-due-diligence-tobacco": {
    "title": "Environmental & Social Due Diligence in the Tobacco Industry",
    "description": "Comprehensive ESDD solutions for sustainable tobacco industry operations",
    "overview": [
      {
        "heading": "Tobacco Industry Overview",
        "content": "Environmental and social due diligence in the tobacco sector..."
      }
    ],
    "tobaccoIndustryOverview": [
      {
        "heading": "Overview",
        "content": "DoStartup strives to deliver innovative and effective environmental solutions for projects impacting the environment across various industries...",
        "impacts": {
          "environmental": [
            "Deforestation",
            "Soil nutrient depletion"
          ],
          "social": [
            "Child labor concerns",
            "Public health impacts"
          ]
        }
      }
    ],
    "tobaccoIndustryChallenges": [
      {
        "heading": "Key Challenges",
        "challenges": [
          {
            "title": "Data Deficiency",
            "description": "Significant lack of comprehensive data on environmental and social costs...",
            "severity": "high"
          },
          {
            "title": "Regulatory Exploitation",
            "description": "Companies take advantage of regulatory inconsistencies...",
            "severity": "medium"
          }
        ]
      }
    ],
    "tobaccoIndustryServices": [
      {
        "heading": "Our Services",
        "services": [
          {
            "title": "Transparency and Information Disclosure",
            "description": "Ensuring all relevant documents are accessible...",
            "implementation": [
              "Stakeholder consultations",
              "Public disclosure platforms"
            ]
          }
        ]
      }
    ],
    "tobaccoIndustryRegulations": [
      {
        "heading": "Key Regulations",
        "regulations": [
          {
            "name": "Cigarettes and Other Tobacco Products Act (COTPA), 2003",
            "description": "Regulates advertising and restricts sales to minors...",
            "country": "India"
          }
        ]
      }
    ],
    "tobaccoIndustryFAQ": [
      {
        "question": "What is environmental due diligence in tobacco industry?",
        "answer": "Systematic process of identifying environmental and social risks...",
        "relatedRegulations": [
          "COTPA 2003"
        ]
      }
    ]
  },



  //AeroSpace Industry


  "environmental-social-due-diligence-aerospace": {
    "title": "Environmental & Social Due Diligence in the Aerospace Industry",
    "description": "Comprehensive ESDD solutions for sustainable aerospace industry operations",
    "overview": [
      {
        "heading": "Aerospace Industry ESDD Overview",
        "content": "At Dostartup, we understand the crucial importance of Environmental and Social Due Diligence (ESDD), particularly in high-impact industries such as aerospace. We recognize the many challenges companies face in achieving full compliance with ESDD standards. That's why we offer a wide range of tailored services to support aerospace companies in navigating this complex compliance landscape."
      },
      {
        "heading": "Industry Growth Outlook",
        "content": "The Indian aerospace market is projected to reach USD 70 billion by 2030, with steady growth driven by increased demand for air travel, defense modernization, and infrastructure expansion. Passenger traffic has grown at over 15% per year in the past five years.",
        "sections": [
          {
            "title": "Key Statistics",
            "items": [
              "200 million domestic and international travelers handled",
              "100 million Indians traveling abroad annually"
            ]
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key Challenges in Aerospace ESDD",
        "items": [
          {
            "title": "Environmental Risks",
            "description": "The industry contributes nearly 2% of all human-made CO₂ emissions. Aircraft engines emit carbon dioxide (7-8%), water vapor, nitrogen oxides, and other compounds that may contribute to climate change."
          },
          {
            "title": "Social Challenges",
            "description": "Includes unsafe working conditions, ethical sourcing concerns, fair treatment of workers, and promoting diversity and inclusion."
          },
          {
            "title": "Governance Challenges",
            "description": "High-value contracts make the industry vulnerable to corruption and opaque dealings, requiring transparent governance."
          },
          {
            "title": "Technological Barriers",
            "description": "ESDD requires modern infrastructure and digital tools for data collection, which can be limited by cost or technical expertise."
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "Benefits of Outsourcing ESDD",
        "content": "Managing environmental and social obligations internally can strain resources. Outsourcing provides:",
        "points": [
          "Improved access to investment through enhanced ESG credentials",
          "Enhanced operational efficiency by streamlining compliance",
          "Cost savings through proactive risk mitigation",
          "Assured regulatory compliance with changing laws"
        ]
      }
    ],
    "services": [
      {
        "heading": "Our ESDD Services for Aerospace",
        "offerings": [
          {
            "title": "Risk Identification",
            "description": "Thorough evaluations to uncover environmental and social risks associated with aerospace projects."
          },
          {
            "title": "Risk Management",
            "description": "Developing robust frameworks to reduce probability and impact of identified risks."
          },
          {
            "title": "Vetting Existing Plans",
            "description": "Reviewing current ESDD policies to identify gaps and recommend enhancements."
          },
          {
            "title": "Effective Reporting",
            "description": "Compiling reports that align with legal standards and reporting frameworks."
          }
        ],
        "additionalServices": [
          "Expert Consultation",
          "Documentation Support (EIA, SIA, HR policies)",
          "24/7 Customer Support",
          "Customized Solutions"
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose Dostartup?",
        "stats": [
          "50,000+ legal and technical experts",
          "400+ environmental specialists",
          "10,000+ entrepreneurs served worldwide"
        ],
        "advantages": [
          "AI-driven service delivery system",
          "99.8% client satisfaction rate",
          "Global best practices with sector-specific insights",
          "End-to-end ESDD support"
        ],
        "footerText": "Partner with Dostartup for comprehensive aerospace ESDD solutions."
      }
    ],
    "faq": [
      {
        "question": "What is Environmental and Social Due Diligence (ESDD)?",
        "answer": "A systematic process to evaluate environmental and social impacts of business operations, helping identify risks and liabilities in advance."
      },
      {
        "question": "What are the different types of due diligence?",
        "answer": "Legal, Environmental, Social, Financial, Tax, Regulatory, Operational, and HR Due Diligence."
      },
      {
        "question": "How does CSR differ from ESG?",
        "answer": "CSR is voluntary social accountability while ESG is a measurable framework for sustainability performance evaluation."
      },
      {
        "question": "What are common ESDD challenges in aerospace?",
        "answer": "Resource limitations, complex risk identification, data collection difficulties, and crafting effective mitigation strategies."
      }
    ],
    "contact": {
      "text": "Begin Your ESDD Journey Today",
      "email": "support@dostartup.com",
      "phone": "+91-XXXXXXXXXX"
    }
  },



  //Renewable Energy Industry


  "environmental-social-due-diligence-renewable-energy": {
    "title": "ESDD Compliance in the Renewable Energy Industry",
    "description": "Comprehensive ESDD solutions for sustainable renewable energy operations",
    "overview": [
      {
        "heading": "Renewable Energy ESDD Overview",
        "content": "At DoStartup, we understand the critical importance of conducting Environmental and Social Due Diligence (ESDD) in the renewable energy sector. Our experienced in-house experts guide you through every stage of the process, making compliance easier and more efficient.",
        "sections": [
          {
            "title": "India's Renewable Energy Landscape",
            "items": [
              "4th globally in renewable energy installed capacity",
              "40% of electric capacity target already achieved from renewables",
              "3rd largest market for new solar PV installations"
            ]
          }
        ]
      },
      {
        "heading": "Future Targets",
        "content": "By 2030, India aims for 50% cumulative electric power capacity from non-fossil sources with plans to reach 500 GW of non-fossil fuel energy capacity.",
        "statistics": [
          {
            "year": "2030",
            "target": "500 GW non-fossil capacity"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key Compliance Challenges",
        "items": [
          {
            "title": "Resource Limitations",
            "description": "Financial and manpower constraints hinder thorough ESDD processes."
          },
          {
            "title": "Knowledge Gap",
            "description": "Ever-changing laws and standards require specialized expertise."
          },
          {
            "title": "Data Complexity",
            "description": "Identifying reliable data sources and conducting analysis requires specialized tools."
          },
          {
            "title": "Technological Barriers",
            "description": "Cutting-edge tools are often costly or inaccessible to smaller companies."
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "Outsourcing Advantages",
        "content": "Partnering with DoStartup for ESDD provides:",
        "points": [
          "Full regulatory compliance with India's stringent environmental laws",
          "Enhanced brand reputation through demonstrated sustainability",
          "Greater investor and customer support",
          "Proactive environmental and social risk management",
          "Cost efficiency compared to maintaining in-house teams"
        ]
      }
    ],
    "services": [
      {
        "heading": "Our ESDD Service Package",
        "coreServices": [
          {
            "title": "Risk Identification",
            "description": "Impartial assessments to uncover hidden environmental and social risks."
          },
          {
            "title": "Risk Management",
            "description": "Systems to mitigate identified liabilities efficiently."
          },
          {
            "title": "Strategy Formulation",
            "description": "Robust plans integrating ESDD into core business strategy."
          },
          {
            "title": "Gap Analysis",
            "description": "Review of existing ESDD frameworks to identify improvements."
          }
        ],
        "supportServices": [
          "Expert Guidance with decades of domain experience",
          "Documentation Support for regulatory filings",
          "Customized ESDD Solutions tailored to your business",
          "Proactive Follow-ups and regular updates"
        ]
      }
    ],
    "marketInsights": [
      {
        "heading": "Investment Trends",
        "content": "The government is investing INR 8 lakh crores in green hydrogen, with a goal to replace 25% of grey hydrogen within five years and targeting 75% reduction in solar tariffs.",
        "trendData": [
          {
            "sector": "Green Hydrogen",
            "investment": "INR 8 lakh crores"
          }
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "50,000+ experts including CAs, lawyers, environmentalists",
          "400+ environmental specialists",
          "10,000+ entrepreneurs served worldwide"
        ],
        "advantages": [
          "AI-driven service delivery",
          "99.8% efficiency rate",
          "Complete ESDD services under one roof",
          "Winner of Red Herring's Asia Top 100"
        ]
      }
    ],
    "faq": [
      {
        "question": "What is Environmental and Social Due Diligence (ESDD)?",
        "answer": "A structured process to evaluate environmental and social risks linked to operations, ensuring compliance and improving sustainability.",
        "relatedServices": ["Risk Identification", "Risk Management"]
      },
      {
        "question": "What are the 4 P's of due diligence?",
        "answer": "Perspective, Passion, Purpose, and Progress - all incorporated in our ESDD services."
      },
      {
        "question": "Why is ESDD important in renewable energy?",
        "answer": "Ensures all environmental and social risks are considered for solar, wind, green hydrogen and other clean energy projects.",
        "relatedServices": ["Strategy Formulation", "Gap Analysis"]
      }
    ],
    "contact": {
      "text": "Start Your Renewable Energy ESDD Journey",
      "email": "renewable@dostartup.com",
      "phone": "+91-XXXXXXXXXX"
    }
  },


  // Environmental and Social



  "environmental-social-due-diligence-financial-banking": {
    "title": "ESDD Compliance in Financial & Banking Sector",
    "description": "Comprehensive ESDD solutions for sustainable financial operations",
    "overview": [
      {
        "heading": "Financial Sector ESDD Overview",
        "content": "At DoStartup, we offer tailored consulting services for Environmental and Social Due Diligence (ESDD) in India's financial sector, helping institutions navigate the evolving compliance landscape with global expertise.",
        "sections": [
          {
            "title": "Sector Growth Indicators",
            "items": [
              "31% increase in resource flow to commercial sector (FY23)",
              "Banks contributed 59% of total financial resources",
              "Rapid fintech advancements and digital payment growth"
            ]
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Data Collection & Analysis",
            "description": "Privacy concerns and data fragmentation complicate information gathering.",
            "severity": "high"
          },
          {
            "title": "Environmental Financial Crimes",
            "description": "Money laundering risks tied to illegal mining/logging activities.",
            "severity": "high"
          },
          {
            "title": "Technology Gaps",
            "description": "Outdated systems hinder effective due diligence implementation.",
            "severity": "medium"
          },
          {
            "title": "Resource Constraints",
            "description": "Smaller institutions lack budget for comprehensive ESDD programs.",
            "severity": "medium"
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "Outsourcing Advantages",
        "content": "Partnering with DoStartup delivers:",
        "points": [
          "Proactive risk management for future regulatory changes",
          "Enhanced operational performance through expert support",
          "Continuous regulatory readiness with real-time updates",
          "Cost savings vs. maintaining in-house teams"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Data Analysis & Reporting",
            "description": "Expert interpretation of ESDD performance metrics and actionable reporting."
          },
          {
            "title": "Compliance Documentation",
            "description": "End-to-end management of regulatory paperwork and due diligence records."
          },
          {
            "title": "Regulatory Alignment",
            "description": "Continuous monitoring and implementation of evolving ESDD requirements."
          },
          {
            "title": "Market Benchmarking",
            "description": "Competitive analysis of sustainability practices against industry peers."
          }
        ],
        "supportServices": [
          "Dedicated ESDD Advisory",
          "Real-Time Progress Tracking",
          "Customized Solution Design",
          "One-Stop Compliance Management"
        ]
      }
    ],
    "marketInsights": [
      {
        "heading": "Sector Trends",
        "content": "The financial services industry is undergoing transformation through AI integration and digital identity solutions, while facing new challenges in fraud prevention and regulatory complexity.",
        "trendData": [
          {
            "trend": "AI Adoption",
            "impact": "High"
          },
          {
            "trend": "Digital Payments",
            "impact": "Transformational"
          }
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "50,000+ professional network",
          "400+ environmental specialists",
          "99.7% success rate",
          "10,000+ global clients"
        ],
        "advantages": [
          "AI-powered compliance tools",
          "Pan-India regulatory expertise",
          "End-to-end lifecycle management",
          "90% client retention rate"
        ]
      }
    ],
    "faq": [
      {
        "question": "What is ESDD in banking?",
        "answer": "Evaluation of environmental/social factors in financial operations to ensure sustainable practices.",
        "relatedServices": ["Data Analysis", "Compliance Documentation"]
      },
      {
        "question": "What are banking due diligence types?",
        "answer": "Simplified (SDD), Enhanced (EDD), and Customer Due Diligence (CDD) based on risk profiles.",
        "relatedServices": ["Regulatory Alignment"]
      },
      {
        "question": "How does ESDD affect reputation?",
        "answer": "Demonstrates commitment to sustainability, building investor/customer trust.",
        "relatedServices": ["Market Benchmarking"]
      }
    ],
    "contact": {
      "text": "Start Your Financial ESDD Journey",
      "email": "banking@dostartup.com",
      "phone": "+91-XXXXXXXXXX"
    }
  },




  //Dairy Industry

  "environmental-social-due-diligence-dairy-industry": {
    "title": "Environmental and Social Due Diligence in the Dairy Industry",
    "description": "Comprehensive ESDD solutions for sustainable dairy operations",
    "overview": [
      {
        "heading": "Dairy Industry ESDD Overview",
        "content": "At DoStartup, we provide specialized ESDD consulting for India's dairy sector, helping businesses navigate complex environmental and social compliance requirements.",
        "sections": [
          {
            "title": "Sector Significance",
            "items": [
              "24% of global milk production (222M tonnes)",
              "Supports 70 million Indian households",
              "INR 13 lakh crore domestic market value"
            ]
          }
        ],
        "statistics": [
          {
            "year": "2021-2022",
            "target": "222 million tonnes production"
          },
          {
            "year": "2047",
            "target": "628 million tonnes (projected)"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Complex Supply Chains",
            "description": "Multi-tiered stakeholder network complicates impact assessment",
            "severity": "high"
          },
          {
            "title": "Unorganized Sector",
            "description": "80% informal operations lack compliance infrastructure",
            "severity": "high"
          },
          {
            "title": "Animal Welfare Compliance",
            "description": "Increasing global scrutiny on ethical treatment",
            "severity": "medium"
          },
          {
            "title": "Resource Limitations",
            "description": "Small-scale operators lack assessment capabilities",
            "severity": "medium"
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "Outsourcing Advantages",
        "content": "Partnering with DoStartup delivers:",
        "points": [
          "Premium market access through compliance",
          "40-60% cost savings vs in-house teams",
          "Alignment with global ESG standards",
          "Operational efficiency improvements"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Comprehensive Gap Analysis",
            "description": "Identify disparities between current and targeted performance"
          },
          {
            "title": "Waste Management Solutions",
            "description": "Design advanced strategies for eco-friendly disposal"
          },
          {
            "title": "Licensing & Compliance",
            "description": "End-to-end management of regulatory permits"
          },
          {
            "title": "ESDD Reporting",
            "description": "Stakeholder-ready documentation of compliance"
          }
        ],
        "supportServices": [
          "Animal Welfare Audits",
          "Supply Chain Mapping",
          "Real-time Regulatory Updates",
          "Smallholder Farmer Integration"
        ]
      }
    ],
    "marketInsights": [
      {
        "heading": "Sector Trends",
        "content": "The dairy industry is experiencing rapid transformation with growing demand for premium products and sustainability.",
        "trendData": [
          {
            "trend": "Premium Dairy Products",
            "impact": "High"
          },
          {
            "trend": "Non-Bovine Alternatives",
            "impact": "Medium"
          }
        ],
        "statistics": [
          {
            "year": "2022-23",
            "units": "67,573 million tonnes exported"
          }
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "400+ dairy sector experts",
          "50,000+ professional network",
          "99.9% success rate",
          "10,000+ global clients"
        ],
        "advantages": [
          "AI-powered compliance tracking",
          "Smallholder inclusion programs",
          "End-to-end license management",
          "90% client retention rate"
        ]
      }
    ],
    "faq": [
      {
        "question": "What are environmental impacts of dairy farming?",
        "answer": "3% global GHG emissions, 1.23kg CO₂ per kg milk, land/water degradation",
        "relatedServices": ["Waste Management Solutions"]
      },
      {
        "question": "How does ESDD improve market access?",
        "answer": "Compliance enables entry into premium sustainable markets",
        "relatedServices": ["ESDD Reporting"]
      },
      {
        "question": "What licenses are required?",
        "answer": "FSSAI, BIS, and dairy development program certifications",
        "relatedServices": ["Licensing & Compliance"]
      }
    ],
    "contact": {
      "text": "Start Your Dairy ESDD Journey",
      "email": "dairy@dostartup.com",
      "phone": "9121230280"
    },
    "esddProcess": {
      "heading": "Our ESDD Methodology",
      "steps": [
        {
          "title": "Initial Assessment",
          "duration": "2-4 weeks",
          "description": "Comprehensive audit of current operations and compliance status"
        },
        {
          "title": "Gap Analysis",
          "duration": "3-5 weeks",
          "description": "Identification of compliance gaps and improvement areas"
        }
      ],
      "totalTime": "12-16 weeks for full implementation"
    },
    "regulatoryCompliance": {
      "heading": "Covered Regulations",
      "regulations": [
        {
          "name": "FSSAI Standards",
          "description": "Food safety and quality requirements"
        },
        {
          "name": "BIS Certification",
          "description": "Quality standards for dairy products"
        }
      ]
    }
  },




  //Sugar Industry

  "environmental-social-due-diligence-sugar-industry": {
    "title": "Environmental & Social Due Diligence in the Sugar Industry",
    "description": "Comprehensive ESDD solutions for sustainable sugar operations",
    "overview": [
      {
        "heading": "Sugar Industry ESDD Overview",
        "content": "DoStartup offers cutting-edge Environmental and Social Due Diligence (ESDD) services tailored for the sugar industry.",
        "sections": [
          {
            "title": "Industry Significance",
            "items": [
              "37 million metric tons produced in 2022",
              "Supports 7 million sugarcane farmers",
              "INR 806 billion GVA in 2020"
            ]
          }
        ],
        "statistics": [
          {
            "year": "2022",
            "target": "37 million metric tons production"
          },
          {
            "year": "2020",
            "target": "INR 806 billion GVA"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Regulatory Complexity",
            "description": "Multiple policies like MSPs, quotas, and import duties impact operations",
            "severity": "high"
          },
          {
            "title": "Fragmented Market",
            "description": "Rising production costs due to labor, material, and energy expenses",
            "severity": "high"
          },
          {
            "title": "Climatic Variability",
            "description": "Erratic weather affects cane yields and processing",
            "severity": "medium"
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "Service Benefits",
        "content": "Our ESDD services provide:",
        "points": [
          "Risk identification and mitigation",
          "Regulatory compliance assurance",
          "Operational efficiency improvements",
          "Stakeholder trust building"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Risk Assessment",
            "description": "Identify environmental and social hazards across operations"
          },
          {
            "title": "Gap Analysis & Plan Review",
            "description": "Assess documentation for compliance gaps"
          },
          {
            "title": "Licensing & Permits",
            "description": "Streamline permit acquisition and compliance"
          },
          {
            "title": "Food Safety Audits",
            "description": "Ensure top-tier quality standards"
          }
        ],
        "supportServices": [
          "Expert Guidance & Documentation",
          "Real-Time Dashboard Updates",
          "Waste Management Strategies",
          "Climate Resilience Frameworks"
        ]
      }
    ],
    "marketInsights": [
      {
        "heading": "Industry Trends",
        "content": "The sugar industry faces global pressures from resource strain and climate uncertainty.",
        "trendData": [
          {
            "trend": "Sustainability Expectations",
            "impact": "High"
          },
          {
            "trend": "Regulatory Scrutiny",
            "impact": "High"
          }
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "99.8% success rate",
          "50,000+ specialists",
          "10,000+ satisfied clients"
        ],
        "advantages": [
          "AI-Driven Delivery",
          "End-to-end compliance",
          "Industry-specific strategies",
          "Cost-effective solutions"
        ]
      }
    ],
    "faq": [
      {
        "question": "What are sustainability issues in sugar industry?",
        "answer": "Wastewater, solid waste, and harmful emissions affecting environment",
        "relatedServices": ["Risk Assessment", "Waste Management"]
      },
      {
        "question": "How is ESDD conducted?",
        "answer": "Process includes risk identification, data gathering, mitigation strategies",
        "relatedServices": ["Gap Analysis", "Expert Guidance"]
      }
    ],
    "contact": {
      "text": "Start Your Sugar ESDD Journey",
      "email": "sugar@dostartup.com",
      "phone": "9121230280"
    },
    "esddProcess": {
      "heading": "ESDD Implementation Roadmap",
      "steps": [
        {
          "title": "Initial Risk Assessment",
          "duration": "3-4 weeks",
          "description": "Identify environmental and social hazards"
        },
        {
          "title": "Compliance Gap Analysis",
          "duration": "4-6 weeks",
          "description": "Evaluate current compliance status"
        }
      ],
      "totalTime": "14-18 weeks for full implementation"
    },
    "wasteManagement": {
      "heading": "Waste Byproducts",
      "byproducts": [
        {
          "name": "Bagasse",
          "generationRate": "30% of crushed cane",
          "reuseOptions": ["Biofuel", "Paper production"]
        },
        {
          "name": "Press Mud",
          "generationRate": "3-4% of cane",
          "reuseOptions": ["Fertilizer", "Soil conditioner"]
        }
      ]
    }
  },



  // Iron and Steel  Industry


  "environmental-social-due-diligence-iron-steel": {
    "title": "Environmental & Social Due Diligence in the Iron and Steel Industry",
    "description": "Comprehensive ESDD solutions for sustainable steel production",
    "overview": [
      {
        "heading": "Industry Overview",
        "content": "India ranks as the world's second-largest producer of crude steel with 125.32 million tonnes output in 2023",
        "sections": [
          {
            "title": "Key Statistics",
            "items": [
              "Contributes 6% of global CO₂ emissions",
              "2.55 tonnes CO₂ per tonne of steel (India)",
              "12% of India's total emissions"
            ]
          }
        ],
        "statistics": [
          {
            "year": "2023",
            "target": "125.32 million tonnes production"
          },
          {
            "year": "2024",
            "target": "127 million tonnes (projected)"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Financial Constraints",
            "description": "INR 7,000 crore required per tonne of steel-making capacity",
            "severity": "high",
            "costImplications": ["High capital expenditure", "Expensive compliance teams"]
          },
          {
            "title": "Regulatory Complexity",
            "description": "Frequently changing environmental and labor regulations",
            "severity": "high",
            "complianceAreas": ["Pollution control", "Worker safety", "Emissions"]
          },
          {
            "title": "Data Fragmentation",
            "description": "Lack of integrated systems for ESDD metrics",
            "severity": "medium",
            "dataTypes": ["Emissions data", "Energy consumption", "Waste metrics"]
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "ESDD Implementation Benefits",
        "content": "Adopting ESDD delivers strategic advantages:",
        "points": [
          "Access to green financing opportunities",
          "20-30% long-term operational cost savings",
          "Enhanced brand reputation and customer trust",
          "Future-proofing against regulatory changes"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Risk Assessment",
            "description": "Comprehensive identification of environmental and social hazards"
          },
          {
            "title": "Carbon Footprint Analysis",
            "description": "Detailed measurement and reduction strategies for emissions"
          },
          {
            "title": "Regulatory Compliance",
            "description": "End-to-end management of evolving environmental mandates"
          },
          {
            "title": "ESDD Reporting",
            "description": "Investor-grade sustainability documentation"
          }
        ],
        "supportServices": [
          "AI-powered compliance monitoring",
          "Real-time regulatory updates",
          "Workforce safety programs",
          "Circular economy integration"
        ]
      }
    ],
    "emissionsData": {
      "heading": "Emissions Profile",
      "metrics": [
        {
          "type": "CO₂ Intensity",
          "india": "2.55 t/t steel",
          "global": "1.85 t/t steel"
        },
        {
          "type": "Energy Consumption",
          "india": "20-25 GJ/t",
          "bestPractice": "18 GJ/t"
        }
      ],
      "reductionStrategies": [
        "Alternative fuels adoption",
        "Waste heat recovery",
        "Carbon capture systems"
      ]
    },
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "99.8% compliance success rate",
          "400+ steel sector experts",
          "10,000+ industry clients"
        ],
        "advantages": [
          "Bespoke decarbonization roadmaps",
          "Integrated compliance-technology solutions",
          "Lifecycle assessment expertise",
          "Global benchmarking capabilities"
        ]
      }
    ],
    "faq": [
      {
        "question": "How can steel plants reduce pollution?",
        "answer": "Through cleaner production methods, pollution control equipment, and renewable energy adoption",
        "relatedServices": ["Carbon Footprint Analysis", "Regulatory Compliance"]
      },
      {
        "question": "What are key safety risks in steel plants?",
        "answer": "Mechanical hazards, toxic gas exposure, and high-temperature risks",
        "relatedServices": ["Risk Assessment", "Workforce safety programs"]
      }
    ],
    "contact": {
      "text": "Start Your Steel ESDD Journey",
      "email": "steel@dostartup.com",
      "phone": "+91 21230 280"
    },
    "technologyRoadmap": {
      "heading": "Decarbonization Technologies",
      "phases": [
        {
          "phase": "Short-term (0-5 years)",
          "technologies": ["Energy efficiency upgrades", "Process optimization"]
        },
        {
          "phase": "Medium-term (5-15 years)",
          "technologies": ["Hydrogen-based reduction", "CCUS implementation"]
        }
      ]
    }
  },



  //Agricultural Equipment Manufacturing Industry



  "environmental-social-due-diligence-agri-equipment": {
    "title": "Environmental & Social Due Diligence in Agricultural Equipment Manufacturing",
    "description": "Comprehensive ESDD solutions for sustainable farm machinery production",
    "overview": [
      {
        "heading": "Industry Overview",
        "content": "India is a global leader in agricultural machinery manufacturing with diverse production units ranging from village artisans to large-scale enterprises",
        "sections": [
          {
            "title": "Key Statistics",
            "items": [
              "Global market reached USD 155.68 billion in 2021",
              "Projected 5% CAGR through 2030",
              "50-80% subsidies available under SMAM scheme"
            ]
          }
        ],
        "statistics": [
          {
            "year": "2021",
            "target": "$155.68 billion market size"
          },
          {
            "year": "2030",
            "target": "5% CAGR projected"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Resource Constraints",
            "description": "Small enterprises lack skilled personnel and financial bandwidth for comprehensive ESDD",
            "severity": "high",
            "costImplications": ["High assessment costs", "Training requirements"]
          },
          {
            "title": "Standardization Issues",
            "description": "Lack of uniform machinery standards across diverse production units",
            "severity": "medium",
            "complianceAreas": ["BIS certification", "Safety standards", "Emissions"]
          },
          {
            "title": "Technology Gaps",
            "description": "Limited R&D capabilities among small-scale manufacturers",
            "severity": "high",
            "dataTypes": ["Emission metrics", "Safety records", "Supply chain data"]
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "ESDD Implementation Benefits",
        "content": "Adopting ESDD delivers strategic advantages:",
        "points": [
          "Increased productivity & efficiency through smart machinery",
          "20-30% operational cost savings long-term",
          "Enhanced precision in agricultural operations",
          "Improved compliance with Bharat Stage 6 norms"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Environmental & Social Assessments",
            "description": "Comprehensive evaluation of manufacturing impacts"
          },
          {
            "title": "Equipment Standardization",
            "description": "Alignment with BIS and international safety standards"
          },
          {
            "title": "Pesticide Use Management",
            "description": "Reducing environmental contamination risks"
          },
          {
            "title": "ESG Integration",
            "description": "Sustainable manufacturing framework development"
          }
        ],
        "supportServices": [
          "AI-powered compliance monitoring",
          "Custom hiring center setup",
          "Worker safety programs",
          "SMAM scheme documentation"
        ]
      }
    ],
    "complianceData": {
      "heading": "Regulatory Profile",
      "metrics": [
        {
          "type": "Mandatory Certification",
          "products": "Chaff cutters, threshers, crushers",
          "standard": "BIS norms"
        },
        {
          "type": "Subsidy Compliance",
          "scheme": "SMAM",
          "coverage": "50-80% equipment cost"
        }
      ],
      "improvementStrategies": [
        "ISI certification assistance",
        "Testing center partnerships",
        "Safety standard implementation"
      ]
    },
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "99.8% customer recommendation rate",
          "500+ industry experts",
          "20,000+ entrepreneurs served"
        ],
        "advantages": [
          "Bespoke mechanization strategies",
          "Agro-ecological specific solutions",
          "End-to-end certification support",
          "Global benchmarking capabilities"
        ]
      }
    ],
    "faq": [
      {
        "question": "What equipment requires mandatory certification?",
        "answer": "Chaff cutters, threshers and crushers require BIS certification due to safety risks",
        "relatedServices": ["Equipment Standardization", "ESG Integration"]
      },
      {
        "question": "How does ESDD improve farm productivity?",
        "answer": "Through precision equipment, reduced pesticide use and optimized operations",
        "relatedServices": ["Environmental & Social Assessments", "Pesticide Use Management"]
      }
    ],
    "contact": {
      "text": "Start Your Agri-Equipment ESDD Journey",
      "email": "agri@dostartup.com",
      "phone": "+91 21230 280"
    },
    "technologyRoadmap": {
      "heading": "Sustainable Mechanization Technologies",
      "phases": [
        {
          "phase": "Immediate (0-2 years)",
          "technologies": ["Emissions control systems", "Safety standard implementation"]
        },
        {
          "phase": "Medium-term (2-5 years)",
          "technologies": ["Precision agriculture tools", "Automated quality testing"]
        }
      ]
    }
  },




  //Solar Power Sector

  "environmental-social-due-diligence-solar": {
    "title": "Environmental & Social Due Diligence in Solar Power Sector",
    "description": "Comprehensive ESDD solutions for sustainable solar energy projects",
    "overview": [
      {
        "heading": "Industry Overview",
        "content": "India ranks 4th in global renewable capacity with transformative solar adoption in rural and urban areas",
        "sections": [
          {
            "title": "Key Impacts",
            "items": [
              "Reduced respiratory and ocular health risks",
              "Boosted rural employment",
              "Improved economic standards"
            ]
          }
        ],
        "statistics": [
          {
            "year": "2023",
            "target": "72 GW installed solar capacity"
          },
          {
            "year": "2025",
            "target": "100 GW planned capacity"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Land Use Conflicts",
            "description": "Solar plants require large tracts of land potentially causing deforestation and displacement",
            "severity": "high",
            "impactAreas": ["Community relations", "Biodiversity loss", "Soil erosion"]
          },
          {
            "title": "Regulatory Complexity",
            "description": "Evolving MNRE policies and international standards require constant monitoring",
            "severity": "high",
            "complianceAreas": ["ISTS charges", "Green Energy Open Access Rules", "FDI norms"]
          },
          {
            "title": "Waste Management",
            "description": "Improper disposal of solar panel chemicals and end-of-life modules",
            "severity": "medium",
            "dataTypes": ["Toxic material tracking", "Recycling rates", "Hazardous waste"]
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "ESDD Implementation Benefits",
        "content": "Strategic advantages for solar projects:",
        "points": [
          "100% FDI eligibility under automatic route",
          "Waived ISTS charges until 2025",
          "Enhanced community acceptance",
          "Priority in Green Term Ahead Market"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Site Assessment",
            "description": "Comprehensive evaluation of land use and environmental sensitivities"
          },
          {
            "title": "Community Engagement",
            "description": "Structured stakeholder consultations and grievance mechanisms"
          },
          {
            "title": "Regulatory Compliance",
            "description": "End-to-end management of MNRE and international standards"
          },
          {
            "title": "Lifecycle Analysis",
            "description": "From panel production to decommissioning impact assessment"
          }
        ],
        "supportServices": [
          "AI-powered yield assessments",
          "Construction oversight",
          "Post-completion verifications",
          "GTAM participation support"
        ]
      }
    ],
    "policySupport": [
      {
        "heading": "Government Initiatives",
        "items": [
          {
            "title": "Financial Incentives",
            "description": "100% FDI allowance and ISTS charge waivers till June 2025"
          },
          {
            "title": "Market Mechanisms",
            "description": "Green Term Ahead Market (GTAM) for renewable energy trading"
          },
          {
            "title": "Regulatory Framework",
            "description": "Standardized PV systems and Project Development Cell support"
          }
        ]
      }
    ],
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "98% client recommendation rate",
          "500+ solar sector experts",
          "20,000+ MSME clients"
        ],
        "advantages": [
          "End-to-end documentation support",
          "Technology validation services",
          "Community engagement frameworks",
          "Global compliance benchmarking"
        ]
      }
    ],
    "faq": [
      {
        "question": "What land types are preferred for solar projects?",
        "answer": "Degraded land or brownfield sites minimize environmental impact",
        "relatedServices": ["Site Assessment", "Lifecycle Analysis"]
      },
      {
        "question": "How are local communities engaged in solar projects?",
        "answer": "Through structured consultations and shared economic benefits",
        "relatedServices": ["Community Engagement", "Regulatory Compliance"]
      }
    ],
    "contact": {
      "text": "Start Your Solar ESDD Journey",
      "email": "solar@dostartup.com",
      "phone": "+91 91212 30280"
    },
    "technologyRoadmap": {
      "heading": "Solar Innovation Pathways",
      "phases": [
        {
          "phase": "Immediate (0-2 years)",
          "technologies": ["Bifacial panels", "Advanced tracking systems"]
        },
        {
          "phase": "Medium-term (2-5 years)",
          "technologies": ["PV recycling plants", "Agrivoltaic systems"]
        }
      ]
    }
  },


  //Furniture and Fixtures Industry


  "environmental-social-due-diligence-furniture": {
    "title": "Environmental & Social Due Diligence in Furniture and Fixtures Industry",
    "description": "Comprehensive ESDD solutions for sustainable furniture manufacturing",
    "overview": [
      {
        "heading": "Industry Overview",
        "content": "The global furniture market was valued at USD 531.5 billion in 2019 with 5.1% CAGR projected through 2025",
        "sections": [
          {
            "title": "Key Statistics",
            "items": [
              "India's market growing at 10.9% CAGR (2023-2028)",
              "Asia-Pacific to cross USD 90 billion by 2025",
              "BIS standards introduced in 2022"
            ]
          }
        ],
        "statistics": [
          {
            "year": "2026",
            "target": "USD 32.7 billion (India)"
          },
          {
            "year": "2025",
            "target": "5.1% global CAGR"
          }
        ]
      }
    ],
    "challenges": [
      {
        "heading": "Key ESDD Challenges",
        "items": [
          {
            "title": "Resource Allocation",
            "description": "Operational complexity leads to duplicated tasks and data mismanagement",
            "severity": "high",
            "impactAreas": ["Time constraints", "Data accuracy", "Deadline pressures"]
          },
          {
            "title": "Production Costs",
            "description": "ESDD implementation adds to already high manufacturing expenses",
            "severity": "high",
            "costImplications": ["Compliance teams", "New protocols", "Training"]
          },
          {
            "title": "Technical Infrastructure",
            "description": "Outdated technology limits digital ESG solution adoption",
            "severity": "medium",
            "dataTypes": ["Emissions tracking", "Supply chain monitoring", "Energy usage"]
          }
        ]
      }
    ],
    "benefits": [
      {
        "heading": "ESDD Implementation Benefits",
        "content": "Strategic advantages for furniture businesses:",
        "points": [
          "Enhanced stakeholder engagement and trust",
          "Full regulatory compliance assurance",
          "Stronger brand reputation and market differentiation",
          "Optimized resource efficiency"
        ]
      }
    ],
    "services": [
      {
        "heading": "Core ESDD Services",
        "offerings": [
          {
            "title": "Risk Identification",
            "description": "Comprehensive assessment of environmental and social risks"
          },
          {
            "title": "ESMS Implementation",
            "description": "Environmental and Social Management System development"
          },
          {
            "title": "Regulatory Compliance",
            "description": "Alignment with ISO 14001, OHSAS 18001 and ILO-OSH standards"
          },
          {
            "title": "Social Impact Assessment",
            "description": "Occupational health and safety evaluations and improvements"
          }
        ],
        "supportServices": [
          "Chemical handling protocols",
          "Waste management systems",
          "Energy efficiency planning",
          "Supply chain audits"
        ]
      }
    ],
    "sustainabilityData": {
      "heading": "Sustainable Practices",
      "metrics": [
        {
          "type": "Material Sourcing",
          "bestPractice": "FSC-certified wood",
          "alternative": "Bamboo/recycled materials"
        },
        {
          "type": "Carbon Storage",
          "benefit": "1 ton CO₂ per m³ wood",
          "lifespan": "20+ years"
        }
      ],
      "improvementStrategies": [
        "Durable product design",
        "Closed-loop manufacturing",
        "Non-toxic finishes",
        "Worker safety programs"
      ]
    },
    "whyUs": [
      {
        "heading": "Why Choose DoStartup?",
        "stats": [
          "98% client recommendation rate",
          "500+ furniture sector experts",
          "20,000+ manufacturing clients"
        ],
        "advantages": [
          "ANSI/BIFMA e3 standard expertise",
          "Lifecycle assessment capabilities",
          "Customized compliance roadmaps",
          "Real-time monitoring solutions"
        ]
      }
    ],
    "faq": [
      {
        "question": "What sustainability standard applies to furniture?",
        "answer": "ANSI/BIFMA e3 Furniture Sustainability Standard",
        "relatedServices": ["ESMS Implementation", "Regulatory Compliance"]
      },
      {
        "question": "How to make furniture eco-friendly?",
        "answer": "Use renewable materials like bamboo and recycled inputs with non-toxic finishes",
        "relatedServices": ["Risk Identification", "Sustainability Planning"]
      }
    ],
    "contact": {
      "text": "Start Your Furniture ESDD Journey",
      "email": "furniture@dostartup.com",
      "phone": "+91 91212 30280"
    },
    "technologyRoadmap": {
      "heading": "Sustainable Manufacturing Pathways",
      "phases": [
        {
          "phase": "Immediate (0-2 years)",
          "technologies": ["Digital twin prototyping", "Low-VOC finishes"]
        },
        {
          "phase": "Medium-term (2-5 years)",
          "technologies": ["Blockchain material tracking", "3D printed components"]
        }
      ]
    }
  },






};
