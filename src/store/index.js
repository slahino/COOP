import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence ({
	storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   membres : [] ,
   membre : false,
   token : false
  },
  mutations: {
    deconnexion(state) {
      state.membre=false;
      state.token=false;
    },
    setMembres(state,membres){
      state.membres = membres;
    },
    setConversations(state,conversations){
      state.conversations = conversations;
    },
  	setMembre(state,membre){
  		state.membre = membre;
  	},
  	setToken(state,token){
  		state.token = token;
  	}
  },
  getters: {
    getMembre(state) {
      let fonction = (membre_id) => {
        return state.membres.find((membre) =>{
          return membre.id == membre_id;
        })
      }
      return fonction;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
