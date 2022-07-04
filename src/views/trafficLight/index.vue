<template>
  <div>
    <h1><span style="cursor: pointer" @click="$router.go(-1)">&lt;</span>&nbsp;&nbsp; 신호등</h1>
    <div class="trafficLight">
      <div class="light active" data-color="red"></div>
      <div class="light" data-color="yellow"></div>
      <div class="light" data-color="green"></div>
    </div>
    <div class="button-wrap">
      <div class="button active" data-color="red" @click="fnLightUp">빨간불</div>
      <div class="button" data-color="yellow" @click="fnLightUp">노란불</div>
      <div class="button" data-color="green" @click="fnLightUp">초록불</div>
      <div class="button" data-color="auto" @click="fnLightUp">자동</div>
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

    };
  },
  methods: {
    fnLightUp(e) {
      const color = e.target.getAttribute('data-color');
      const buttons = document.querySelectorAll('.button');
      const lights = document.querySelectorAll('.light');
      buttons.forEach((v) => {
        v.classList.remove('active');
      });
      lights.forEach((v) => {
        v.classList.remove('active');
      });

      e.target.classList.add('active');
      if (color !== 'auto') {
        document.querySelector(`.light[data-color="${color}"]`).classList.add('active');
      }
      if (color === 'auto') {
        document.querySelector('.light[data-color="red"]').classList.add('active');

        const timer1 = setTimeout(() => {
          document.querySelector('.light[data-color="red"]').classList.remove('active');
          document.querySelector('.light[data-color="yellow"]').classList.add('active');
        }, 3000);

        const timer2 = setTimeout(() => {
          // clearTimeout(timer1);
          document.querySelector('.light[data-color="yellow"]').classList.remove('active');
          document.querySelector('.light[data-color="green"]').classList.add('active');
        }, 5000);

        const timer3 = setTimeout(() => {
          // clearTimeout(timer2);
        }, 7000);

        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      }
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
.trafficLight .light[data-color="red"].active {
  background: red;
}
.trafficLight .light[data-color="yellow"].active {
  background: yellow;
}
.trafficLight .light[data-color="green"].active {
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
  padding: 10px;
  cursor: pointer;
}
.button-wrap .button:hover {
  background: #bbb;
}
.button-wrap .button.active {
  background: #bbb;
}
</style>
