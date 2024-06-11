import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";

type BlogPostCardProps = {
  entryId: string;
  title: string;
  createdAt: string;
  description: string;
};

export default function BlogPostCard(props: BlogPostCardProps) {
  const { entryId, title, description, createdAt } = props;
  return (
    <Link href={`/blog/${entryId}`}>
      <Card
        className={`h-32 bg-stone-800 scale-[1.02] hover:scale-110 transition-transform`}
      >
        <CardContent>
          <div className="mt-6">
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription>
              {new Date(createdAt).toLocaleString()}
            </CardDescription>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
