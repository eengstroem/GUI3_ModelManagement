import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      LoggedIn: false,
      IsManager: false,
    },
    mutations: {
      login (state) {
        state.LoggedIn = true;
      },
      logout (state) {
        state.LoggedIn = false;
      },
      ToggleChangeMail (state)
      {
        if(state.ChangingMail){
          state.ChangingMail = false;
        } else {
          state.ChangingMail = true;
        }
      },
      ToggleAddManager (state) {
        if(state.AddingNewManager){
          state.AddingNewManager = false;
        }else{
          state.AddingNewManager = true;
        }
      }
    }
})

export default store;