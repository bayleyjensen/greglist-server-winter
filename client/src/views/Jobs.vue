<template>
  <div class>
    Hello Jobs
    <div class="jobs container-fluid">
      <main class="row">
        <div class="col">
          <form @submit.prevent="createJob">
            <input required type="text" v-model="newJob.position" placeholder="Saught After Jobs" />

            <input required type="text" v-model="newJob.wage" placeholder="Saught After Jobs" />

            <input required type="text" v-model="newJob.hours" placeholder="Saught After Jobs" />

            <button class="btn btn-success" type="submit">submit</button>
          </form>
        </div>
      </main>
      <div class="row" v-for="job in jobs" :key="job.id">
        <JobsComponent :jobData="job" />
      </div>
    </div>
  </div>
</template>

<script>
import JobsComponent from "../components/Jobs";
export default {
  name: "job",
  mounted() {
    this.$store.dispatch("getJobs");
  },
  data() {
    return {
      newJob: {
        position: "",
        wage: "",
        hours: 0
      }
    };
  },
  methods: {
    createJob() {
      let job = { ...this.newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        position: "",
        wage: "",
        hours: 0
      };
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  components: {
    JobsComponent
  }
};
</script>

<style></style>
