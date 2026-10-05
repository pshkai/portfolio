import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { aitsCaseStudies } from "@/data/aitsCaseStudies";

export function AitsCaseStudies() {
  return (
    <section id="aits-case-studies" className="bg-stone-50 py-20 dark:bg-stone-900">
      <div className="section-container">
        <SectionHeading label="AitsCCTV Case Studies" title="Software and automation for daily operations." subtitle="Current work since September 2026, from customer-service workflows to engineering-planning prototypes." />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {aitsCaseStudies.map((project) => (
            <article key={project.name} className="glass-card flex flex-col gap-4 p-6">
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">{project.status}</p>
              <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-stone-50">{project.name}</h3>
              <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">{project.problem}</p>
              <div className="flex flex-wrap gap-2">{project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
              <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">{project.implementation}</p>
              {project.image && (
                <figure>
                  <Image src={project.image} alt={project.imageAlt ?? "Project preview"} width={1536} height={900} className="rounded-lg border border-stone-200 dark:border-stone-700" />
                  <figcaption className="mt-2 text-xs text-stone-500 dark:text-stone-400">Local rebuild preview; production website unchanged.</figcaption>
                </figure>
              )}
              <details className="mt-auto border-t border-stone-200 pt-4 dark:border-stone-700">
                <summary className="cursor-pointer text-sm font-medium text-stone-800 dark:text-stone-200">Validation and next steps</summary>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{project.evidence}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300"><strong className="font-medium">Next: </strong>{project.next}</p>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
