import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.replace(/^\/cardo-ingenium\/?/, "/").split("/");
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

export function localizedPath(lang: Lang, path = ""): string {
  return lang === defaultLang ? `/${path}` : `/${lang}/${path}`;
}
