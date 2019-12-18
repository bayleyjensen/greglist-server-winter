<template>
  <div class="JobsComponent">
    <p>{{jobData.position}} | {{jobData.wage}} | {{jobData.hours}}</p>
  </div>
</template>

<script>
export default {
  name: "JobsComponent",
  props: ["jobData"],
  computed: {}
};
</script>

<style>
</style>