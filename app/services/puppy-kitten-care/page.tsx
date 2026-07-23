/** @format */

export const dynamic = "force-dynamic";

import { PuppyKittenContainer } from "@/components/services/puppyKittenContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("puppyKittenPage");
  return getMetadata(data, "/services/puppy-kitten-care");
}

const PuppyKittenPage = async () => {
  const data = await getPageData("puppyKittenPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Puppy & Kitten Care",
    data?.metaData?.metaDescription ||
      "Comprehensive pediatric care for the newest members of your furry family.",
    "services/puppy-kitten-care",
  );
  return (
    <>
      <JsonLd data={schema} />
      <PuppyKittenContainer faqs={data?.faqs} />
    </>
  );
};

export default PuppyKittenPage;
