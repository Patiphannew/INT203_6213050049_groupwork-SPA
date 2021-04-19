<template>
  <div class="content h-auto mx-auto bg-white justify-center">
    <div>
      <img width="900" src="../assets/Cars-1.jpg" alt="Cars-1" />
    </div>
    <div class="w-full h-auto flex flex-row px-2 justify-center text-xs">
      <div class="w-1/2 h-auto flex flex-col justify-start border-gray-200 border-r-2">
        <div class="mx-2">
          <img src="../assets/bnr_motorsports.gif" alt="MOTORSPORTS" class="w-80" />
          <img src="../assets/h2_2013top01.gif" alt="RACING NEWS" class="w-80" />
          <div v-for="n in typefilter('motors')" :key="n.id">
            <News
              @news-delete="remove"
              @news-edit="mod"
              :news="n"
              class="border-b-2 border-gray-100"
            ></News>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-screen flex flex-col justify-start">
        <div class="mx-2">
          <img src="../assets/bnr_products.gif" alt="PRODUCTS & CORPORATE" class="w-80" />
          <img src="../assets/h2_2013top02.gif" alt="PRODUCT & CORPORATE NEWS" class="w-80" />
          <div v-for="n in typefilter('cars')" :key="n.id">
            <News
              @news-delete="remove"
              @news-edit="mod"
              :news="n"
              class="border-b-2 border-gray-100"
            ></News>
          </div>
          <div v-if="!editing">
            <base-add-news
              @news-add="add"
              :editing="editing"
              :newsedit="newsedit"
              @news-clear="clearform"
            ></base-add-news>
          </div>
          <div v-else>
            <base-add-news
              :editing="editing"
              :newsedit="newsedit"
              @news-clear="clearform"
              @news-edit="edit"
            ></base-add-news>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.icon {
  font-size: 17px;
}
body {
  background-image: url("../assets/bg_main.png");
}
.content {
  width: 860px;
  font-weight: bold;
}
</style>
<script>
import News from '../components/News.vue'
export default {
  components: {
    News,
  },
  data() {
    return {
      news: [],
      url: "http://localhost:5000/news",
      editing: false,
      newsedit: [],
    }
  },
  methods: {
    mod(news) {
      if (this.editing) {
        alert("You're going to edit another News,please clear first!")
      }
      else {
        this.editing = true
        this.newsedit = news
      }
    },
    clearform(clear) {
      this.editing = clear
      this.newsedit = []
    },
    typefilter(type) {
      console.log(this.news.filter(t => t.type.toLowerCase().includes(type.toLowerCase())));
      return this.news.filter(t => t.type.toLowerCase().includes(type.toLowerCase())).reverse();
    },
    async fetch() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async add(news) {
      try {
        const res = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            date: news.date,
            title: news.title,
            type: news.type,
          })
        })
        const data = await res.json()
        this.news = [...this.news, data]
      } catch (error) {
        console.log(error)
      }
    },
    async remove(news) {
      try {
        await fetch(`${this.url}/${news.id}`, {
          method: 'DELETE'
        })
        this.news = this.news.filter((i) => i.id !== news.id)
      } catch (error) {
        console.log(error)
      }
    },
    async edit(news) {
      try {
        const res = await fetch(`${this.url}/${news.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            date: news.date,
            title: news.title,
            type: news.type,
          })
        })
        const data = await res.json()
        this.news = this.news.map((i) =>
          i.id === data.id
            ? {
              ...i,
              date: data.date,
              title: data.title,
              type: data.type,
            }
            : i
        )
        this.clear()
      } catch (error) {
        console.log(error)
      }
    }
  },
  async created() {
    this.news = await this.fetch()

  }
}
</script>