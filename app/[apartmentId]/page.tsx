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
