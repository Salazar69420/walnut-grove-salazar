/** @format */

export const dynamic = "force-dynamic";

import { DentalContainer } from "@/components/services/dentalContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("dentalPage");
  return getMetadata(data, "/services/dental-services");
}

const DentalPage = async () => {
  const data = await getPageData("dentalPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Dental Services",
    data?.metaData?.metaDescription ||
      "Professional dental cleaning, extractions, and oral health care for dogs and cats.",
    "services/dental-services",
  );
  return (
    <>
      <JsonLd data={schema} />
      <DentalContainer faqs={data?.faqs} />
    </>
  );
};

export default DentalPage;
