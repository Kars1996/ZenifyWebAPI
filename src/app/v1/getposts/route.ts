export const dynamic = "force-dynamic";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import type { blogProp } from "@/types";

export async function GET(context: { params: { post: string } }) {
    const dir = path.join(process.cwd(), "src/data/news");
    const files = await fs.readdir(dir);
    const posts: blogProp[] = [];

    for (const file of files) {
        if (!file.includes(".mdx")) return;
        const filepath = path.join(dir, file);
        const contents = await fs.readFile(filepath, "utf-8");

        const { data, content } = matter(contents);

        const post: blogProp = {
            author: data.author,
            date: data.date,
            title: data.title,
            path: file.replace(/\.\w+$/, ""),
            image: data.image,
            description: data.description,
            content: content,
        };
        posts.push(post);
    }

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
