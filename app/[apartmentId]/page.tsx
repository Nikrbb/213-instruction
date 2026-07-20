import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstructionPageView } from "@/components/instruction/InstructionPageView";
import { fetchInstructionByApartmentId } from "@/lib/instruction-mock";

type Props = {
  params: Promise<{ apartmentId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { apartmentId } = await params;
  const data = await fetchInstructionByApartmentId(apartmentId);
  if (!data) {
    return { title: "Не знайдено" };
  }
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: {
      canonical: `/${apartmentId}`,
    },
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      type: "website",
      locale: "uk_UA",
      siteName: "Заселення",
      url: `/${apartmentId}`,
      images: [
        {
          url: data.metadata.ogImage.src,
          width: data.metadata.ogImage.width,
          height: data.metadata.ogImage.height,
          alt: data.metadata.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metadata.title,
      description: data.metadata.description,
      images: [data.metadata.ogImage.src],
    },
  };
}

export default async function ApartmentInstructionPage({ params }: Props) {
  const { apartmentId } = await params;
  const data = await fetchInstructionByApartmentId(apartmentId);
  if (!data) {
    notFound();
  }
  return <InstructionPageView data={data} />;
}
