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
      interval: '',
    };
  },
  methods: {
    fnLightUp(e) {
      const color = e.target.getAttribute('data-color');
      const buttons = document.querySelectorAll('.button');
      const lights = document.querySelectorAll('.light');

      // 내가 맨날 하던 이벤트에 따라 active 클래스 넣었다 뺐다 하는 로직밖에 생각이 안나서 이렇게 함.

      // '자동' 버튼 클릭하면 빨간불 노란불 파란불이 몇초씩 번갈아가면서 켜져야하니까 setTimeout을 써서 몇초 뒤에 다음 불이 켜지도록 함.
      // 한 싸이클이 돌면 다시 처음으로 돌아가서 반복 실행되어야하니까 setInterval 사용함
      // 그런데 '자동'버튼을 클릭하고 다른 색깔 버튼을 클릭했을 때 setInterval을 clear하고 싶은데 setInterval 변수가 다른 조건문 안에서 선언되어서
      // clear할 수가 없음...

      const loop = function () {
        document.querySelector('.light[data-color="green"]').classList.remove('active');
        document.querySelector('.light[data-color="red"]').classList.add('active');

        setTimeout(() => {
          document.querySelector('.light[data-color="red"]').classList.remove('active');
          document.querySelector('.light[data-color="yellow"]').classList.add('active');
        }, 3000);

        setTimeout(() => {
          // clearTimeout(timer1);
          document.querySelector('.light[data-color="yellow"]').classList.remove('active');
          document.querySelector('.light[data-color="green"]').classList.add('active');
        }, 5000);
      };
      buttons.forEach((v) => {
        v.classList.remove('active');
      });
      lights.forEach((v) => {
        v.classList.remove('active');
      });
      e.target.classList.add('active');
      if (color === 'auto') {
        loop();
        this.interval = setInterval(loop, 8000);
      }
      if (color !== 'auto') {
        clearInterval(this.interval);
        document.querySelector('.light[data-color="red"]').classList.remove('active');
        document.querySelector('.light[data-color="yellow"]').classList.remove('active');
        document.querySelector('.light[data-color="green"]').classList.remove('active');
        document.querySelector(`.light[data-color="${color}"]`).classList.add('active');
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
