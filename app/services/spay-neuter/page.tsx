/** @format */

export const dynamic = "force-dynamic";

import { SpayNeuterContainer } from "@/components/services/spayNeuterContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("spayNeuterPage");
  return getMetadata(data, "/services/spay-neuter");
}

const SpayNeuterPage = async () => {
  const data = await getPageData("spayNeuterPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Spay & Neuter Services",
    data?.metaData?.metaDescription ||
      "Safe and professional spaying and neutering services for dogs and cats in Langley.",
    "services/spay-neuter",
  );
  return (
    <>
      <JsonLd data={schema} />
      <SpayNeuterContainer faqs={data?.faqs} />
    </>
  );
};

export default SpayNeuterPage;
