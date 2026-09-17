import Actions from "@/app/components/Actions";

export default async function MainScreen({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="py-8 h-screen">
      <div className="h-9/10 overflow-auto px-4">{slug}</div>
      <footer className="border-0 border-t w-full px-4">
        <Actions />
      </footer>
    </section>
  );
}
