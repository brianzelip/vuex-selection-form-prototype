# vuex-selection-form-prototype

Sandbox space for getting Vuex working in the context of a form that presents a list of items that a user can select/deselect.

Made in response to getting stuck in my [groceries-vue repo](https://github.com/brianzelip/groceries-vue).

Built from scratch using Parcel Bundler with only the minimal amount of node modules.

---

## v1.0.0 🎉 🚢

As of [commit #9b9e5cf](#9b9e5cf), the goal of this repo has been achieved. I've pivoted from hacking on [groceries-vue](/groceries-vue) because of getting stuck on not getting the Vuex store to be reactive. After diving into Vuex more with this project, I'm ready to resume dev work on groceries-vue.

First order of business on pivoting back to groceries-vue: REWRITE THE STORE!

### notes

The docs that started me out in the direction toward success was [this bit on Vuex mutations](https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules):

> 2. When adding new properties to an Object, you should either:
>
> - Use Vue.set(obj, 'newProp', 123), or
> - Replace that Object with a fresh one. For example, using the
>   object spread syntax we can write it like this: `state.obj = { ...state.obj, newProp: 123 }`

Vue v1 docs also provided insight via [Change Detection Caveats](https://v1.vuejs.org/guide/reactivity.html#Change-Detection-Caveats).

The v1 docs then lead me to look to the API docs for methods like [`Vue.set()`](https://vuejs.org/v2/api/#Vue-set) and [`Vue.delete()`](https://vuejs.org/v2/api/#Vue-delete).

Also, as a best practice for consistency as suggested by the author of the Udemy course 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)', all mutations are committed via Actions, even for non async functions.
