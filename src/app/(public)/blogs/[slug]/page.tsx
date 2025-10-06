
import DynaminBlogActions from "@/components/public/DynamicBlogAction";
import { IBlog } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
};
// ISR setup
export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`);
    const { data: blogs } = await res.json();

    return blogs
        .sort((a: { createdAt: string; }, b: { createdAt: string; }) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getDate())
        .slice(0, 3)
        .map((blog: IBlog) => ({
            slug: blog.slug,
        }));
};

export const generateMetaData = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${slug}`);
    const data = await res.json();
    const blog: IBlog = data.data;

    return {
        title: blog?.slug,
        description: blog?.content
    }
}


const BlogPage = async ({ params }: Props) => {
    const { slug } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${slug}`, {
        next: { revalidate: 60 }, // ISR: regenerate every hour
    });

    if (!res.ok) return notFound();

    const data = await res.json();
    const blog: IBlog = data.data;

    return (
        <div className="w-11/12 max-w-6xl mx-auto my-10">
            {/* Blog Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>

            {/* Meta Info */}
            <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-4">
                <span>By {blog.author || "Unknown Author"}</span>
                <span>• {new Date(blog.createdAt || "").toLocaleDateString()}</span>
                <span>• {blog.views} views</span>
            </div>

            {/* Tags */}
            {blog.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag, index) => (
                        <div key={index} className="badge badge-primary badge-lg">#{tag}</div>
                    ))}
                </div>
            )}

            {/* Thumbnail */}
            {blog.thumbnail && (
                <div className="w-full h-auto mb-6">
                    <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        width={1200}
                        height={700}
                        className="rounded-lg w-full h-auto object-cover"
                        priority
                    />
                </div>
            )}

            {/* Blog Content */}
            <article className="prose max-w-none text-gray-800 text-lg leading-relaxed mb-10">
                {blog.content}
            </article>



            {/* Action Buttons */}
            <DynaminBlogActions blogId={blog._id} slug={blog.slug as string}></DynaminBlogActions>
        </div>
    );
};

export default BlogPage;
