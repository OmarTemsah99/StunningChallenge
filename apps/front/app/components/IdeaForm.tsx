import React from "react";

interface IdeaFormProps {
  idea: string;
  setIdea: (val: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const IdeaForm: React.FC<IdeaFormProps> = ({
  idea,
  setIdea,
  loading,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="mb-6">
    <input
      type="text"
      value={idea}
      onChange={(e) => setIdea(e.target.value)}
      placeholder="e.g. Landing page for bakery"
      className="w-full p-3 mb-4 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      required
      disabled={loading}
    />
    <button
      type="submit"
      disabled={loading || !idea.trim()}
      className="w-full p-3 rounded-md font-semibold text-base transition bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white shadow-md">
      {loading ? "Generating..." : "Generate Sections"}
    </button>
  </form>
);

export default IdeaForm;
