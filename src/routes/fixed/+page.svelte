<script lang="ts">
  import Content from "$lib/content.svelte";
  import SidebarRight from "$lib/sidebar-right.svelte";
</script>

<SidebarRight>
  <div class="h-full w-full bg-blue-500 p-2" slot="minimized">Closed</div>
  <div slot="maximized" class="flex h-full flex-col bg-blue-500 p-2 lg:p-4">
    Open
  </div>

  <Content />
</SidebarRight>
