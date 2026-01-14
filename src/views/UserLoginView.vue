<script>
import DefaultLayout from "@/components/base/DefaultLayout.vue";
import UserLoginForm from "@/components/user/UserLoginForm.vue";

export default {
  name: "UserLoginView",
  components: {UserLoginForm, DefaultLayout}
}
</script>

<template>
<DefaultLayout>
  <UserLoginForm/>
</DefaultLayout>
</template>

<style scoped>

</style>