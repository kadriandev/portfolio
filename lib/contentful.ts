import { createClient as _createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function createClient() {
  return _createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });
}

export function getPosts() {
  const client = createClient();
  return client.getEntries();
}

export async function getPost(entryId: string) {
  const client = createClient();
  return client.getEntry(entryId);
}
