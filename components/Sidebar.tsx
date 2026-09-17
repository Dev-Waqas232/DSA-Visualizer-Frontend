import { BsDiagram3 } from "react-icons/bs";

export default function Sidebar() {
  return (
    <aside className="w-xs h-screen overflow-auto border-0 border-r rounded-r-lg py-8">
      <div className="pb-8">
        <h1 className="text-xl px-4 flex items-center gap-4">
          <BsDiagram3 />
          DSA Visualizer
        </h1>
      </div>
      <section>
        <h2 className="font-mono bg-text-primary text-background px-4">
          Data Structures
        </h2>
      </section>
      <section>
        <h2 className="font-mono bg-text-primary text-background px-4">
          Algorithms
        </h2>
      </section>
    </aside>
  );
}
