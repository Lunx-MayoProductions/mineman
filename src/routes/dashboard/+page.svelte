<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const { data } = $props();

	let logs: string[] = [];
	let logArea: HTMLTextAreaElement;

	if (!data.session) {
		goto('/');
	}

	let socket: WebSocket;

	// Lifecycle hook for when component mounts
	onMount(() => {
		socket = new WebSocket('ws://localhost:8776/logs');

		socket.onmessage = (event) => {
			logs.push(event.data);
			updateLogDisplay();
		};

		socket.onerror = (err) => {
			console.error('WebSocket error:', err);
			logs.push('[WebSocket Error]');
			updateLogDisplay();
		};

		socket.onclose = () => {
			logs.push('[Disconnected from server]');
			updateLogDisplay();
		};
	});

	function updateLogDisplay() {
		if (logArea) {
			logArea.value = logs.join('\n');
			logArea.scrollTop = logArea.scrollHeight; // Auto-scroll to bottom
		}
	}
</script>

{#if !data.session}
    {goto("/")}
{/if}

<div class="bg-neutral-800 h-screen w-screen flex gap-3 justify-center">
    <div class="bg-neutral-700 flex flex-col items-center mt-24 p-3 rounded-lg h-[80%] w-full max-w-4xl gap-3">
        <h1 class="text-4xl text-green-400 font-bold">Console</h1>
        <textarea
            bind:this={logArea}
            class="bg-neutral-600 rounded-md text-neutral-200 font-mono text-sm p-3 w-full h-full resize-none"
            disabled
        ></textarea>
    </div>
</div>
