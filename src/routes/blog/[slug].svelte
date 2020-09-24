<script context="module" lang="ts">
  import type { Preload } from '@sapper.ext/server'

  export const preload: Preload = async function({params}) {
		const response = await this.fetch(`https://4xlxjn3y4i.execute-api.us-east-1.amazonaws.com/dev/blog/${params.slug}.json`);
		const post = await response.json();

		if (response.status === 200) {
			return { post };
		} else {
			this.error(response.status, post.message);
		}
  };
</script>

<script lang="ts">
	export let post: { slug: string; title: string, html: any };
</script>

<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html post.html}
</div>
