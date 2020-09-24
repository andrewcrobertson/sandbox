import type { Request, Response } from "express";
import posts from './_posts';

const contents = JSON.stringify(posts.map(({ title, slug }) => ({ title, slug })));

export function get(req: Request, res: Response) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(contents);
}