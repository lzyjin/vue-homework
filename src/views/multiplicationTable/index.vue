<template>
  <div>
    <h1> <span style="cursor: pointer" @click="$router.go(-1)">&lt;</span>&nbsp;&nbsp; 구구단</h1>
    <form action="">
      <div>
        <input type="text" name="" id="" v-model="number"
               placeholder="1부터 9사이의 정수를 입력해보세요."
               maxlength="1" autofocus>
        단
      </div>
      <div class="result" v-if="Number.parseInt(number)">
        <p v-for="(v, i) in 9" :key="i">{{number}} x {{i+1}} = {{number * (i+1)}}</p>
      </div>
    </form>
  </div>
</template>

<script>
/** *
 * 1. data만 사용할 것
 */
export default {
  name: 'multiplication_table',
  data() {
    return {
      number: '',
    };
  },
};
</script>

<style scoped>
input {
  width: 300px; }
</style>
