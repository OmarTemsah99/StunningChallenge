import React from "react";

interface SectionPreviewProps {
  sections: string[];
}

const SectionPreview: React.FC<SectionPreviewProps> = ({ sections }) => {
  if (!sections.length) return null;
  return (
    <div className="mt-8">
      <h2 className="text-xl mb-4 text-neutral-100 font-bold">Preview</h2>
      <ul className="pl-5">
        {sections.map((section, idx) => (
          <li key={idx} className="text-lg mb-2 text-neutral-300 list-disc">
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionPreview;
