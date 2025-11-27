<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BRow } from "bootstrap-vue-3";

export default {
  components: { BRow, FontAwesomeIcon },
  props: {
    roomExtraIcon: Object,
    roomExtraText: String
  }
}
</script>

<template>
    <div class="d-flex align-items-center mb-2">  <!-- ✅ flexbox statt b-row -->
      <FontAwesomeIcon :icon="roomExtraIcon" class="me-2"/>
      <span>{{ roomExtraText }}</span>
    </div>
</template>

<style scoped>
</style>