import { defineStore } from 'pinia'
import axios from "axios"
const API_TESTIMONIAL = 'https://challenge.fe.weekendinc.com/testimonial'
const API_HELP = 'https://challenge.fe.weekendinc.com/help-tips'

export const useDataStore = defineStore('data', {
  state: () => ({
    dataTestimonial: [],
    dataHelp: [],
  }),
  getters: {
    getTestimonials(state){
      return state.dataTestimonial
    },
    getHelps(state){
      return state.dataHelp
    },
  },
  actions: {
    fetchTestimonial() {
      axios.get(`${API_TESTIMONIAL}`)
      .then((response) => {
        this.dataTestimonial = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    fetchHelp() {
      axios.get(`${API_HELP}`)
      .then((response) => {
        this.dataHelp = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
})
