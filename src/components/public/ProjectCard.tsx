"use client"
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`project/${project._id}`}>
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
        <Image
          width={400}
          height={420}
          alt=""
          src={project.thumbnail}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {project.description}
          </p>

          <p

            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
