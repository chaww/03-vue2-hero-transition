# Hero1

## how to use

`main.ts`

```
import hero1 from './plugin/hero1'

Vue.use(hero1);
```

register into `beforeDestroy` hook component a

```
beforeDestroy() {
  this.$hero.cloneElement("a3", this.$refs["a3"] as HTMLElement);
}
```

register into `mounted` hook component b

```
mounted() {
  let cssRef = ["background-color", "height", "width"];
  let options = { cssReferences: cssRef };
  this.$hero.animatedByElement("a3", this.$refs["a"] as HTMLElement, options);
}
```