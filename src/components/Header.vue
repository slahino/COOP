<template>
  <div class='navbar'>
    <ul>
      <li class="coop">
        CO'OP
      </li> 
      <li>
        <router-link to='/'>
          Conversations
        </router-link>
      </li> 
      <li>
        <router-link to='/membres'>
          Membres
        </router-link>
      </li> 
      
      <li>
        <a @click="deconnexion">Déconnexion</a>
      </li>       
    </ul>
  </div>
</template>

<script>
  export default {
    methods : {
      deconnexion() {
        this.$store.commit('deconnexion');
        this.$router.push('/se-connecter');
      }
    }
  }
</script>

<style>
h1 {
  text-align: center;
}
.navbar {
  margin-bottom: 20px;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ab5dda;
}

.navbar li {
  float: left;
  margin-bottom: 0;
}

.navbar li.coop {
  float: left;
  margin-bottom: 0;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: lighter;
}

.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: lighter;
}

.navbar li a:hover {
  background-color: #606c76;
}
</style>