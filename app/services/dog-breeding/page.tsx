/** @format */

export const dynamic = "force-dynamic";

import { DogBreedingContainer } from "@/components/services/dogBreedingContainer";
import { getMetadata, getPageData } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getServiceSchema } from "@/utils/schemaBuilder";

export async function generateMetadata() {
  const data = await getPageData("dogBreedingPage");
  return getMetadata(data, "/services/dog-breeding");
}

const DogBreedingPage = async () => {
  const data = await getPageData("dogBreedingPage");
  const schema = getServiceSchema(
    data?.metaData?.metaTitle || "Responsible Dog Breeding Services",
    data?.metaData?.metaDescription ||
      "Expert guidance and medical support for responsible dog breeding and neonatal care.",
    "services/dog-breeding",
  );
  return (
    <>
      <JsonLd data={schema} />
      <DogBreedingContainer faqs={data?.faqs} />
    </>
  );
};

export default DogBreedingPage;
