<script lang="ts">
  import clsx from "clsx";

  export let breakpoint: "md" | "lg" | "xl" = "md";
  export let side: "left" | "right" = "left";

  const containerClass = clsx(
    "w-full",
    "flex",
    side === "left" ? "flex-row" : "flex-row-reverse",
  );

  const sidebarWrapperClasses = clsx(
    "group",
    "absolute",
    "top-0",
    `${side}-0`,
    "z-50",
    "h-screen",
    "w-16",
    "overflow-hidden",
    "duration-100",
    "hover:w-96",
    `${breakpoint}:relative`,
    `${breakpoint}:top-auto`,
    `${breakpoint}:w-96`,
    `${breakpoint}:${side}-auto`,
  );

  const minimizedClasses = clsx(
    "absolute",
    "block",
    `${side}-0`,
    "top-0",
    "h-full",
    "w-full",
    "opacity-100",
    "transition-opacity",
    "duration-500",
    "group-hover:opacity-0",
    `${breakpoint}:hidden`,
  );

  const maximizedWrapperClasses = clsx(
    "absolute",
    `${side}-0`,
    "top-0",
    "hidden",
    "h-screen",
    "w-full",
    "group-hover:block",
    `${breakpoint}:block`,
  );

  const maximizedClasses = clsx(
    "flex",
    "h-screen",
    "flex-col",
    "opacity-0",
    "transition-opacity",
    "duration-500",
    "hover:opacity-100",
    `${breakpoint}:opacity-100`,
  );

  const contentClasses = clsx(
    "h-screen",
    "grow",
    "overflow-auto",
    side === "left"
      ? ["ml-16", `${breakpoint}:ml-0`]
      : ["mr-16", `${breakpoint}:mr-0`],
  );

  console.log({
    sidebarWrapperClasses,
    minimizedClasses,
    maximizedWrapperClasses,
    maximizedClasses,
    contentClasses,
  });
</script>

<div class={containerClass}>
  <div class={sidebarWrapperClasses}>
    <div class={minimizedClasses}>
      <div
        class="flex h-full flex-col items-center gap-4 transition-all duration-200 group-hover:hidden"
      >
        <slot name="minimized" />
      </div>
    </div>

    <div class={maximizedWrapperClasses}>
      <div class={maximizedClasses}>
        <slot name="maximized" />
      </div>
    </div>
  </div>
  <div class={contentClasses}>
    <slot />
  </div>
</div>
