<script>
import DefaultLayout from "@/components/base/DefaultLayout.vue";
import UserRegistrationComponent from "@/components/user/UserRegistrationForm.vue";

export default {
  name: "UserRegistrationView",
  components: {UserRegistrationComponent, DefaultLayout}
}
</script>

<template>
<DefaultLayout>
  <UserRegistrationComponent/>
</DefaultLayout>
</template>

<style scoped>

</style>