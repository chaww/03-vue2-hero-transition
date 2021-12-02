import _Vue from "vue";

interface Hero {
  hero: {
    [key: string]: {
      element: HTMLElement,
    }
  },
  inUse: [],
  cloneElement(key: string, origin: HTMLElement): void,
  animatedByElement(key: string, destination: HTMLElement, options: AnimatedOptions): void,
  cleanup(): void,
}

interface AnimatedOptions {
  cssReferences?: string[]
}

declare module 'vue/types/vue' {
  interface Vue {
    $hero: Hero
  }
}

export default {
  install: (Vue: typeof _Vue, options?: any) => {
    Vue.prototype.$hero = {
      hero: {},
      inUse: [],
      cloneElement: function (key: string, origin: HTMLElement) {

        this.hero[key] = {
          element: origin.cloneNode(true) as HTMLElement
        }
        const hero = this.hero[key].element

        hero.style.position = "absolute";
        hero.style.margin = "0";
        const viewportOffset = origin.getBoundingClientRect();
        hero.style.top = viewportOffset.top + window.scrollY + "px";
        hero.style.left = viewportOffset.left + window.scrollX + "px";
        hero.style.width = viewportOffset.width + 'px';
        hero.style.height = viewportOffset.height + "px";
        hero.style.transition = "all 0.7s";

        const heroDOM = document.getElementById("hero") as HTMLElement;
        heroDOM.style.zIndex = "1";
        heroDOM.style.visibility = "visible";
        heroDOM.appendChild(hero);

        origin.style.visibility = "hidden";

        const originStyle = window.getComputedStyle(hero);
        const originTransitionDuration = originStyle.getPropertyValue('transition-duration')
        const duration = parseFloat(originTransitionDuration) * 1000;

        setTimeout(() => {
          const heroDOM = document.getElementById("hero") as HTMLElement;
          heroDOM.style.zIndex = "-1";
          heroDOM.style.visibility = "hidden";
          hero.remove()
          delete this.hero[key];
        }, duration);

      },
      animatedByElement: function (key: string, elementDestination: HTMLElement, options?: AnimatedOptions) {
        if (this.hero[key]) {

          const hero = this.hero[key].element;

          const viewportOffset = elementDestination.getBoundingClientRect();
          hero.style.top = viewportOffset.top + window.scrollY + "px";
          hero.style.left = viewportOffset.left + window.scrollX + "px";
          hero.style.width = viewportOffset.width + 'px';
          hero.style.height = viewportOffset.height + "px";

          elementDestination.style.visibility = "hidden";

          if (options?.cssReferences) {
            const style = window.getComputedStyle(elementDestination);
            options.cssReferences.forEach(cssRef => {
              const value = style.getPropertyValue(cssRef)
              this.hero[key].element.style.setProperty(cssRef, value)
            });
          }

          const originStyle = window.getComputedStyle(hero);
          const originTransitionDuration = originStyle.getPropertyValue('transition-duration')
          const duration = parseFloat(originTransitionDuration) * 1000;

          setTimeout(() => {
            elementDestination.style.visibility = "visible";
          }, duration);

        } else {
          console.error('hero element not found')
        }
      },
    } as Hero;
  },
};