/** @format */

export const dynamic = "force-dynamic";

import { PreventativeContainer } from "@/components/services/preventativeContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("preventativePage");
  return getMetadata(data, "/services/preventative-care");
}

const PreventativePage = async () => {
  const data = await getPageData("preventativePage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Preventative Care",
    data?.metaData?.metaDescription ||
      "Proactive wellness exams and preventative care to keep your pets healthy and happy.",
    "services/preventative-care",
  );
  return (
    <>
      <JsonLd data={schema} />
      <PreventativeContainer faqs={data?.faqs} />
    </>
  );
};

export default PreventativePage;
