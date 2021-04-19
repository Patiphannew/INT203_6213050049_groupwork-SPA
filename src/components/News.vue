<template>
  <div>
    <div>{{ news.date }}</div>
    <div>{{ news.title }}</div>
    <div class="text-gray-600 text-xs flex justify-end">
      <span class="cursor-pointer" @click="edit">edit</span> &nbsp;|&nbsp;
      <span class="cursor-pointer" @click="remove">delete</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],

  methods: {
    remove() {
      this.$emit("news-delete", this.news)
    },
    edit() {
      this.$emit("news-edit", this.news)
    }
  },
}
</script>
