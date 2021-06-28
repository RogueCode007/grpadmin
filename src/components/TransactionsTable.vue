<template>
  <CCardBody>
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
    >
    
    <template #SN="{item, index}">
      <td>
        {{index++}}
      </td>
    </template>
    <template #is_approved="{item}">
      <td v-if="item.is_approved">
        <CBadge :color="getBadge(item.is_approved)" style="padding: 8px">
          Paid
        </CBadge>
      </td>
      <td v-else>
        <CBadge :color="getBadge(item.is_approved)" style="padding: 8px">
          Initiated
        </CBadge>
      </td>
    </template>
    
    </CDataTable>
  </CCardBody>
</template>

<script>
// import axios from 'axios'
// import url from '@/main'

const fields = [
  'SN',
  {key:'amount', label: 'Transaction Amount'},
  {key: 'date', _style:'min-width:10%;', label: 'Transaction Date' },
  {key:'is_approved', label: 'Status'},
  
  
]

export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      loan: {},
      customersData: [
        {id: 1, amount: "#50,000", date:"2020/03/05",  is_approved: false},
        {id: 1, amount: "#50,000", date:"2020/03/05",  is_approved: true},
        {id: 1, amount: "#50,000", date:"2020/03/05",  is_approved: true},
        {id: 1, amount: "#50,000", date:"2020/03/05",  is_approved: false},
        {id: 1, amount: "#50,000", date:"2020/03/05",  is_approved: true},
      ]
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