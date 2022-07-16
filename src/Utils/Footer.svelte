<script>
  import Icon from "@iconify/svelte";
</script>

<footer
  class="text-sm ssssm:text-base py-4 px-12 w-full mt-16 text-stone-100 flex flex-col gap-4 md:flex-row justify-between items-center bg-stone-600"
>
  <div class="flex gap-8">
    <Icon icon="fluent:home-20-filled" width="20" height="20" color="rgb(255,255,244)" />
    <Icon icon="fluent:news-20-filled" width="20" height="20" color="rgb(255,255,244)" />
    <Icon icon="fluent:icons-20-filled" width="20" height="20" color="rgb(255,255,244)" />
    <Icon icon="fluent:book-information-20-filled" width="20" height="20" color="rgb(255,255,244)" />
    <Icon icon="ant-design:github-filled" width="20" height="20" color="rgb(255,255,244)" />
  </div>
  <p class="tracking-wide flex gap-2 items-center justify-center">
    © 2020, 2021 Iconify OÜ · <a class="text-stone-100 underline" href="/"
      >About</a
    >
    · <Icon icon="akar-icons:linkedin-fill" width="20" height="20" color="rgb(255,255,244)" />
  </p>
</footer>

<style lang="scss">
  p, path {
    color: rgb(255, 255, 244) !important;
    fill: rgb(255, 255, 244) !important;
  }
</style>
