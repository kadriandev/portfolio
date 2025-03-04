import GithubRepoCard from "@/components/github-repo-card";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "kadriandev | Projects",
  description: "Generated by create next app",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <GithubRepoCard repo="kadriandev/fantasy-tools" />
      <GithubRepoCard repo="kadriandev/portfolio" />
      <GithubRepoCard repo="kadriandev/dotfiles" />
      <GithubRepoCard repo="kadriandev/emailserver" />
    </div>
  );
}
