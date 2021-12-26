<div class="w-full bg-blue-500 rounded-lg relative p-4 sssm:p-8 ssm:p-16 shadow-md">
    <div class="inline-flex flex-col w-full ssm:w-auto">
        <div class="bg-white text-rose-500 pt-4 530:pt-6 px-6 530:px-10 inline relative w-min text-5xl 530:text-6xl 700:text-7xl xl:text-8xl font-bold tracking-wide rounded-t-2xl round ">Unified</div>
        <div class="bg-white text-gray-700 w-full ssm:w-auto block py-4 530:py-6 px-6 530:px-10 text-2xl 390:text-3xl 530:text-4xl 700:text-5xl xl:text-6xl font-medium tracking-wide rounded-b-2xl rounded-tr-2xl">Icons Framework</div>
    </div>
    <p class="text-white text-xl sssm:text-xl ssm:text-2xl xl:text-3xl leading-7 sssm:leading-8 ssm:leading-10 tracking-wide mt-8">One library, over 100,000 vector icons.
        <br class="hidden 700:inline" />Modern replacement for icon fonts.  Fast, easy to use.</p>
    <form action="/search" class="mt-10 flex w-full md:w-9/12 lg:w-5/12 overflow-hidden rounded-md shadow-md">
        <input autocomplete="off" name="q" type="text" class="bg-white w-full px-6 py-3 ssm:py-5 text-xl ssm:text-2xl tracking-wide" placeholder="Search icons...">
        <button type="submit" class="bg-red-1000 py-4 px-6">
            <svg class='mt-1 w-6 h-6 ssm:w-8 ssm:h-8' width="32" height="28" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6786 14.8369L17.4286 8.33691L10.6786 1.83691" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.4286 8.33691L2.00002 8.33691" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </form>
    <img src="./assets/hero.svg" alt="hero design" class="absolute right-0 top-0 h-full hidden lg:block">
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