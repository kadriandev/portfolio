import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Star } from "lucide-react";
import { Badge } from "./ui/badge";

interface GithubRepoCardProps {
  repo: string;
}

export default async function GithubRepoCard(props: GithubRepoCardProps) {
  const { repo } = props;

  const [repoData, languages] = await Promise.all([
    fetch(`http://api.github.com/repos/${repo}`).then((res) => res.json()),
    fetch(`http://api.github.com/repos/${repo}/languages`)
      .then((res) => res.json())
      .then((res) => Object.entries(res)),
  ]);
  return (
    <Link href={repoData.html_url} className="w-full max-h-48 md:max-w-[400px]">
      <Card className="h-full w-full md:w-[400px] hover:bg-card/30 hover:scale-105 transition-transform">
        <CardHeader>
          <CardTitle className="flex mb-4">
            {repoData.name}
            <span className="flex gap-1 ml-auto font-normal">
              <Star />
              {repoData.stargazers_count}
            </span>
          </CardTitle>
          <CardDescription>{repoData.description}</CardDescription>
          <CardContent className="mx-0 px-0 py-4 flex gap-1">
            {languages.map(([lang, lines]) => (
              <Badge
                key={lang}
                className="bg-transparent text-white border-white hover:none"
              >
                {lang}
              </Badge>
            ))}
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
