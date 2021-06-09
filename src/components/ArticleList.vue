<template>
    <div>
        <ArticleItem 
            v-on:save_lang="save_lang"
            v-on:save_text="save_text"
            v-on:save_tonality="save_tonality"
            :article="article" 
            :key="article.id" 
            :instrument="instrument"/>
        <b-button-group class="mr-5 mt-3 ">
            <b-button  variant="success" v-on:click="save_article">Save Article</b-button>
        </b-button-group>
        <b-button-group class="ml-5 mt-3">
            <b-button  variant="primary" v-on:click="next_article">Next Article</b-button>
        </b-button-group>
    </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'


export default {
    props: ['articles', 'current_article', 'instrument'],
    components: {
        ArticleItem
    },
    data: function(){
        return {
            article: this.articles[this.current_article],
            current_counter: this.current_article,
            temp_article: {
                id: -1,
                title: "",
                text: "",
                language: "",
                tonality: ""
            }
        }
    },
    methods: {
        next_article: function(){
            this.current_counter += 1
            if (this.current_counter > this.articles.length - 1) {
                this.current_counter= 0
            }
            this.article = this.articles[this.current_counter]
        }, 
        save_article: function(){
            console.log(this.temp_article)

        },
        save_lang: function(lang) {
            this.temp_article.language = lang
        },

        save_text: function(text) {
            this.temp_article.text = text
        },

        save_tonality: function(tonality) {
            this.temp_article.tonality = tonality

        }

    }
}
</script>
<style scoped>

</style>