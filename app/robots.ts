import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  // Ensure baseUrl doesn't have trailing slash to avoid double slashes in sitemap URL
  const baseUrl = SITE_CONFIG.url.endsWith("/")
    ? SITE_CONFIG.url.slice(0, -1)
    : SITE_CONFIG.url;

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
