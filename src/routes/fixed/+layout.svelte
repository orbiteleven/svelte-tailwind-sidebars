<script lang="ts">
  import SidebarLayout from "$lib/sidebar-layout.svelte";
  import SidebarLeft from "$lib/sidebar-left.svelte";
</script>

<SidebarLeft>
  <div class="h-full w-full bg-red-500 p-2" slot="minimized">Closed</div>
  <div slot="maximized" class="flex h-full flex-col bg-red-500 p-2 lg:p-4">
    Open
  </div>
  <slot />
</SidebarLeft>
