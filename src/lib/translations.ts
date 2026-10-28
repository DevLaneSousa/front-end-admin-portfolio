export type EnglishValues = Record<string, string | string[]>;
export interface Translations {
  en?: EnglishValues;
}

export interface EnglishField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'list';
  span?: boolean;
}

export function englishOf(translations: unknown): EnglishValues {
  const en = (translations as Translations | null | undefined)?.en;
  return en && typeof en === 'object' ? { ...en } : {};
}

export function withEnglish(translations: unknown, english: EnglishValues): Translations {
  const base = (
    translations && typeof translations === 'object' ? translations : {}
  ) as Translations;
  const en: EnglishValues = {};
  for (const [key, value] of Object.entries(english)) {
    if (Array.isArray(value)) {
      const items = value.map((item) => item.trim()).filter(Boolean);
      if (items.length) en[key] = items;
    } else if (typeof value === 'string' && value.trim()) {
      en[key] = value.trim();
    }
  }
  return { ...base, en };
}

export function filledCount(english: EnglishValues, fields: EnglishField[]): number {
  return fields.filter((field) => {
    const value = english[field.key];
    return Array.isArray(value) ? value.length > 0 : Boolean(value?.trim());
  }).length;
}
