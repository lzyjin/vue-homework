<template>
  <div>
    <h1>
      <span style="cursor: pointer" @click="$router.go(-1)">&lt;</span>&nbsp;&nbsp;
      문자 인증 3분 컷
    </h1>
    <div v-if="isCompleted">인증 완료!</div>
    <div v-else>
      <div class="button-wrap">
        <button class="send" v-on:click="sendNum">인증번호 발송</button>
        <button class="send" v-on:click="sendNum">재발송</button>
      </div>
      인증번호 <input type="text" v-model.trim="text" placeholder="숫자 4자리 입력">
      <!-- <p>{{ time.getMinutes() + ':' + time.getSeconds() }}</p>-->
      <p class="timer">{{ timer }}</p>
      <button class="save" v-bind:class="{ active: state }" v-on:click="checkNum">확인</button>
    </div>
  </div>
</template>

<script>
/*
문자메시지 3분 인증
1. 인증하기를 누르면 3분 카운트 다운 시작
2. 00:00이 되기 전 1234를 입력하면 alert(인증되었습니다.) + 카운트 멈춤
3. 1234이 아니면 틀렸습니다. alert , 카운트 그대로
4. 00:00이 되면 인증하기 버튼을 재발송으로
5. 재발송을 누르면 3분 인증 처음 시작으로
 */

export default {
  name: 'end_talk',
  beforeMount() {

  },
  data() {
    return {
      // time: 180000,
      time: new Date('2000-01-01 00:03:00'),
      timer: '3:00',
      text: '',
      interval: '',
      state: false,
      isCompleted: false,
    };
  },
  watch: {
    text() {
      if (this.text.length === 4) {
        this.state = true;
      } else {
        this.state = false;
      }
    },
  },
  methods: {
    sendNum() {
      clearInterval(this.interval); // 이전에 남아있는 interval 해제
      // eslint-disable-next-line no-alert
      alert('인증번호가 발송되었습니다.');
      this.interval = setInterval(() => {
        // this.time -= 1;

        // 초 빼기 참고한 블로그: https://hianna.tistory.com/330
        this.time.setSeconds(this.time.getSeconds() - 1);
        this.timer = `${this.time.getMinutes()}:${this.time.getSeconds()}`;
      }, 1000);
    },
    checkNum() {
      if (this.text !== '1234') {
        alert('인증번호가 다릅니다.');
        this.text = '';
      }
      if (this.text === '1234') {
        if (this.time.getMinutes() === 0 && this.time.getSeconds() === 0) {
          clearInterval(this.interval);
          this.time = new Date('2000-01-01 00:03:00');
          alert('시간이 만료되었습니다. 재발송하세요.');
          this.text = '';
        } else {
          clearInterval(this.interval);
          this.time = new Date('2000-01-01 00:03:00');
          alert('인증되었습니다.');
          this.text = '';
          this.isCompleted = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.button-wrap {
  display: flex;
  gap: 10px;
}
.send {
  display: inline-block;
  cursor: pointer;
  padding: 10px 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 10px;
}
.save {
  cursor: pointer;
  display: inline-block;
  padding: 20px 100px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 18px;
}
.save.active {
  background: #253de0;
  color: #fff;
}
.timer {
  color: red;
  font-weight: bold;
}
</style>
