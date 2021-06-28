<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> Buy Health Insurance
      </CCardHeader>
      <CRow class="mt-2 px-3">
        <CCol col="12" sm="6" lg="4">
          <CWidgetIcon
            header="#1,500,000"
            text="Wallet Balance"
            color="gradient-success"
          >
            <CIcon name="cil-money" width="24"/>
          </CWidgetIcon>
        </CCol>
      </CRow>
      <CRow class="p-3">
      <CCol sm="12" lg="6" class="p-3">
      <form @submit.prevent="validateForm">
        <h4>Upload an Excel sheet</h4>
        <div class="mb-3">
          <p class="mb-2">Monetary Value (This will be deducted from your wallet)</p>
          <input type="text" v-model="amount" required>
          <p v-if="error.amount" class="text-danger">Please input a valid amount</p>
        </div>
        <div class="mt-2">
          <p class="mb-2">Excel File</p>
          <input type="file" ref="file" v-on:change="fileUpload" required>
          <p v-if="error.file" class="text-danger">Please input a valid file</p>
        </div>
        <button class="mt-4 bg-success text-white rounded p-2" color="border-0 secondary" style="outline: none; border: none; ">Submit</button>
      </form>
      </CCol>
      </Crow>
      <CModal
        color="success"
        title="Loan Details"
        :show.sync="formSuccess"
      > 
        <div>
          Form uploaded successfully!
        </div>
        
      </CModal>
    </CCard> 
  </div>
</template>

<script>
export default {
  data(){
    return {
      formSuccess: false,
      amount: '',
      file: '',
      error:{
        amount: false,
        file: false
      }
    }
  },
  watch:{
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
          this.formSuccess = true
        }, 3000)
      }
    },
    fileUpload(){
      console.log(this.$refs.file.files[0].name)
      // if(this.$refs.file.files[0].type == "xls" || this.$refs.idImage.files[0].type == "image/jpeg"){
      //   this.error.file = false
      // }else{
      //   this.error.file = true
      // }
    }
  }
}
</script>

<style>

</style>