
// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import dynamic from "next/dynamic";
// import { pageContent, PageContentType } from "@/utils/pageContentDataPrimary";

// const TalkToExpert = dynamic(() => import("../../components/Page2/TalkToExpert"));
// const LogoSlider = dynamic(() => import("../../components/Page2/LogoSlider"));
// const Overview = dynamic(() => import("../../components/Page2/Overview"));
// const Hero = dynamic(() => import("../../components/Page2/hero"));

// const Page2: React.FC = () => {
//   const params = useParams();
//   const slug = params.slug as string;

  

  

//   const currentPage = pageContent[slug];

//   if (!currentPage) {
//     return <p>Page not found</p>;
//   }

//   return (
//     <div>
//       <Hero title={currentPage.title} description={currentPage.description} />
//       <LogoSlider />
//       <TalkToExpert />
//       <Overview
//   overview={currentPage.overview}
//   benefits={currentPage.benefits}
//   documentsRequired={currentPage.documentsRequired}
//   registrationProcedure={currentPage.registrationProcedure}
//   feesStructure={currentPage.feesStructure}
//   registrationTimeline={currentPage.registrationTimeline}
//   whyUs={currentPage.whyUs}
//   faq={currentPage.faq}
// />
//     </div>
//   );
// };

// export default Page2;
// import React from "react";
// import dynamic from "next/dynamic";
// import { pageContent, PageContentType } from "@/utils/pageContentDataPrimary";

// const Hero = dynamic(() => import("@/components/Page2/hero"));
// const LogoSlider = dynamic(() => import("@/components/Page2/LogoSlider"));
// const TalkToExpert = dynamic(() => import("@/components/Page2/TalkToExpert"));
// const Overview = dynamic(() => import("@/components/Page2/Overview"));

// interface PageProps {
//   params: { slug: string }
// }

// export default async function Page2({ params }: PageProps) {
//   const { slug } = await params;
//   const currentPage = pageContent[slug] as PageContentType | undefined;

//   if (!currentPage) {
//     return <p>Page not found</p>;
//   }

//   return (
//     <div>
//       <Hero title={currentPage.title} description={currentPage.description} />
//       <LogoSlider />
//       <TalkToExpert />
//       <Overview
//         overview={currentPage.overview}
//         benefits={currentPage.benefits}
//         documentsRequired={currentPage.documentsRequired}
//         registrationProcedure={currentPage.registrationProcedure}
//         feesStructure={currentPage.feesStructure}
//         registrationTimeline={currentPage.registrationTimeline}
//         whyUs={currentPage.whyUs}
//         faq={currentPage.faq}
//       />
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   return Object.keys(pageContent).map((slug) => ({ slug }));
// }

// app/[slug]/page.tsx
"use client"; // Required since we're using hooks

import React from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { pageContent, PageContentType } from "@/utils/pageContentDataPrimary";

// Dynamic imports with loading states
const Hero = dynamic(() => import("@/components/Page2/hero"), {
  loading: () => <p>Loading Hero...</p>,
});
const LogoSlider = dynamic(() => import("@/components/Page2/LogoSlider"), {
  loading: () => <p>Loading Logos...</p>,
});
const TalkToExpert = dynamic(() => import("@/components/Page2/TalkToExpert"), {
  loading: () => <p>Loading Expert Section...</p>,
});
const Overview = dynamic(() => import("@/components/Page2/Overview"), {
  loading: () => <p>Loading Overview...</p>,
});

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;
  const currentPage = pageContent[slug] as PageContentType | undefined;

  if (!currentPage) {
    return <div className="p-8 text-center">Page not found</div>;
  }

  return (
    <div>
      <Hero title={currentPage.title} description={currentPage.description} />
      <LogoSlider />
      <TalkToExpert />
      <Overview
        overview={currentPage.overview}
        benefits={currentPage.benefits}
        documentsRequired={currentPage.documentsRequired}
        registrationProcedure={currentPage.registrationProcedure}
        feesStructure={currentPage.feesStructure}
        registrationTimeline={currentPage.registrationTimeline}
        whyUs={currentPage.whyUs}
        faq={currentPage.faq}
      />
    </div>
  );
}