/** @format */

export const dynamic = "force-dynamic";

import { ParasitePreventionContainer } from "@/components/services/parasitePreventionContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("parasitePreventionPage");
  return getMetadata(data, "/services/parasite-prevention");
}

const ParasitePreventionPage = async () => {
  const data = await getPageData("parasitePreventionPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Parasite Prevention",
    data?.metaData?.metaDescription ||
      "Protect your pets from fleas, ticks, worms, and other parasites with our prevention programs.",
    "services/parasite-prevention",
  );
  return (
    <>
      <JsonLd data={schema} />
      <ParasitePreventionContainer faqs={data?.faqs} />
    </>
  );
};

export default ParasitePreventionPage;
