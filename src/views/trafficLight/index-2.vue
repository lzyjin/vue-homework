<template>
  <div>
    <h1>
      <span style="cursor: pointer" @click="$router.go(-1)"></span>
      &nbsp;신호등 - 코드 개선
    </h1>
    <div class="trafficLight" >
      <!-- <div class="light">{{lightActive('red')}}</div> -->
      <!-- <div class="light">{{lightActive('yellow')}}</div> -->
      <!-- <div class="light"> {{lightActive('green')}}</div> -->
      <div class="light" v-bind:class="lightActive('red') ? 'red' : ''"></div>
      <div class="light" v-bind:class="lightActive('yellow') ? 'yellow' : ''"></div>
      <div class="light" v-bind:class="lightActive('green') ? 'green' : ''"></div>
    </div>
    <div class="button-wrap">
      <div class="button" v-bind:class="light==='red' ? 'active' : ''"
           v-on:click="turnOn('red')">빨간불</div>
      <div class="button" v-bind:class="light==='yellow' ? 'active' : ''"
           v-on:click="turnOn('yellow')">노란불</div>
      <div class="button" v-bind:class="light==='green' ? 'active' : ''"
           v-on:click="turnOn('green')">초록불</div>
      <div class="button" v-bind:class="light==='auto' ? 'active' : ''"
           v-on:click="turnOn('auto')">자동</div>
    </div>
  </div>
</template>

<script>
/**
 * methods를 사용할 것
 */
export default {
  name: 'traffic_light',
  data() {
    return {
      light: '',
    };
  },
  methods: {
    turnOn(color) {
      if (color === 'auto') {
        this.$nextTick(() => { // red만 안바뀌어서 상현이가 이렇게 써줌. 뷰가 데이터 바뀌는걸 인식 못할때 쓰는 코드.
          this.light = 'red';
          // this.lightActive('red'); // data가 바뀌면서 화면을 다시 그리면서 lightActive를 다시 호출하기때문에
          // 굳이 여기서 호출할 필요 없음.
          setTimeout(() => {
            this.light = 'yellow';
            // this.lightActive('yellow'); // data가 바뀌면서 화면을 다시 그리면서 lightActive를 다시
            // 호출하기때문에 굳이 여기서 호출할 필요 없음.
          }, 2000);
          setTimeout(() => {
            this.light = 'green';
            // this.lightActive('green'); // data가 바뀌면서 화면을 다시 그리면서 lightActive를 다시
            // 호출하기때문에 굳이 여기서 호출할 필요 없음.
          }, 4000);
        });

        // 상현이 코드.
        // 근데 난 얠 실행시켜도 red는 안됌 ㅋ
        // setTimeout(() => {
        //   this.light = 'yellow';
        //   setTimeout(() => {
        //     this.light = 'green';
        //   }, 3000);
        // }, 2000);
        // this.light = 'red';
      }
      this.light = color;
    },
    lightActive(color) {
      console.log(this.light, color);
      return this.light === color;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.trafficLight {
  width: 500px;
  border-radius: 20px;
  background: #333;
  display: flex;
  justify-content: space-around;
  padding: 30px;
}
.trafficLight .light {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: #eee;
}
.trafficLight .light.red {
  background: red;
}
.trafficLight .light.yellow {
  background: yellow;
}
.trafficLight .light.green {
  background: green;
}
.button-wrap {
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.button-wrap .button {
  background: #eee;
  border-radius: 10px;
  width: 70px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
}
.button-wrap .button:hover {
  background: #bbb;
}
.button-wrap .button.active {
  background: #bbb;
}
</style>
