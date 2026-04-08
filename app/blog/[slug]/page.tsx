"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { UserData } from "@/data/userData";
import { MOTION_VARIANTS } from "@/lib/motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = UserData.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles (other articles in the list)
  const relatedArticles = UserData.articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <main className="pt-32 md:pt-40 pb-24">
      <SectionWrapper>
        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {/* Header / Navigation */}
          <motion.div
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <Link
              href="/blog"
              className="text-accent font-bold tracking-[0.2em] uppercase text-sm hover:text-white transition-colors w-fit"
            >
              ← Back to Articles
            </Link>

            {/* Article Meta */}
            <div className="flex flex-col gap-4">
              <time className="text-sm font-bold text-accent uppercase tracking-[0.2em]">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                {article.title}
              </h1>
            </div>
          </motion.div>

          {/* Featured Image */}
          {article.imageSrc && (
            <motion.div
              variants={MOTION_VARIANTS.fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={article.imageSrc}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="prose prose-invert max-w-none"
          >
            <div className="text-muted leading-relaxed space-y-6 text-lg">
              {article.content?.split("\n\n").map((paragraph, idx) => {
                // Handle markdown headers
                if (paragraph.startsWith("# ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-4xl font-black tracking-tighter uppercase text-white mt-12 mb-6 first:mt-0"
                    >
                      {paragraph.replace("# ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h3
                      key={idx}
                      className="text-2xl font-bold tracking-tight text-white mt-8 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h3>
                  );
                }

                // Handle code blocks
                if (paragraph.startsWith("```")) {
                  const lines = paragraph.split("\n");
                  const code = lines.slice(1, -1).join("\n");
                  return (
                    <pre
                      key={idx}
                      className="bg-black/50 border border-white/10 rounded-lg p-6 overflow-x-auto my-8"
                    >
                      <code className="text-accent text-sm">{code}</code>
                    </pre>
                  );
                }

                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={idx} className="text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"
          />

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div
              variants={MOTION_VARIANTS.fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="flex flex-col gap-8"
            >
              <h2 className="text-3xl font-black tracking-tighter uppercase">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, idx) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.slug}`}
                    className="group flex flex-col gap-4 p-6 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-500 hover:bg-white/2"
                  >
                    <time className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
                      {relatedArticle.date}
                    </time>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-500">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.0}
            className="flex flex-col gap-4 items-center text-center py-12"
          >
            <p className="text-muted text-lg">
              Want to discuss this article or suggest topics?
            </p>
            <Link
              href="/#contact"
              className="text-white hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors border-b-2 border-transparent hover:border-accent pb-2"
            >
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}
