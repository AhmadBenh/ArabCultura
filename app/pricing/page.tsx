import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
//   description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}

      <Pricing />
    </>
  );
};

export default PricingPage;
