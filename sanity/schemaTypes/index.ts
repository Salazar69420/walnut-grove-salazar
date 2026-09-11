/** @format */

import { type SchemaTypeDefinition } from "sanity";
import { homepage } from "./homepage";
import { servicesPage } from "./servicesPage";
import { aboutPage } from "./aboutPage";
import { faqPage } from "./faqPage";
import { contactSubmission } from "./contactSubmission";
import {
  anesthesiaPage,
  bloodworkPage,
  chronicPainPage,
  dentalPage,
  dogBreedingPage,
  laboratoryPage,
  microchippingPage,
  contactPage,
  euthanasiaPage,
  howToVideosPage,
  parasitePreventionPage,
  petBoardingPage,
  petSurgeryPage,
  petXRayPage,
  petFoodRecallsPage,
  poisonousPlantsPage,
  preventativeCarePage,
  privacyPolicyPage,
  puppyKittenPage,
  skinEarPage,
  smallMammalPage,
  softTissuePage,
  spayNeuterPage,
  termsPage,
  ultrasoundPage,
  vaccinesPage,
} from "./subServicePages";
import { popupNotification } from "./popupNotification";
import { blog } from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    servicesPage,
    aboutPage,
    faqPage,
    blog,
    popupNotification,
    contactSubmission,
    anesthesiaPage,
    bloodworkPage,
    chronicPainPage,
    dentalPage,
    dogBreedingPage,
    laboratoryPage,
    microchippingPage,
    parasitePreventionPage,
    petBoardingPage,
    petSurgeryPage,
    petXRayPage,
    petFoodRecallsPage,
    poisonousPlantsPage,
    preventativeCarePage,
    privacyPolicyPage,
    puppyKittenPage,
    skinEarPage,
    smallMammalPage,
    softTissuePage,
    spayNeuterPage,
    termsPage,
    ultrasoundPage,
    vaccinesPage,
    contactPage,
    howToVideosPage,
    euthanasiaPage,
  ],
};
