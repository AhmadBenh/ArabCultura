import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Sobre nosotros"
        description="Nuestra misión es poder aportar luz y verdad a la cultura árabe. Tantos años de historia por contar, tantos avances, tantas recetas..."
      /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
