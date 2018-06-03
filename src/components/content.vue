<template>
  <div class="content">
    <ul>
			<li v-on:click="display++">
        <router-link to="/Home/Phone">Phone</router-link>
      </li>
			<li v-on:click="display++">
        <router-link to="/Home/Notebook">Notebook</router-link>
      </li>
		</ul>
    <div v-if="display == 0">
      <p>Welcome to my shopping mall</p>
    </div>
    <router-view v-if="display > 0"/>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      display: 0 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  border-left: 2px solid #2c3e50;
  border-right: 2px solid #2c3e50;
}
ul {
  width: 160px;
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0;
  border-right: 2px solid #2c3e50;
}
li {
  padding: 0 30px;
}
a {
  display: inline-block;
  width: 98px;
  height: 35px;
  line-height: 35px;
  color: #000000;
}
.content div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 864px;
}
p {
  font-size: 36px;
  font-weight: bold;
}
</style>
