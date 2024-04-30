<template>
    <div v-if="visible" class="popup-overlay">
        <div class="popup">
            <div class="popup-content">
                <p class="popup-header-text">{{ message }}</p>
                <p class="popup-header-msg">Are you sure to {{message}}? This action cannot be undone.</p>
                <div class="margin-bottom"></div>
                <div class="clearBtns">
                    <button class="button-secondary" @click="cancel">Cancel</button>
                    <button class="button-delete-primary" @click="confirm">Clear</button>
                </div>
            </div>
        </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: 'Are you sure?'
      }
    },
    methods: {
      confirm() {
        this.$emit('confirmed');
      },
      cancel() {
        this.$emit('canceled');
      }
    }
  };
  </script>
  