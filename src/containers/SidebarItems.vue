<script>
export default {
  name: 'nav',
  computed: { 
    sidebarItems () {
      return [
        {
          _name: 'CSidebarNav',
          _children: [{
              _name: 'CSidebarNavItem',
              name: this.$t('menu.dashboard'),
              to: '/dashboard',
              icon: 'cil-speedometer',
            },
            {
              _name: 'CSidebarNavDropdown',
              name: 'Policies',
              route: '/policies',
              icon: 'cil-user',
              items: [
                {
                  name: 'View Policies',
                  to: '/policies'
                },
                {
                  name: 'Cancelled Policies',
                  to: '/policies/cancelled'
                },
                {
                  name: 'Buy health insurance',
                  to: 'policies/health/buy'
                },
                
              ]
            },
            {
              _name: 'CSidebarNavDropdown',
              name: 'Wallet',
              to: '/wallet',
              icon: 'cil-money',
              items: [
                {
                  name: 'Manage Wallet',
                  to: '/wallet'
                },
                
              ]
            },
            
            {
              _name: 'CSidebarNavItem',
              name: 'Agents',
              to: '/agents',
              icon: 'cil-user'
            },
            // {
            //   _name: 'CSidebarNavItem',
            //   name: 'Settings',
            //   to: '/settings',
            //   icon: 'cil-settings',
            // },
            
            // {
            //   _name: 'CSidebarNavItem',
            //   name: 'Devices',
            //   to: '/devices',
            //   icon: 'cil-money'
            // },
            {
              _name: 'CSidebarNavItem',
              name: 'Logout',
              to: '/app/login',
              icon: 'cil-account-logout'
            },
            
          ]
        },
      ]
    }
  }
}
</script>
