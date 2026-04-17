import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, getAllSlugs, projects } from "@/lib/projects";
import { CaseStudyPage } from "./case-study-page";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description.slice(0, 160),
    openGraph: {
      title: `${project.title} | Timur Mone`,
      description: project.tagline,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return <CaseStudyPage project={project} prev={prev} next={next} />;
}
