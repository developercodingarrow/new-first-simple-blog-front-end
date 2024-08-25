"use client";

import React from "react";
import { NextSeo } from "next-seo";

export default function BlogSeo({ seoData }) {
  return <NextSeo {...seoData} />;
}
