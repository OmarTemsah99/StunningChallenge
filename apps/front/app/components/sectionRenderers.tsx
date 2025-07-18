import React from "react";
import {
  SectionContentHero,
  SectionContentAbout,
  SectionContentProducts,
  SectionContentContact,
  SectionType,
} from "../types/section";

type SectionContent =
  | SectionContentHero
  | SectionContentAbout
  | SectionContentProducts
  | SectionContentContact;

export const sectionRenderers: Record<
  SectionType,
  (content: SectionContent) => React.ReactNode
> = {
  hero: (content) => {
    const c = content as SectionContentHero;
    return (
      <section
        className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16"
        id="hero">
        <div className="mb-4 text-3xl font-extrabold text-blue-400">
          {c.logo}
        </div>
        <h2 className="text-4xl font-bold mb-2">{c.headline}</h2>
        <p className="text-lg text-neutral-300 mb-6">{c.subtext}</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow">
          {c.cta}
        </button>
      </section>
    );
  },
  about: (content) => {
    const c = content as SectionContentAbout;
    return (
      <section className="py-16 max-w-2xl mx-auto" id="about">
        <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
        <p className="text-neutral-300">{c.text}</p>
      </section>
    );
  },
  products: (content) => {
    const c = content as SectionContentProducts;
    return (
      <section className="py-16 max-w-2xl mx-auto" id="products">
        <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
        <ul className="space-y-2">
          {c.items.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between bg-neutral-800 rounded px-4 py-2">
              <span>{item.name}</span>
              <span className="font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  },
  contact: (content) => {
    const c = content as SectionContentContact;
    return (
      <section className="py-16 max-w-2xl mx-auto" id="contact">
        <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
        <div className="text-neutral-300 mb-2">{c.address}</div>
        <div className="text-neutral-300 mb-2">{c.phone}</div>
        <div className="text-neutral-300 mb-2">{c.email}</div>
        <form className="mt-4 space-y-2">
          <input
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100"
            placeholder="Your Name"
          />
          <input
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100"
            placeholder="Message"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold">
            Send
          </button>
        </form>
      </section>
    );
  },
};
