"use client";

import { useState } from "react";
import axios from "axios";
import IdeaForm from "./components/IdeaForm";
import ErrorMessage from "./components/ErrorMessage";
import DynamicLandingPage from "./components/DynamicLandingPage";
import { Section, SectionType } from "./types/section";

export default function WebsiteIdeaPage() {
  const [idea, setIdea] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSections([]);
    setSubmitted(false);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/sections`,
        { idea }
      );
      const typedSections: Section[] = res.data.sections.map(
        (section: any) => ({
          ...section,
          type: section.type as SectionType,
        })
      );
      setSections(typedSections);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-neutral-900 p-8 rounded-xl shadow-2xl m-6 text-neutral-100">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-tight text-neutral-100">
          Website Idea Generator
        </h1>
        <IdeaForm
          idea={idea}
          setIdea={setIdea}
          loading={loading}
          onSubmit={handleSubmit}
        />
        <ErrorMessage error={error} />
        {submitted && sections.length > 0 && (
          <DynamicLandingPage sections={sections} />
        )}
      </div>
    </main>
  );
}
