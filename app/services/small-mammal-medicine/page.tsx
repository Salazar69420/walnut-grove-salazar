/** @format */

export const dynamic = "force-dynamic";

import { SmallMammalContainer } from "@/components/services/smallMammalContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("smallMammalPage");
  return getMetadata(data, "/services/small-mammal-medicine");
}

const SmallMammalPage = async () => {
  const data = await getPageData("smallMammalPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Small Mammal Medicine",
    data?.metaData?.metaDescription ||
      "Expert medical care for rabbits, guinea pigs, hamsters, and other small pocket pets.",
    "services/small-mammal-medicine",
  );
  return (
    <>
      <JsonLd data={schema} />
      <SmallMammalContainer faqs={data?.faqs} />
    </>
  );
};

export default SmallMammalPage;
