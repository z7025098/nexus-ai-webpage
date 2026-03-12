"use client";

import { useLanguage } from "./LanguageContext";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

const locales: Record<string, Record<string, unknown>> = { en, zh };

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function useTranslation() {
  const { locale } = useLanguage();
  const dict = locales[locale] || locales.en;

  const t = (key: string): string => {
    return getNestedValue(dict as Record<string, unknown>, key);
  };

  return { t, locale };
}
