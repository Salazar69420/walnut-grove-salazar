/** @format */

export const dynamic = "force-dynamic";

import { MicrochippingContainer } from "@/components/services/microchippingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("microchippingPage");
  return getMetadata(data, "/services/microchipping");
}

const MicrochippingPage = async () => {
  const data = await getPageData("microchippingPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Microchipping",
    data?.metaData?.metaDescription ||
      "Permanent identification services for your pets to ensure they can always find their way home.",
    "services/microchipping",
  );
  return (
    <>
      <JsonLd data={schema} />
      <MicrochippingContainer faqs={data?.faqs} />
    </>
  );
};

export default MicrochippingPage;
