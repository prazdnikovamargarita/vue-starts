<template>
    <div>
        <Navbar :show="true"/>
        <div class="container">
            <h5 class="text-left mt-4 ">Select instruments:</h5>
            <div class="instruments mb-4 pt-4 pb-4">
                <div class="form-check-inline" >
                    <label for="1" class="form-check-label person pr-sm-2">
                        <input type="radio" class="ml-sm-2 my-auto" name="ner" id="1" value="ner-per" v-model="instrument">
                        Person
                    </label>
                </div>
                <div class="form-check-inline">
                    <label for="2" class="form-check-label location pr-sm-2">
                        <input type="radio" class="ml-sm-2 my-auto" name="ner" id="2" value="ner-loc" v-model="instrument">
                        Location
                    </label>
                </div>
                <div class="form-check-inline">
                    <label for="3" class="form-check-label organization pr-sm-2">
                        <input type="radio" class="ml-sm-2 my-auto" name="ner" id="3" value="ner-org" v-model="instrument">
                        Organization
                    </label>
                </div>
                <div class="form-check-inline">
                    <label for="4" class="form-check-label date pr-sm-2">
                        <input type="radio" class="ml-sm-2 my-auto" name="ner" id="4" value="ner-date" v-model="instrument">
                        Date
                    </label>
                </div>
                <div class="form-check-inline">
                    <label for="5" class="form-check-label nationality pr-sm-2">
                        <input type="radio" class="ml-sm-2 my-auto" name="ner" id="5" value="ner-nat" v-model="instrument">
                        Nationality
                    </label>
                </div>
                <div class="form-check-inline">
                    <label for="6" class="form-check-label title pr-sm-2">
                        <input type="radio" class="ml-sm-2 my-auto" name="ner" id="6" value="ner-title" v-model="instrument">
                        Title
                    </label>  
                </div>
            </div>
            <ArticleList
            v-bind:articles="articles" v-bind:current_article="current_article" :instrument="instrument"
            />
        </div>
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  data () {
    return {
      articles: [
        {id: 1, title: "Microsoft Corporation", text: "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. Founded in January 2020. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.", language: "en", tonality: "neutral" },
        {id: 2, title: "test 2", text: "Oracle buy smth", language: "en", tonality: "neutral" },
        {id: 3, title: "test 3", text: "Samsung buy smth", language: "en", tonality: "neutral" }
      ],
      instrument: "ner-per",
      current_article: 0
    }
  },
  components: {
    ArticleList, Navbar
  },
  watch: {
      instrument(value) {
          console.log(value)
      }
  }
}
</script>

<style scoped>
.person {
    background-color: rgb(240, 146, 146);
    border: 1px solid rgb(240, 146, 146);
    border-radius: 7px;
    }
.location {
    background-color: rgb(175, 226, 93);
    border: 1px solid rgb(175, 226, 93);
    border-radius: 7px;
    }
.organization {
    background-color: rgb(92, 229, 247);
    border: 1px solid rgb(92, 229, 247);
    border-radius: 7px;
    }
.date{
    background-color: rgb(203, 120, 252);
    border: 1px solid rgb(203, 120, 252);
    border-radius: 7px;
    }
.nationality {
    background-color: rgb(243, 187, 84);
    border: 1px solid rgb(243, 187, 84);
    border-radius: 7px;
    }
.title {
    background-color: rgb(255, 241, 43);
    border: 1px solid rgb(255, 241, 43);
    border-radius: 7px;
    }
.instruments {
    border: 1px solid #ccc;
    border-radius: 20px;
}
</style>