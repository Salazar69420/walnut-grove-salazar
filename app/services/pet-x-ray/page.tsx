/** @format */

export const dynamic = "force-dynamic";

import { PetXRayContainer } from "@/components/services/petXRayContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("petXRayPage");
  return getMetadata(data, "/services/pet-x-ray");
}

const PetXRayPage = async () => {
  const data = await getPageData("petXRayPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Pet X-Ray & Imaging",
    data?.metaData?.metaDescription ||
      "Advanced digital X-ray services for precise diagnostics and pet health monitoring.",
    "services/pet-x-ray",
  );
  return (
    <>
      <JsonLd data={schema} />
      <PetXRayContainer faqs={data?.faqs} />
    </>
  );
};

export default PetXRayPage;
