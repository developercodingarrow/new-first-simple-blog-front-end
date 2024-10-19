import { API_BASE_URL } from "../../config";

export default async function sitemap() {
  // Fetch tags from the API or database
  const tagRes = await fetch(`${API_BASE_URL}/private/tag/all-tags`);
  const tagsData = await tagRes.json();
  const tags = tagsData.result || []; // Assuming you get tags from the result

  const baseUrl = "https://pinbuzzers.com";

  // Static pages
  //   const staticPages = [
  //     {
  //       url: `${baseUrl}/`,
  //       lastModified: new Date(),
  //     changeFrequency: "always",
  //     },
  //     {
  //       url: `${baseUrl}/tags`,
  //       lastModified: new Date(),
  //     },
  //   ];

  // Dynamic pages based on tags, using `updatedAt` for `lastModified`
  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/tags/${tag.tagSlug}`, // Ensure tagSlug is used instead of slug if tagSlug is the correct field
    lastModified: new Date(tag.updatedAt), // Using updatedAt for lastModified
    changeFrequency: "always",
  }));

  // Dynamic home page URLs with query parameters, using `updatedAt` for `lastModified`
  const tagQueryParams = tags.map((tag) => ({
    url: `${baseUrl}/?tag=${tag.tagSlug}`,
    lastModified: new Date(tag.updatedAt), // Using updatedAt for lastModified
    changeFrequency: "always",
  }));

  // Combine all pages
  const sitemap = [...tagPages, ...tagQueryParams];

  return sitemap;
}
