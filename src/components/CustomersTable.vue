<template>
  <CCardBody>
    <CButton
      color="primary"
      class="mb-2"
      :href="csvCode" 
      download="all-customers.csv"
      target="_blank"
    >
      Download (.csv)
    </CButton>
    <CDataTable
      :items="customersData"
      :fields="fields"
      items-per-page-select
      :items-per-page="10"
      hover
      sorter
      pagination
      table-filter
      cleaner
      @filtered-items-change="setCurrentItems"
    >
    <!-- <template #fullname="{item}">
      <td>
        <router-link :to="{ name: 'customer', params: { id: item.id }}">{{item.fullname}}</router-link>
      </td>
    </template> -->
    <template #Action="{item}">
      <td class="py-2">
      <CButton size="sm" color="danger" @click="showDeleteModal(item)">
        Delete
      </CButton>
      </td>
    </template>
    <!-- <template #is_verified="{item}">
      <td v-if="item.is_verified">
        <CBadge :color="getBadge(item.is_verified)" style="padding: 8px">
          Verified
        </CBadge>
      </td>
      <td v-else>
        <CBadge :color="getBadge(item.is_verified)" style="padding: 8px">
          Unverified
        </CBadge>
      </td>
    </template> -->
    </CDataTable>
    <CModal
      color="warning"
      title="Are you sure?"
      :show.sync="deleteModal"
    > 
      <div>
        <p class="font-weight-bold">Delete this agent and terminate policy?</p>
      </div>
      
      <template #footer>
        <CButton @click="deleteModal = false" color="secondary">Cancel</CButton>
        <CButton  @click="deleteAgent" color="danger">Proceed</CButton>
      </template>
    </CModal>
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  { key: 'fullname', _style:'min-width:30%', label: 'Agent Name' },
  { key: 'phone', label: 'Phone number', _style:'min-width:20%;' },
  'email',
  {key: 'policynumber', label: 'Policy Number'},
  {key: 'policytype', label: "Policy Type"},
  {key: 'amount', label: 'Insurance Amount'},
  'Action'
  // {key:'is_verified', label: 'Status'},
]
const customersData = [
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Standard", policynumber: "133622", is_verified: false, amount: '120,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Standard", policynumber: "133622", is_verified: false, amount: '120,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Basic", policynumber: "133622", is_verified: false, amount: '70,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Standard", policynumber: "133622", is_verified: false, amount: '120,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Standard", policynumber: "133622", is_verified: false, amount: '120,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Basic", policynumber: "133622", is_verified: false, amount: '70,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Premium", policynumber: "133622", is_verified: false, amount: '150,000'},
        {id: 1, fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", policytype: "Basic", policynumber: "133622", is_verified: false, amount: '70,000'},
        
      ]
export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      customersData,
      currentItems: customersData.slice(),
      deleteModal: false
    }
  },
  computed: {
    csvContent () {
      return this.currentItems.map(item => Object.values(item).join(',')).join('\n')
    },
    csvCode () {
      return 'data:text/csv;charset=utf-8,SEP=,%0A' + encodeURIComponent(this.csvContent)
    }
  },
  filters:{
    formateDate(str){
      var date = new Date(str);
      var day = date.getDate();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dateStr = year+"/"+month+"/"+day;
      return dateStr
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case true: return 'success'
        case false: return 'secondary'
      }
    },
    setCurrentItems (val) {
      this.currentItems = val
    },
    showDeleteModal(agent){
      this.deleteModal = true;
    },
    deleteAgent(){
      this.$store.commit('startLoading');
      setTimeout(()=>{
        this.$store.commit('stopLoading');
        location.reload()
      }, 2000)
    }
  },

  // beforeCreate(){
  //   this.$store.state.loading = true;
  //   axios.get(`${url}/users/allUsers`)
  //   .then(res=>{
  //     this.customersData = res.data
  //     this.$store.state.loading = false
  //   })
  // }
}
</script>