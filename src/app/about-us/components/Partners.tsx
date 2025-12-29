import Image from "next/image";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import { getAllPartners } from "@/services/partnerService";
import React from "react";

interface Partner {
  id: string;
  name: string;
  logo_url: string;
  status: boolean;
}

const getLogoSrc = (logoUrl: string) => {
  if (!logoUrl) return null;
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${logoUrl}`;
};

// Reusable Partner Logo Card
const PartnerLogoCard = React.memo(function PartnerLogoCard({ partner }: { partner: Partner }) {
  const logoSrc = getLogoSrc(partner.logo_url);
  if (!logoSrc) return null;
  return (
    <div
      className="flex items-center justify-center bg-(--gray) w-full h-28 p-4 rounded-md"
      tabIndex={0}
      aria-label={partner.name}
      role="listitem"
    >
      <Image
        src={logoSrc}
        alt={`${partner.name} logo`}
        width={120}
        height={40}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
});

export default async function Partners() {
  const partners: Partner[] = await getAllPartners();
  // Only show active partners with a logo
  const filteredPartners = Array.isArray(partners)
    ? partners.filter((p) => p.status && p.logo_url)
    : [];

  return (
    <Section
      className="w-full py-10 lg:py-20 h-full bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/home/banner.webp')" }}
      aria-label="Partners Section"
    >
      <div
        className="absolute inset-0 bg-(--light-blue-three) rounded-xl z-0"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 relative z-10 items-center">
        {/* Left Text */}
        <Heading level={4} className="text-white">
          Trusted by our
          <br />
          customers & partners
        </Heading>
        {/* Logos */}
        <div
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6"
          role="list"
          aria-label="Partner Logos"
        >
          {filteredPartners.map((partner) => (
            <PartnerLogoCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </Section>
  );
}
