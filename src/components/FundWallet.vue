<template>
   <div class="l-modal">
      <div class="loading-modal">
          <div class="text-center loader">
            <div class="bg-white mx-auto py-3 px-3 rounded" style="width: 500px; min-height: 200px">
              <CButton :disabled="disabled" color="danger" size="sm" class="float-right" @click="$emit('closeModal')">
                <b style="color: white;">X</b> 
              </CButton>
              <form @submit.prevent="validateForm" class="pt-5">
                <h4 class="text-dark mt-6">How much do you want to add to your wallet?</h4>
                <p class="text-dark">Amount (naira)</p>
                <div class="d-flex" style="width: 60%; margin: 0 auto; justify-content: space-between; align-items:center">
                  <input type="text" v-model="amount">
                  <CButton color="success" class="" @click="validateForm">Fund wallet</CButton>
                  </div>
                <p v-if="error.amount" class="text-danger mt-2">Please enter a valid amount</p>
              </form>
            </div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return {
      amount: '',
      error: {
        amount: false
      }
    }
  }, 
  watch: {
    amount(){
       // add meter validation here
      if(/^\d*$/.test(this.amount)){
        this.error.amount = false;
      }else{
        this.error.amount = true;
      }
    }
  },
  methods:{
    validateForm(){
      if(Object.values(this.error).includes(true)){
        return
      }else{
        console.log('success')
        this.$store.commit('startLoading');
        setTimeout(()=>{
          this.$store.commit('stopLoading');
          alert('direct to paystack')
          location.reload()
        }, 3000)
      }
    },
  }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 150px;
}
</style>