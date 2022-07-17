<template>
  <div>
      <h1> <span style="cursor: pointer" @click="$router.go(-1)">&lt;</span>&nbsp;&nbsp; 끝말 잇기</h1>

    <div>
      <p class="score-time"><span>점수: {{ score }}</span><span>시간: {{ time }}</span></p>
      <p>단어: {{ prevText }}</p>
      <div>
        <span>{{ myTurn ? '나' : '컴퓨터' }}: </span>
        <input type="text" v-model="currText" v-on:keyup.enter="send">
        <button v-on:click="send">입력</button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 필요하다면 vue의 lifecyclehook을 사용할 것
 * 필요하다면 watch를 사용할 것
 * methods를 사용할 것
 */
export default {
  name: 'end_talk',
  beforeMount() {
  },
  watch: {
  },
  data() {
    return {
      myTurn: true,
      score: 0,
      time: 10,
      prevText: '강아지',
      currText: '',
    };
  },
  methods: {
    send() {
      const interval = setInterval(() => {
        // setTimeout(() => {
        //   if (this.time > 0) {
        //     this.time -= 1;
        //   } else {
        //     // interval 클리어 하고싶음
        //     this.myTurn = !this.myTurn;
        //     this.time = 10;
        //   }
        //   console.log(this.time);
        // }, 1000);
        if (this.time > 0) {
          this.time -= 1;
        } else {
          // interval 클리어 하고싶음
          this.myTurn = !this.myTurn;
          this.time = 10;
        }
        console.log(this.time);
      }, 1000);
      console.log(interval);
      // clearInterval(interval);

      if (this.prevText.slice(-1) === this.currText.slice(0, 1)) {
        if (this.myTurn) {
          alert('잘했어요!');
          this.score += 10;
        }
        this.prevText = this.currText;
        this.currText = '';
        this.myTurn = !this.myTurn;
        this.time = 10;
      }
    },
  },
};
</script>

<style scoped>
  .score-time {

  }
  .score-time span {
    display: inline-block;
    margin-right: 20px;
  }
</style>
