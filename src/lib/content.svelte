<script>
  import { page } from "$app/stores";
</script>

<h3 class="text-2xl font-bold">Examples:</h3>
<ul class="menu">
  <li>
    <a class:active={$page.url.pathname === "/dynamic"} href="/dynamic"
      >Dynamic Sidebar</a
    >
  </li>
  <li>
    <a class:active={$page.url.pathname === "/fixed"} href="/fixed"
      >Fixed variables sidebar</a
    >
  </li>
</ul>

<h3 class="text-2xl font-bold">Breakpoint:</h3>
<div class="card hidden sm:block">SM</div>
<div class="card hidden md:block">MD</div>
<div class="card hidden lg:block">LG</div>
<div class="card hidden xl:block">XL</div>

<div class="card sm:hidden block">!SM</div>
<div class="card md:hidden block">!MD</div>
<div class="card lg:hidden block">!LG</div>
<div class="card xl:hidden block">!XL</div>
