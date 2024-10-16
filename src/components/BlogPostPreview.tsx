"use client";
import { Badge } from "@/components/ui/badge";
import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div className="break-words">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>

      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl ">
          <Link
            href={`/blog/${post.slug}`}
            className=" hover:text-blue-500 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-[background-size] duration-300 ease-in-out"
          >
            {post.title}
          </Link>
        </h2>
        <div className="prose lg:prose-sm italic tracking-tighter text-muted-foreground">
          {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
        </div>

        <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          {post.description}
        </div>
        <div className="text-sm text-muted-foreground flex">
          {post.tags.map((tag) => (
            // <Badge className="px-2 py-1 mx-1 cursor-pointer" key={tag.id}>
            //   <div className="mr-2 inline-block">
            //     <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
            //   </div>
            // </Badge>

            <div key={tag.id} className="flex flex-row mb-2 mr-2 mt-2">
              <Tag tagName={tag.name} />
            </div>
          ))}
        </div>
        {/* <Link href={`/blog/${post.slug}`}>
          <Button className=" w-[100%]">
            View full
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-20 md:grid-cols-2 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
