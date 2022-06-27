<template>
  <div>
      <h1>
        <span style="cursor: pointer" @click="$router.go(-1)">&lt;</span>&nbsp;
        &nbsp; 노래 가사 속 단어 찾기
      </h1>
    <form action="" class="">
      <input type="text" name="" v-model="word">
      <span><b>{{countWord}}</b> 개의 단어 일치</span>
    </form>
    <div class="lyrics">
      <!-- \n을 <br>로 바꾸는건 생각해냈는데 문자열형태가 아닌 태그형태로 출력하는 방법을 몰라서 vue.js 사이트에서 검색함 -->
      <p v-html="lyricsHtml"></p>
    </div>
  </div>
</template>

<script>
import lyrics from '@/views/findWord/lyrics.json';
/**
 * import lyrics from '@/views/findWord/lyrics.json'; 를 사용해서 json을 가져올 것
 * computed를 사용해서 문제를 해결할 것
 */
export default {
  name: 'find_word',
  data() {
    return {
      word: '',
      lyricsArray: lyrics.lyrics.replaceAll('\n', '<br> ').split(' '),
    };
  },
  computed: {

    countWord() {
      const result = [];
      this.lyricsArray.forEach((v, i) => {
        if (this.word && v.includes(this.word)) {
          result.push(i);
        }
      });
      return result.length;
    },

    lyricsHtml() {
      let result = '';
      this.lyricsArray.forEach((v) => {
        if (this.word && v.includes(this.word)) {
          result += (`<span style="color: red;">${v} </span>`);
        } else {
          result += (`<span>${v} </span>`);
        }
      });
      return result;
    },
  },
};
</script>

<style scoped>
.lyrics {
  margin-top: 10px;
}
form span {
  margin-left: 10px;
}
form span b {
  color: #ff0000;
}
</style>
