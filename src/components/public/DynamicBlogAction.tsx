"use client"

import dynamic from "next/dynamic"
import React from "react";

const BlogActionsBtn = dynamic(
    () => import('@/components/public/BlogActionsBtn'),
    { ssr: false }
);

type DynamicActionsProps = {
    blogId: string;
    slug: string
}

const DynaminBlogActions: React.FC<DynamicActionsProps> = ({ blogId, slug }) => {
    return <BlogActionsBtn blogId={blogId} slug={slug}></BlogActionsBtn>
}

export default DynaminBlogActions