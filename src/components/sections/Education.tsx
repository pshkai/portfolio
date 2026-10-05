import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="bg-white py-20 dark:bg-stone-950">
      <div className="section-container">
        <SectionHeading label="Education" title="Computer & Data Science and Software Engineering." />
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-lg font-medium text-stone-900 dark:text-stone-50">Global Academy @ Siam University</h3>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">Dual degree: Bachelor of Computer &amp; Data Science and Bachelor of Software Engineering</p>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Bangkok, Thailand</p>
          </div>
          <p className="shrink-0 text-sm text-stone-500 dark:text-stone-400">Expected November 2028</p>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-stone-300"><strong className="font-medium">Relevant coursework: </strong>Data Structure and Algorithms, Object Oriented Programming, Database System, System Analysis and Design, Data Science, Data Analytics and Data Visualizations, Computer Network and Data Communication, UX/UI Design, Ethics and Information Security.</p>
      </div>
    </section>
  );
}
