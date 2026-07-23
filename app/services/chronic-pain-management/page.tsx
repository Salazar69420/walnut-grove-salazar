/** @format */

export const dynamic = "force-dynamic";

import { ChronicPainContainer } from "@/components/services/chronicPainContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("chronicPainPage");
  return getMetadata(data, "/services/chronic-pain-management");
}

const ChronicPainPage = async () => {
  const data = await getPageData("chronicPainPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Chronic Pain Management",
    data?.metaData?.metaDescription ||
      "Compassionate chronic pain management and therapy for aging or injured pets.",
    "services/chronic-pain-management",
  );
  return (
    <>
      <JsonLd data={schema} />
      <ChronicPainContainer faqs={data?.faqs} />
    </>
  );
};

export default ChronicPainPage;
