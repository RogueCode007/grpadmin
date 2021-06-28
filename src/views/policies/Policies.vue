<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> All Policies
      </CCardHeader>
      <PoliciesTable />
    </CCard> 
  </div>
</template>

<script>
import PoliciesTable from "@/components/PoliciesTable"
export default {
  components:{
    PoliciesTable
  }
}
</script>

<style>

</style>