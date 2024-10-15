<script setup lang="ts">
  import { ref, type Ref, onMounted, watch } from "vue";
  import detectVoucherInput from "../composables/detect-voucher-input";
  import VueTabsChrome from 'vue-tabs-chrome'
  
  const statusDiv: Ref<string> = ref('');

  const findCoupon = async () => {
    // @ts-ignore
    await chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    // @ts-ignore
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: detectVoucherInput
      }, (results: any) => {
        if (results && results[0] && results[0].result) {
          statusDiv.value = 'Searching for coupons...';
        } else {
          statusDiv.value = 'No voucher input detected on this page.';
        }
      });
    });
  };
</script>
<template>
  <div class="main rounded p-4 border">
    <div class="row">
      <div class="col-12">
        <h3>Find Best Coupon</h3>
        <button v-on:click="findCoupon">Find Coupons</button>
        <div>{{ statusDiv }}</div>
      </div>
    </div>
  </div>
</template>
