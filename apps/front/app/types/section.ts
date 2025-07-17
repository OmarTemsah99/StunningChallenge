export interface ProductItem {
  name: string;
  price: string;
}

export interface SectionContentHero {
  logo: string;
  headline: string;
  subtext: string;
  cta: string;
}

export interface SectionContentAbout {
  title: string;
  text: string;
}

export interface SectionContentProducts {
  title: string;
  items: ProductItem[];
}

export interface SectionContentContact {
  title: string;
  address: string;
  phone: string;
  email: string;
}

export type SectionType = "hero" | "about" | "products" | "contact";

export interface Section {
  id: string;
  name: string;
  type: SectionType;
  content:
    | SectionContentHero
    | SectionContentAbout
    | SectionContentProducts
    | SectionContentContact;
}
