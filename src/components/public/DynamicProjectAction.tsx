"use client";

import dynamic from "next/dynamic";
import React from 'react';

const ProjectActionsBtn = dynamic(
    () => import('@/components/public/ProjectActionsBtn'),
    { ssr: false }
);

type DynamicActionsProps = {
    projectId: string;
};

const DynamicProjectActions: React.FC<DynamicActionsProps> = ({ projectId }) => {
    return <ProjectActionsBtn projectId={projectId} />;
};

export default DynamicProjectActions;