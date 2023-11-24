<script lang="ts">
  import Content from "$lib/content.svelte";
  import SidebarLayout from "$lib/sidebar-layout.svelte";
</script>

<SidebarLayout breakpoint="lg" side="right">
  <div class="h-full w-full bg-blue-500 p-2" slot="minimized">Closed</div>
  <div slot="maximized" class="flex h-full flex-col bg-blue-500 p-2 lg:p-4">
    Open
  </div>

  <Content />
</SidebarLayout>
