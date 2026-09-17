import Actions from "@/components/Actions";

export default function MainScreen() {
  return (
    <section className="py-8 h-screen">
      <div className="h-9/10 overflow-auto px-4">Main</div>
      <footer className="border-0 border-t w-full px-4">
        <Actions />
      </footer>
    </section>
  );
}
