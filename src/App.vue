<template>
  <div id="app">
    <div class="header">
      <h1>
        <router-link to="/Home">Shopping cart test</router-link>
      </h1>
      <router-link to="/shoppingCart" title="購物車">
        <i class="fas fa-shopping-cart"></i>
        <span v-if="number > 0">{{ number }}</span>
      </router-link>
    </div>
    <router-view/>
    <div class="footer">
      <p>測試用footer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      number: 1
    }
  }
}
</script>

<style>
#app {
  max-width: 1024px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  border: 2px solid #2c3e50;
}
h1 a {
  font-size: 36px;
  font-weight: bold;
  color: #2c3e50;
}
.header > a {
  display: inline-block;
  width: 27px;
  height: 24px;
  position: relative;
  color: #2c3e50;
}
.header i {
  font-size: 24px;
}
.header span {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -15px;
  line-height: 16px;
	border: 2px solid #db0000;
	border-radius: 10px;
	font-size: 10px;
	font-weight: bold;
	color: #db0000;
	background: #ffbb00; 
}
.footer {
  font-size: 14px;
  font-weight: bold;
  height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
  border: 2px solid #2c3e50;
  
}
</style>
