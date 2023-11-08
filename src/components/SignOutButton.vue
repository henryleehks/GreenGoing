<template>
    <RouterLink
      :to="to"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-700 dark:hover:bg-gray-600 dark:text-gray-400 hover:text-white"
      @click="handleClick"
    >
      {{ buttonText }}
    </RouterLink>
  </template>
  
  <script>
  export default {
    props: {
      to: '/login', // The route where the link should navigate
      isUserSignedIn: false, // A prop indicating the user's sign-in status
    },
    computed: {
      buttonText() {
        return this.isUserSignedIn ? 'Sign Out' : 'Sign In';
      },
    },
    methods: {
      handleClick() {
        if (this.isUserSignedIn) {
          // Emit the "signOut" event
          this.$emit('signOut');
        }
      },
    },
  };
  </script>
  