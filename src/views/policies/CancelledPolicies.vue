<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> Cancelled Policies
      </CCardHeader>
      <PoliciesTable />
    </CCard> 
  </div>
</template>

<script>
import PoliciesTable from "@/components/CancelledTable"
export default {
  components:{
    PoliciesTable
  }
}
</script>

<style>

</style>