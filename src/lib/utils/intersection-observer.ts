import type { Action } from "svelte/action";
import { activeLinkStore } from "$lib/stores/active-link-store";

export const intersectionObserverAction: Action = (node) => {
    const elementType = node.id;

    if(window.IntersectionObserver !== undefined) {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                activeLinkStore.set(elementType);
            }
        }, 
        {
            threshold: 0.2
        }) 

        observer.observe(node);

        return {
            destroy() {
                observer.unobserve(node);
            }
        }
    }
    
}