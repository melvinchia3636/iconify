<script>
    import Paragraph from '../Utils/Paragraph.svelte';
</script>

<div class="w-full px-0 md:px-16">
    <p class="text-stone-600 font-medium text-xl ssssm:text-2xl text-center tracking-wide">Get Started</p>
    <h2 class="text-4xl ssssm:text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-zinc-600 dark:text-stone-600 text-center mb-6 lg:mb-12">How to use Iconify</h2>
    <Paragraph>
        <div class="text-lg ssssm:text-xl">
            Iconify is very easy to use: add one {'<script>'} tag in head section of your document or before {'</body>'} to include Iconify:
        </div>
    </Paragraph>
    <div class="bg-stone-600 text-zinc-600 dark:text-stone-600 py-4 px-5   mt-4 mb-8">
        <code class="break-words">&lt;<span style="all: inherit; color: rgb(49, 141, 225)">script</span> src="<span style="all: inherit; color: rgb(225, 62, 49); text-decoration: underline; text-decoration-thickness: 1px;">https://code.iconify.design/2/2.1.0/iconify.min.js</span>"&gt;&lt;/<span class="text-stone-600" style="all: inherit; color: rgb(49, 141, 225)">script</span>&gt;</code>
    </div>
    <Paragraph>
        <div class="text-lg ssssm:text-xl">
            Then add icons to your page with simple code like this: 
        </div>
    </Paragraph>
    <div class="bg-stone-600 text-zinc-600 dark:text-stone-600 py-4 px-5   mt-4 mb-8">
        <code>
            &lt;<span style="all: inherit; color: rgb(49, 141, 225)">span</span> class="<span style="all: inherit; color: rgb(225, 62, 49);">iconify</span>" data-icon="<span style="all: inherit; color: rgb(225, 62, 49);">fa:home</span>"&gt;&lt;/<span style="all: inherit; color: rgb(49, 141, 225)">span</span>&gt;
            <br/>
            &lt;<span style="all: inherit; color: rgb(49, 141, 225)">span</span> class="<span style="all: inherit; color: rgb(225, 62, 49);">iconify</span>" data-icon="<span style="all: inherit; color: rgb(225, 62, 49);">noto:bird"</span>&gt;&lt/<span style="all: inherit; color: rgb(49, 141, 225)">span</span>&gt;
        </code>
    </div>
    <Paragraph>
        <div class="text-lg ssssm:text-xl">
            If you do not want to use script, Iconify is available as <a>React</a>, <a>Vue</a>, <a>Svelte</a> and <a>Ember components</a>. Also there are tools available for developers to render SVG (<a>for PHP</a>, <a>for Node</a>) and to <a>convert icons</a>. 
        </div>
    </Paragraph>
</div>
