import React from "react";
import { Section } from "../types/section";
import { sectionRenderers } from "./sectionRenderers";

interface DynamicLandingPageProps {
  sections: Section[];
}

const DynamicLandingPage: React.FC<DynamicLandingPageProps> = ({
  sections,
}) => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-950 min-h-screen w-full rounded-xl shadow-2xl overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-neutral-900/90 backdrop-blur border-b border-neutral-800 flex gap-4 px-8 py-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className="text-neutral-200 hover:text-blue-400 font-semibold transition">
            {section.name}
          </button>
        ))}
      </nav>
      {/* Sections */}
      <div>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="border-b border-neutral-800 last:border-b-0">
            {sectionRenderers[section.type]?.(section.content) || (
              <section className="py-16 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-2">{section.name}</h3>
                <p className="text-neutral-400">Section content goes here.</p>
              </section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicLandingPage;
