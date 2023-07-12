<template>
  <div>
    <h2>{{SchoolName}}</h2>
    <h2>{{adress}}</h2>
    <button @click = "showName">点我提示用户名</button>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return{
      schoolName:'tjut',
      adress:'天津'
    }
  },
  methods: {
    showName() {
      alert('天津理工大学');
    }
  },

}
</script>

<style >
  
</style>