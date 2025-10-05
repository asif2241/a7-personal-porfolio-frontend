
import { IBlog, IProject } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogDetailsBtn from "@/components/public/BlogActionsBtn";
import Link from "next/link";
import ProjectActionsBtn from "@/components/public/ProjectActionsBtn";

type Props = {
    params: { projectId: string };
};
export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);
    const { data: projects } = await res.json();

    return projects.map((project: IProject) => ({
        projectId: project._id,
    }));


};




const ProjectPage = async ({ params }: Props) => {
    const { projectId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`, {
        next: { revalidate: 60 }, // ISR: regenerate every hour
    });

    if (!res.ok) return notFound();

    const data = await res.json();
    const project: IProject = data.data;
    // console.log(project);

    return (
        <div className="w-11/12 max-w-6xl mx-auto my-10">
            {/* Project Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {project.title}
            </h1>

            {/* Meta Info */}
            <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-4">
                <span>• {project.views} views</span>
            </div>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
                <div className="my-8">
                    <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, index) => (
                            <span key={index} className="bg-sky-100 text-sky-800 text-sm font-medium px-4 py-2 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Thumbnail */}
            {project.thumbnail && (
                <div className="w-full h-auto mb-6">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={1200}
                        height={700}
                        className="rounded-lg w-full h-auto object-cover"
                        priority
                    />
                </div>
            )}

            {/* Description */}
            <article className="prose max-w-none text-gray-800 text-lg leading-relaxed mb-10">
                {project.description}
            </article>

            {/* Features */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Features</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-800">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8">
                <div className="flex flex-wrap gap-4 ">
                    {project.liveLink && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Live Site
                        </Link>
                    )}
                    {project.frontendCodeLink && (
                        <Link
                            href={project.frontendCodeLink}
                            target="_blank"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Frontend Code
                        </Link>
                    )}
                    {project.backendCodeLink && (
                        <Link
                            href={project.backendCodeLink}
                            target="_blank"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Backend Code
                        </Link>
                    )}
                </div>
                <ProjectActionsBtn></ProjectActionsBtn>
            </div>
        </div>
    );
};

export default ProjectPage;
