<script context="module" lang="ts">
  import type { Preload } from '@sapper.ext/server'

  export const preload: Preload = async function() {
    const res = await this.fetch(`blog.json`);
    const posts = await res.json();
    return { posts };
	}
</script>

<script lang="ts">
	export let posts: { slug: string; title: string, html: string }[];
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
