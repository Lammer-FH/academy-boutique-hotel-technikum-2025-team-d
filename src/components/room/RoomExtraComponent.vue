<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BRow } from "bootstrap-vue-3";
import { fas } from "@fortawesome/free-solid-svg-icons";

const byPrefixAndName = {
  fas: Object.fromEntries(
      Object.entries(fas).map(([key, icon]) => [
        key.replace(/^fa/, '').toLowerCase(),
        icon
      ])
  )
};

// Icon Mapping
const iconMap = {
  'bathroom': 'bath',
  'minibar': 'winebottle',
  'television': 'tv',
  'livingroom': 'couch',
  'aircondition': 'snowflake',
  'wifi': 'wifi',
  'breakfast': 'mughot',
  'handicapped accessible': 'wheelchair',
};

// Text Label Mapping
const textMap = {
  'bathroom': 'Badezimmer',
  'minibar': 'Minibar',
  'television': 'Fernseher',
  'livingroom': 'Wohnzimmer',
  'aircondition': 'Klimaanlage',
  'wifi': 'WiFi',
  'breakfast': 'Frühstück',
  'handicapped accessible': 'Barrierefrei'
};

export default {
  components: { BRow, FontAwesomeIcon },
  props: {
    // Nur ein Prop: der Extra-Name als String
    extraName: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      const iconName = iconMap[this.extraName];
      return byPrefixAndName.fas[iconName] || byPrefixAndName.fas['check'];
    },
    displayText() {
      return textMap[this.extraName] || this.extraName;
    }
  }
}
</script>

<template>
  <div class="d-inline-flex align-items-center me-3 mb-1">
    <FontAwesomeIcon :icon="icon" class="me-2 text-success"/>
    <span>{{ displayText }}</span>
  </div>
</template>