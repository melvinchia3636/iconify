<script>
  import Paragraph from "../Utils/Paragraph.svelte";
</script>

<div class="w-full px-0 md:px-16">
  <p class=" font-medium text-base sm:text-xl mb-2 text-center tracking-wide">
    Compatibility
  </p>
  <h2 class="text-3xl sssm:text-4xl sm:text-5xl font-semibold tracking-wide  text-center mb-6 lg:mb-12">
    Iconify in different browsers
  </h2>
  <Paragraph>
    <div>
      Iconify supports all modern browsers.
      <br /><br />
      Older browsers that are supported:
      <br /><br />
      <ul class="list-disc">
        <li class="ml-8">Internet Explorer 9 and newer.</li>
        <li class="ml-8">iOS Safari for iOS 8 and newer.</li>
        <li class="ml-8">Opera Mini and UC Browser are not supported.</li>
      </ul>
      <br />
      IE 9, 10 and iOS 8 Safari do not support some modern functions that Iconify
      relies on. Iconify will automatically load polyfills for those browsers. All
      newer browsers do not require those polyfills.
      <br /><br />
      Goal of Iconify is to offer unified icon framework for multiple platforms.
      Currently Iconify is available only as JavaScript library for browsers, React
      and Angular components.
      <br /><br />
      If you use HTML or CSS syntax, Iconify loads icons from Iconify API. To use
      Iconify without relying on Iconify API there is possibility to
      <a>host custom API</a>
      and <a>bundle icons with custom scripts</a>.
      <br /><br />
      Additionally you can copy or download SVG code. You can use it in editors (if
      you are using Sketch, check out <a>Iconify plug-in for Sketch</a>) or
      embed SVG directly into pages instead of using Iconify JavaScript.
      <br /><br />
      See <a href="/">about</a> page to learn more about Iconify and project goals.
    </div>
  </Paragraph>
</div>
