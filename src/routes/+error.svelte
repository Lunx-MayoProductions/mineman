<script>
	import { goto } from '$app/navigation';
import { signIn } from '@auth/sveltekit/client';
	import { SignIn } from '@auth/sveltekit/components';
	import { redirect } from '@sveltejs/kit';


    export const ssr = true;




	const {data} = $props()
</script>

<div class="bg-neutral-800 h-screen w-screen flex flex-col items-center justify-center">

    <div class="bg-neutral-700 flex flex-col p-8 rounded-md items-center justify-center gap-3">
        
        <h1 class="text-red-400 font-bold text-3xl">Error!</h1>
        <p class="text-neutral-300 font-thin text-2xl">We are very sorry, but an error has occured. Try again later.</p>

            <div>
                <button class="bg-red-500 py-2 px-4 rounded-sm text-white hover:scale-105 shadow-md shadow-neutral-800 active:scale-95 transition-all" onclick={() => {goto("/");}}>Go back.</button>
            </div>


    </div>

</div>