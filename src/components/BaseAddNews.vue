<template>
    <div class="w-full border-red-700 border-2 mt-5 px-2 py-2">
        <div class="text-xl">{{ editing ? 'Edit News' : 'Add News' }}</div>
        <div class="mt-1">
            <label for="date">Insert Date &nbsp;</label>
            <input v-model.trim="date" id="date" class="border-red-700 border-2" />
        </div>
        <div class="mt-1 mb-1">
            <label for="title">Insert Title</label>
            <br />
            <textarea v-model.trim="title" id="title" class="border-red-700 border-2 w-full h-28" />
        </div>
        <div>
            <label for="type">Insert type of News</label>
            <br />
            <select v-model.trim="type" id="type" class="border-red-700 border-2">
                <option value="motors" selected>Racing News</option>
                <option value="cars">Products & Corporate News</option>
            </select>
            <div v-if="validtype" class="text-red-600">Please enter the news type!!!</div>
        </div>
        <input @click="submit" type="submit" value="Submit" class="mt-1 px-1 py-0.5 cursor-pointer" />
        <input
            @click="clear"
            type="submit"
            value="Cancel"
            class="mt-1 px-1 py-0.5 ml-3 cursor-pointer"
        />
    </div>
</template>
<script>
export default {
    props: ["editing", "newsedit"],
    data() {
        return {
            date: this.newsedit.date,
            title: this.newsedit.title,
            type: this.newsedit.type,
            validtype: false,
        }
    },
    methods: {
        submit() {
            if (this.type !== "" && this.type !== undefined) {
                console.log(this.type);
                this.validtype = false;
                if (this.editing) {
                    this.$emit("news-edit", {
                        date: this.date,
                        title: this.title,
                        type: this.type,
                        id: this.newsedit.id,
                    })
                }
                else {
                    this.$emit("news-add", {
                        date: this.date,
                        title: this.title,
                        type: this.type,
                    })
                }
                this.clear()
            }
            else {
                this.validtype = true;
            }
        },
        clear() {
            this.date = ""
            this.title = ""
            this.type = ""
            this.$emit("news-clear", false)
        }
    },
}
</script>