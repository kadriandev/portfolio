import { getPost } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className="md:mt-12 md:mx-20">
      <Link href={"/blog"}>&larr; Go Back</Link>
      <div className="mx-auto w-5/6 md:w-2/5 lg:w-2/3">
        <h1 className="mt-8 text-2xl font-bold">
          {post.fields.title as string}
        </h1>
        <h2 className="text-zinc-300">
          Created: {new Date(post.sys.createdAt as string).toLocaleString()}
        </h2>
        <div className="mt-8">
          {documentToReactComponents(post.fields.body as any)}
        </div>
      </div>
    </div>
  );
}
