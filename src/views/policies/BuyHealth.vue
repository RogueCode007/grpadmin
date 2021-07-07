<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> Buy Health Insurance
      </CCardHeader>
      <CRow class="p-3">
      <CCol sm="12" lg="6" class="p-3">
      <form @submit.prevent="validateForm">
        <h4>Upload an Excel sheet</h4>
        <div class="mt-2">
          <p class="mb-2">Excel File</p>
          <input type="file" ref="file" v-on:change="fileUpload" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" required>
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
      file: '',
      error:{
        file: false
      }
    }
  },
  watch:{
  
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
      
    }
  }
}
</script>

<style>

</style>