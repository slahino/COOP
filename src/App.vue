<template>
  <div id="app" v-if="apiok">
    <router-view/>
  </div>
  <div v-else>
    Impossible to contact API.
  </div>
</template>
<script>
  export default {
    data() {
      return {
        apiok: false
      }
    },
    mounted() {
      console.log("App is starting...")
      api.get('ping').then(response => {
        this.apiok=true;
        console.log('App is working...');

        if(!this.$store.state.membre) {
          if(this.$route.path != '/se-connecter' && this.$route.path != '/inscription') {
            this.$store.commit('deconnexion');
            this.$router.push('/se-connecter');
          }
        } else {

          this.chargerMembres();
          this.$bus.$on('charger-membres', this.chargerMembres);

          this.chargerConversations();
          this.$bus.$on('charger-conversations', this.chargerConversations);
        }
       /* else {
            api.get('members/'+this.$store.state.membre.id+'/signedin').catch(error => {
              console.log(response.data);
            })
          }*/

      }).catch(error => {
        console.log('App is not working.', error);
      }).finally(() => {
        this.chargementOk = true;
      })
    },
    methods : {
      chargerMembres() {
        api.get('members').then(response => {
          this.$store.commit('setMembres',response.data);
        });
      },
      chargerConversations() {
        api.get('channels').then(response => {
          this.$store.commit('setConversations',response.data);
        });
      }
    }
  }
</script>
<style>
</style>