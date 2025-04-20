import { div } from "framer-motion/client";
const steps = [
    {
      title: 'Visit the GST Portal',
      desc: 'Start by visiting the official GST portal. Enter essential details such as your legal business name, PAN, email address, mobile number, district, and state.',
    },
    {
      title: 'Authenticate via OTP',
      desc: 'After submitting your details, you will receive a One-Time Password (OTP) on your registered mobile number and email ID. Verify the OTP to proceed.',
    },
    {
      title: 'TRN Generated',
      desc: 'Upon OTP verification, a Temporary Reference Number (TRN) will be generated and sent to your registered email.',
    },
    {
      title: 'Submit Business Details for Verification',
      desc: 'The next step involves entering additional details, such as the information about promoters/partners, place of business, business operations, authorized signatory, and Aadhar authentication.',
    },
    {
      title: 'Receive ARN Confirmation',
      desc: (
        <>
          Once the form is completed and submitted, an 
          <strong>
          Application Reference Number (ARN) 
          </strong>
          will be generated and sent to your registered mobile number via SMS.
        </>
      ),
    },
];

const violations = [
    "If a taxpayer underpays or fails to pay the tax due to an oversight, a penalty of 10% of the unpaid tax amount is imposed.",
    "In cases where a taxpayer intentionally evades tax payments, a penalty equal to 100% of the evaded tax amount will be charged.",
    "It's crucial to pay taxes within the prescribed deadlines. Failing to do so results in a minimum penalty of INR 10,000.",
    "Interest will be levied on any unpaid GST liabilities, adding to the amount due.",
    "In extreme cases of non-compliance, your GST registration certificate may be suspended or cancelled."
];

const consequences = [
    "As per Section 122 of the CGST Act, a penalty of ₹10,000 or the tax amount evaded, whichever is higher, will be imposed on those who fail to register for GST when liable to do so.",
    "In certain cases, the penalty for non-registration can go up to ₹2 lakhs, depending on the nature and severity of the default.",
    "Non-registration can also lead to legal consequences, interest on unpaid tax, and affect the credibility of your business."
];


export default function Documents(){
    return(
        <div>
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8" id="documents">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How to Apply for GST Registration Online?</h2>
                    <p className="text-center text-gray-600 mb-10">
                    The GST registration process has been streamlined for simplicity and ease. Here’s a step-by-step guide on how to apply for GST registration online-
                    </p>

                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Left Image */}
                        <div className="flex-1">
                        <img
                            src="https://corpbiz.io/img/steps_img.webp"
                            alt="Form Fill"
                            className="rounded-xl w-full object-cover shadow-lg"
                        />
                        </div>

                        {/* Right Steps */}
                        <div className="flex-1 space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="border-b pb-4">
                                    <div className="flex gap-4">
                                        <div className="font-semibold text-blue-600 italic min-w-[40px]">
                                            {index + 1}.
                                        </div>
                                    <div>
                                    <h3 className="font-semibold italic text-gray-800">{step.title}</h3>
                                    <p className="text-gray-600 mt-1">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            
            
            <section className="bg-white py-12 px-4 md:px-8">
              <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                GST registration is mandatory for certain businesses, and failure to comply with the legal requirements can result in significant penalties. Below are the consequences of not obtaining GST registration or violating GST norms-
                </h2>
                <p className="text-gray-600">
                  It is mandatory for certain businesses to obtain GST registration. Violating the regulatory and legal GST norms attract the following penalties:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Card */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                Penalty for Underpayment or Non-Payment of Tax
                </h3>
                <ul className="space-y-3">
                  {violations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✔️</span>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Card */}
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4">
                Consequences of Not Registering Under GST
                </h3>
                <p className="p-3">Failure to register under GST, when required, can lead to strict penalties under the CGST Act. Below are the implications of non-registration:</p>
                <ul className="space-y-3">
                  {consequences.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">✔️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </section>
        </div>
    )
}