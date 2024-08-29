import { singleBlogs } from "@/src/Actions/blogActions/blogAction";
import SingleBlogPageUI from "@/src/layouts/server/singleBlogPage/SingleBlogPageUI";
import React, { Suspense } from "react";
import { NextSeo } from "next-seo";
import BlogSeo from "@/src/components/SEO/BlogSeo";
import Loading from "../../loading";

async function getData(slug) {
  const res = await singleBlogs(slug);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await res.data.result;
}

export default async function SingleBlogpage(pathname) {
  const slug = pathname.params?.slug;

  const data = await getData(slug);

  const SEO = {
    title: data.blogTitle,
    description: data.metaDescription,
    canonical: `https://yourwebsite.com/blog/${slug}`,
    openGraph: {
      title: data.blogTitle,
      description: data.metaDescription,
      images: [
        {
          url: data.blogThumblin?.url || "/default-image.jpg",
          alt: data.blogThumblin?.altText || "Blog Thumbnail",
        },
      ],
      article: {
        publishedTime: data.publishedAt,
        authors: [
          data.author?.name || "Default Author", // Replace with actual author data
        ],
      },
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: data.tags?.join(", ") || "default, keywords", // Assuming you have tags
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.blogTitle,
      description: data.metaDescription,
      image: data.blogThumblin?.url,
      author: {
        "@type": "Person",
        name: data.author?.name || "Default Author",
      },
      datePublished: data.createdAt || new Date().toISOString(),
      publisher: {
        "@type": "Organization",
        name: "Your Blog Name",
        logo: {
          "@type": "ImageObject",
          url: "https://example.com/logo.png", // Replace with your logo URL
        },
      },
    },
  };
  return (
    <div>
      {/* <BlogSeo seoData={SEO} /> */}
      <Suspense fallback={<Loading />}>
        <SingleBlogPageUI ssrData={data} />
      </Suspense>
    </div>
  );
}
