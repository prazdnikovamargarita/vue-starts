<template>
    <div>
        <h3 class="text-left">{{article.title}}</h3>
        <p class="text-left" @mouseup="selectedEvent" v-html="text"></p>
        <div class="row">
            <div class="col mx-auto">
                <b-form-select name="language" v-model="language" :options="lang_options" v-on:change="change_language"></b-form-select>
            </div>
            <div class="col mx-auto">
                <b-form-select name="tonality" v-model="tonality" :options="sentimental_options" v-on:change="change_tonality"></b-form-select>
            </div>
        </div>
        
        
    </div>   
</template>

<script>

export default {
    props: {
        article: {
            type: Object,
            required: true
        },
        instrument: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            text: this.article.text,
            language: this.article.language,
            tonality: this.article.tonality,
            lang_options: [
                {value: "en", text: "English"},
                {value: "uk", text: "Українська"},
                {value: "ru", text: "Русский"}
            ],
            sentimental_options: [
                {value: "negative", text: "Negative"},
                {value: "neutral", text: "Neutral"},
                {value: "positive", text: "Positive"},
            ]
        }
    },
    methods: {
        selectedEvent: function(){
                const selectedArea = document.getSelection()
                if (!selectedArea.isCollapsed) {
                    console.log(selectedArea)
                    let selectedText = selectedArea.toString();
                    
                    console.log(selectedText)
                    

                    this.text = this.text.replaceAll(selectedText, `<${this.instrument}>` + selectedText + `</${this.instrument}>`);
                    selectedArea.empty()
                    this.$emit("save_text", this.text)
                }
                
            },
        change_language: function() {
            this.$emit("save_lang", this.language)

        },
        change_tonality: function() {
            this.$emit('save_tonality', this.tonality)
        }
        
    }
}
</script>

<style scoped>

</style>