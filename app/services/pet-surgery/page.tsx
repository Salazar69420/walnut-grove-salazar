/** @format */

export const dynamic = "force-dynamic";

import { PetSurgeryContainer } from "@/components/services/petSurgeryContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("petSurgeryPage");
  return getMetadata(data, "/services/pet-surgery");
}

const PetSurgeryPage = async () => {
  const data = await getPageData("petSurgeryPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet Surgery",
    data?.metaData?.metaDescription ||
      "Expert surgical care for pets, from routine procedures to complex soft tissue surgeries.",
    "services/pet-surgery",
  );
  return (
    <>
      <JsonLd data={schema} />
      <PetSurgeryContainer faqs={data?.faqs} />
    </>
  );
};

export default PetSurgeryPage;
