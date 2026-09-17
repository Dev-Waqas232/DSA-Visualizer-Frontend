import { ALGORITHMS, DATA_STRUCTURES } from "@/constants/sidebar-list";
import Link from "next/link";
import { BsDiagram3 } from "react-icons/bs";

export default function Sidebar() {
  return (
    <aside className="w-xs h-screen overflow-hidden border-0 border-r rounded-r-lg pt-8">
      <div className="pb-8 border-0 border-b">
        <h1 className="text-xl flex items-center gap-4 justify-center">
          <BsDiagram3 />
          DSA Visualizer
        </h1>
      </div>
      <div className="h-full overflow-auto pb-16">
        <section>
          <h2 className="font-mono bg-text-primary text-background px-4 uppercase tracking-widest">
            Data Structures
          </h2>
          <ul>
            {DATA_STRUCTURES.map((d) => (
              <li
                key={d.slug}
                className="px-6 border-0 not-last:border-b py-3 cursor-pointer hover:bg-text-primary hover:text-background hover:border-background transition-all"
              >
                <Link href={`/${d.slug}`}>{d.name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-mono bg-text-primary text-background px-4 uppercase tracking-widest">
            Algorithms
          </h2>
          <ul>
            {ALGORITHMS.map((a) => (
              <li
                key={a.slug}
                className="px-6 border-0 not-last:border-b py-3 cursor-pointer hover:bg-text-primary hover:text-background hover:border-background transition-all"
              >
                <Link href={`/${a.slug}`}>{a.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
