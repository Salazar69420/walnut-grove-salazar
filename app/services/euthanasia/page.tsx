/** @format */

export const dynamic = "force-dynamic";

import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";
import { EuthanasiaContainer } from "@/components/services/euthanasiaContainer";

export async function generateMetadata() {
  const data = await getPageData("euthanasiaPage");
  return getMetadata(data, "/services/euthanasia");
}

const EuthanasiaPage = async () => {
  const data = await getPageData("euthanasiaPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Compassionate Pet Euthanasia & End-of-Life Care",
    data?.metaData?.metaDescription ||
    "Supportive, gentle, and compassionate end-of-life care and pet euthanasia services in Langley, BC.",
    "services/euthanasia",
  );
  return (
    <>
      <JsonLd data={schema} />
      <EuthanasiaContainer faqs={data?.faqs} />
    </>
  );
};

export default EuthanasiaPage;
