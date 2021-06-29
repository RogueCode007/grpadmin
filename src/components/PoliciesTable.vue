<template>
  <CCardBody>
  <CButton
      color="primary"
      class="mb-2"
      :href="csvCode" 
      download="policies.csv"
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
  
    <template #is_approved="{item}">
      <td v-if="item.is_approved">
        <CBadge :color="getBadge(item.is_approved)" style="padding: 8px">
          Active
        </CBadge>
      </td>
      <td v-else>
        <CBadge :color="getBadge(item.is_approved)" style="padding: 8px">
          Inactive
        </CBadge>
      </td>
    </template>
    <!-- <template #Action="{item}">
      <td class="py-2">
        <CButton size="sm" color="info" class="" @click="showLoanModal(item)" >
          View
        </CButton>
      </td>
    </template> -->
    </CDataTable>
    <!-- <CModal
      color="info"
      title="Loan Details"
      :show.sync="loanModal"
    > 
      <div>
        <strong>Loan Value</strong>
        <p>{{loan.amount}}</p>
      </div>
      <div>
        <strong>Customer Name</strong>
        <p>{{loan.fullname}}</p>
      </div>
      <div>
        <strong>Customer Phone</strong>
        <p>{{loan.phone}}</p>
      </div>
      <div>
        <strong>Customer Email</strong>
        <p>{{loan.email}}</p>
      </div>
      <div>
        <strong>Approval Status</strong>
        <p v-if="loan.is_approved">Approved</p>
        <p v-else>Unapproved</p>
      </div>
      <div>
        <strong>Request Date</strong>
        <p>{{loan.date}}</p>
      </div>
      <template #footer>
        <CButton @click="approveModal = false" color="secondary">Cancel</CButton>
        <CButton  @click="approval()" color="success">Proceed</CButton>
      </template>
    </CModal> -->
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  { key: 'fullname', _style:'min-width:30%', label: 'Agent Name' },
  {key: 'in', label: 'Policy number'},
  {key:'amount', label: 'Premium'},
  { key: 'phone', label: 'Phone number', _style:'min-width:20%;' },
  'email',
  {key:'is_approved', label: 'Status'},
  // 'no_of_orders',
  // { key: 'date', _style:'min-width:10%;', label: 'Request Date' },
  // 'Action'
  
]
const customersData = [
        {id: 1, in: '2342A2' ,amount: "#50,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 2, in: '3452F2', amount: "#150,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 3, in: '2342A2', amount: "#120,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 4, in: '1342K6', amount: "#70,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 5, in: '2342V2', amount: "#200,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 6, in: '234222', amount: "#300,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},  
        {id: 7, in: '2342A2' ,amount: "#50,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 8, in: '3452F2', amount: "#150,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 9, in: '2342A2', amount: "#120,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 10, in: '1342K6', amount: "#70,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 11, in: '2342V2', amount: "#200,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 12, in: '234222', amount: "#300,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},  
        {id: 13, in: '2342A2' ,amount: "#50,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 14, in: '3452F2', amount: "#150,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 15, in: '2342A2', amount: "#120,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 16, in: '1342K6', amount: "#70,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 17, in: '2342V2', amount: "#200,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 18, in: '234222', amount: "#300,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},  
        {id: 19, in: '2342A2' ,amount: "#50,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 20, in: '3452F2', amount: "#150,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 21, in: '2342A2', amount: "#120,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 22, in: '1342K6', amount: "#70,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 23, in: '2342V2', amount: "#200,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},
        {id: 24, in: '234222', amount: "#300,000", fullname: "Avon Barksdale", phone: "080939091090", email: "a.avici@gmail.com", date:"2020/03/05",  is_approved: true},  
      ]

export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      loanModal: false,
      loan: {},
      customersData,
      currentItems: customersData.slice()
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
        case false: return 'warning'
      }
    },
    setCurrentItems (val) {
      this.currentItems = val
    },
    showLoanModal(item){
      this.loan = item;
      this.loanModal = true
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