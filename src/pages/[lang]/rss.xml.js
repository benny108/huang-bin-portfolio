import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { languages } from "@/lib/i18n";

export function getStaticPaths() {
  return languages.map((lang) => ({ params: { lang }, props: { lang } }));
}

export async function GET(context) {
  const lang = context.props.lang;
  const entries = (await getCollection("writing"))
    .filter((entry) => entry.data.lang === lang)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  return rss({
    title: lang === "zh" ? "黄彬 · 技术写作" : "Bin Huang · Technical Writing",
    description: lang === "zh" ? "LLM、Agent、医疗 AI 与工程实践。" : "LLMs, agents, medical AI, and engineering practice.",
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.publishedAt,
      link: `/${lang}/writing/${entry.data.slug}/`
    }))
  });
}
