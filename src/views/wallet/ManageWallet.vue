<template>
  <div >
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> Wallet Transactions
        <CButton color="primary" class="float-right" @click="showFund = true">Fund wallet</CButton>
      </CCardHeader>
      <TransactionsTable />
      <FundWallet v-if="showFund" v-on:closeModal="showFund = false" />
    </CCard> 
  </div>
</template>

<script>
import TransactionsTable from "@/components/TransactionsTable"
import FundWallet from "@/components/FundWallet"
export default {
  components:{
    TransactionsTable, FundWallet
  },
  data(){
    return {
      showFund: false
    }
  },

}
</script>

<style scoped>
.l-modal{
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0, 0.3);
  }
  .loading-modal{
    min-height: 350px; 
  }

</style>