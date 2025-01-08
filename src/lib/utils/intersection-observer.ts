import type { Action } from "svelte/action";
import { store } from "$lib/stores/global-store.svelte";
export const intersectionObserverAction: Action = (node) => {
  const elementType = node.id;

  if (window.IntersectionObserver !== undefined) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          store.activeLink = elementType;
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      },
    };
  }
};
