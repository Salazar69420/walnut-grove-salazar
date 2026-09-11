import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/pet-library.pml", destination: "/resources/how-to-videos", permanent: true },
      { source: "/contact-us.pml", destination: "/contact", permanent: true },
      { source: "/links.pml", destination: "/resources/how-to-videos#important-links", permanent: true },
      { source: "/virtual-office-tour.pml", destination: "/", permanent: true },
      { source: "/pet-food-recalls.pml", destination: "/resources/pet-food-recalls", permanent: true },
      { source: "/meet-our-team.pml", destination: "/about#team", permanent: true },
      { source: "/screenings.pml", destination: "/services", permanent: true },
      { source: "/request-appointment.pml", destination: "/", permanent: true },
      { source: "/poisonous-plants.pml", destination: "/resources/poisonous-plants", permanent: true },
      { source: "/dentistry.pml", destination: "/services/dental-services", permanent: true },
      { source: "/forms.pml", destination: "/contact", permanent: true },
      { source: "/payment.pml", destination: "/", permanent: true },
      { source: "/change-of-address.pml", destination: "/contact", permanent: true },
      { source: "/spay-neuter.pml", destination: "/services/spay-neuter", permanent: true },
      { source: "/resources.pml", destination: "/", permanent: true },
      { source: "/hours.pml", destination: "/contact", permanent: true },
      { source: "/privacy-policy.pml", destination: "/privacy-policy", permanent: true },
      { source: "/how-to-videos.pml", destination: "/resources/how-to-videos", permanent: true },
      { source: "/rx-refill.pml", destination: "/contact", permanent: true },
      { source: "/surgery.pml", destination: "/services/pet-surgery", permanent: true },
      { source: "/petsimonials.pml", destination: "/", permanent: true },
      { source: "/emergencies.pml", destination: "/contact", permanent: true },
      { source: "/about-us.pml", destination: "/about", permanent: true },
      { source: "/other-faqs.pml", destination: "/", permanent: true },
      { source: "/services.pml", destination: "/services", permanent: true },
      { source: "/hospital-policies.pml", destination: "/contact", permanent: true },
      { source: "/new-pet-intake-form.pml", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
