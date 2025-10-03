export interface IProject {
    _id: string,
    title: string,
    thumbnail: string,
    projectUrl: string,
    liveLink?: string,
    description: string,
    techStack?: string[],
    features: string[],
    createdAt?: string,
    updatedAt?: string
}

export interface IBlog {
    _id: string,
    title: string,
    slug?: string,
    content: string,
    thumbnail?: string,
    tags: string[],
    author?: string,
    views: number,
    createdAt?: string,
    updatedAt?: string
}