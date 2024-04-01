
<script lang="ts">
	import { enhance } from "$app/forms";

	let alreadyExists = false;
</script>

<svelte:head>
	<title>とろサー作業部屋 Discordアプリ</title>
</svelte:head>

<main>
	<h1>Hello World</h1>

	<form method="POST" use:enhance on:submit={() => alreadyExists = true}>
		<input type="text" name="title" />
		<button type="submit">{ alreadyExists ? "Exit" : "Entry" }</button>
	</form>
</main>

<style lang="scss">
	input {
		appearance: none;
		position: absolute;
		bottom: 0;
		width: calc(100% - 64px);
		height: 32px;
		padding: 0 4px;
		font-size: 16px;
	}

	button {
		appearance: none;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 64px;
		height: 32px;
	}
</style>
