import Card from "@/components/Card";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const destinatario = (await searchParams).destinatario;
  const mittente = (await searchParams).mittente;

  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen relative bg-fuchsia-200">
      <Card
        destinatario={destinatario ?? "Andrea"}
        mittente={mittente ?? "Mamma"}
      />
    </div>
  );
}
