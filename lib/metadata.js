import { SITE_NAME, SITE_URL } from "./site-config";
import { BASE_PATH } from "@/lib/base";

export function createMetadata({ title, description, path }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      images: [{ url: `${SITE_URL}/${BASE_PATH}/logo.webp` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/${BASE_PATH}/logo.webp`],
    },
  };
}

export function createPageMetadata(page) {
  return createMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}
