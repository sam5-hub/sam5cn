import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";
import { getBlogPosts } from "@/data/blog";
import { MoveRightIcon, TouchpadIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">博客列表</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <Link
            className="flex flex-row justify-between items-center border rounded-full mb-4 hover:bg-gray-100/50 px-4"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <div className="w-full flex flex-col px-6 py-2 item-center ">
              <p className="tracking-tight">{post.metadata.title}</p>
              <p className="h-6 text-xs text-muted-foreground">
                {post.metadata.publishedAt}
              </p>
            </div>

            <TouchpadIcon className="w-4 h-4" />
          </Link>
        ))}
    </section>
  );
}
