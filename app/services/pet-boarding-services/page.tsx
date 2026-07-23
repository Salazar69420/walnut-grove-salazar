/** @format */

export const dynamic = "force-dynamic";

import { BoardingContainer } from "@/components/services/boardingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("petBoardingPage");
  return getMetadata(data, "/services/pet-boarding-services");
}

const BoardingPage = async () => {
  const data = await getPageData("petBoardingPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Boarding Services",
    data?.metaData?.metaDescription ||
      "Safe, comfortable, and medical boarding services for your cats and dogs in Langley.",
    "services/pet-boarding-services",
  );
  return (
    <>
      <JsonLd data={schema} />
      <BoardingContainer faqs={data?.faqs} />
    </>
  );
};

export default BoardingPage;
