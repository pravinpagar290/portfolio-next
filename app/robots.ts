import { MetadataRoute } from "next";
import { SITE_CONFIG, PROJECTS } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp"],
        allow: ["/", "/about", "/projects", "/blog"],
        disallow: ["/api/", "/admin/", "/*?*"],
        crawlDelay: 0,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/*?*"],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
