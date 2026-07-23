/** @format */

export const dynamic = "force-dynamic";

import { AnesthesiaContainer } from "@/components/services/anesthesiaContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("anesthesiaPage");
  return getMetadata(data, "/services/anesthesia");
}

const AnesthesiaPage = async () => {
  const data = await getPageData("anesthesiaPage");
  console.log("data", data);
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Anesthesia",
    data?.metaData?.metaDescription ||
      "Safe and monitored anesthesia services for your pets at Walnut Grove Animal Hospital.",
    "services/anesthesia",
  );
  return (
    <>
      <JsonLd data={schema} />
      <AnesthesiaContainer faqs={data?.faqs} />
    </>
  );
};

export default AnesthesiaPage;
