const components = [
    {
      icon: "🏢",
      title: "Central Goods and Services Tax (CGST)",
      description:
        "CGST is levied by the Central Government on the intra-state supply of goods and services. The revenue collected goes directly to the central authority.",
    },
    {
      icon: "🏛️",
      title: "State Goods and Services Tax (SGST)",
      description:
        "SGST is imposed by the State Government on the same intra-state transactions. The tax revenue is collected by the state where the goods or services are consumed.",
    },
    {
      icon: "🌐",
      title: "Integrated Goods and Services Tax (IGST)",
      description:
        "IGST is applicable on inter-state transactions, including trade between states and union territories. It is collected by the Central Government and later distributed between the centre and the states.",
    },
  ];

export default function Features(){
    return (
    <section className="bg-white py-12 px-4 md:px-8" id="features">
              <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Key Components of GST Registration in India 
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                The Goods and Services Tax (GST) system in India is structured around three major components, each serving a distinct purpose in the tax framework:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {components.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-6 text-left hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                  
              </div>
    </section>
    );
}