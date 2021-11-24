<div class="w-full bg-blue-500 rounded-lg relative p-16 shadow-md">
    <div class="inline-flex flex-col">
        <div class="bg-white text-red-500 pt-6 px-10 inline relative w-min text-8xl font-bold tracking-wide rounded-t-2xl round">Unified</div>
        <div class="bg-white text-gray-700 py-6 px-10 inline-block text-6xl font-medium tracking-wide rounded-b-2xl rounded-tr-2xl">Icons Framework</div>
    </div>
    <p class="text-white text-3xl leading-9 tracking-wide mt-8">One library, over 100,000 vector icons.
        <br/>Modern replacement for icon fonts.  Fast, easy to use.</p>
    <form action="/search" class="mt-10 flex w-5/12 overflow-hidden rounded-md shadow-md">
        <input autocomplete="off" name="q" type="text" class="bg-white w-full px-6 py-5 text-2xl tracking-wide" placeholder="Search icons...">
        <button type="submit" class="bg-red-1000 py-4 px-6">
            <svg class='mt-1' width="32" height="28" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6786 14.8369L17.4286 8.33691L10.6786 1.83691" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.4286 8.33691L2.00002 8.33691" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </form>
    <img src="./assets/hero.svg" alt="hero design" class="absolute right-0 top-0 h-full">
</div>

<style lang="scss">
    .round::before {
        content: "";
        width: 1rem;
        height: 1rem;
        position: absolute;
        background-color: white;
        bottom: 0;
        right: -1rem;
    }
    .round::after {
        content: "";
        width: 1.8rem;
        height: 1.8rem;
        position: absolute;
        background-color: #318DE1;
        bottom: 0;
        right: -1.8rem;
        border-radius: 1.8rem
    }
</style>