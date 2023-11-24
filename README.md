# Svelte Tailwind Sidebars Problem

This repo demonstrates what I believe to be a bug in either Svelte or Tailwind.

When using a dynamic layout component on which one can set both `breakpoint` and `side`, the resulting CSS... just doesn't work. It's like some classes aren't generated.

As a control, I have also created fixed left and right versions of this sidebar layout which works fine.
