import React, { Suspense } from "react";
import Loading from "../../loading";
import SingleBlogWrapper from "@/src/components/singleBlog/singleBlogElements/blogwrapper/SingleBlogWrapper";
import { API_BASE_URL } from "../../../../../config";
import { cache } from "react";

export async function generateStaticParams() {
  const post = await fetch(
    `${API_BASE_URL}/private/blog/fllterd-tag-blogs`
  ).then((res) => res.json());

  // Get the first 10 blog posts
  const limitedPosts = post.result.slice(0, 10);

  return limitedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${API_BASE_URL}/private/blog/get-blog/${params.slug}`
  );
  const data = await res.json();

  return {
    title: data.result.blogTitle || "Default Title",
    description: data.result.metaDescription || "Default description",
    canonical: `https://pinbuzzers.com/blog/${params.slug}`,
    openGraph: {
      title: data.result.blogTitle || "Default Title",
      description: data.result.metaDescription || "Default description",
      images: [
        {
          url:
            `https://pinbuzzers.com/blogthumblin/${data.result.blogThumblin?.url}` ||
            "/default-image.jpg",
          alt: data.result.blogThumblin?.altText || "Blog Thumbnail",
        },
      ],
      article: {
        publishedTime: data.result.publishedAt,
        authors: [data.result.author?.name || "Default Author"],
      },
    },
    twitter: {
      cardType: "summary_large_image",
      title: data.result.blogTitle || "Default Title",
      description: data.result.metaDescription || "Default description",
      image:
        `https://pinbuzzers.com/blogthumblin/${data.result.blogThumblin?.url}` ||
        defaultImage,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: data.result.tags?.join(", ") || "default, keywords",
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.result.blogTitle || "Default Title",
      description: data.result.metaDescription || "Default description",
      image: data.result.blogThumblin?.url || "/default-image.jpg",
      author: {
        "@type": "Person",
        name: data.result.author?.name || "Default Author",
      },
      datePublished: data.result.createdAt || new Date().toISOString(),
      publisher: {
        "@type": "Organization",
        name: "pinbuzzers",
        logo: {
          "@type": "ImageObject",
          url: "https://pinbuzzers.com/web-static-img/dummy-logo.png", // Replace with your logo URL
        },
      },
    },
  };
}

export default async function SingleBlogpage(pathname) {
  const slug = pathname.params?.slug;
  let data;

  try {
    // Fetch the web stats using the auth token
    const res = await fetch(`${API_BASE_URL}/private/blog/get-blog/${slug}`);
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    const initalData = await res.json();
    data = initalData.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    initialData = null;
  }

  const SEO = {
    title: data.blogTitle,
    description: data.metaDescription,
    canonical: `https://pinbuzzers.com//blog/${slug}`,
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
      <Suspense fallback={<Loading />}>
        <SingleBlogWrapper data={data} />
      </Suspense>
    </div>
  );
}
