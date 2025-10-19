<script>
	import { goto } from '$app/navigation';
	import { signIn, signOut } from '@auth/sveltekit/client';






	const {data} = $props()
</script>

<div class="bg-neutral-800 h-screen w-screen flex flex-col items-center justify-center">

    <div class="bg-neutral-700 flex flex-col p-6 rounded-md items-center justify-center gap-3">
        
        <h1 class="text-green-400 font-bold text-2xl">MineMan - Manager</h1>
        <p class="text-neutral-300 font-thin text-md text-center">Der Manager der dein Server verändert. Von Konsole zu Web. <br> Hab viel Spaß dieses Tool zu benutzen.</p>

        {#if !data.session}

            <div>
                <button class="bg-green-500 py-2 px-4 rounded-sm text-white" onclick={() => {signIn()}}>Log In.</button>
            </div>

            {:else}

            <div class="flex flex-row gap-3">
                
                <button class="bg-green-500 py-2 px-4 rounded-sm text-white" onclick={() => {goto("/dashboard")}}>Dashboard.</button>
                <button class="bg-green-500 py-2 px-4 rounded-sm text-white" onclick={() => {signOut()}}>Log out.</button>
            </div>
            
        {/if}


    </div>

</div>