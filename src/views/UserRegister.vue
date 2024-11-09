<template>
  <div>
    <form>
      <div class="input">
        <label for="name">Name</label>
        <input type="text" :value="name" id="name" />
      </div>
      <div class="input">
        <label for="age">Age</label>
        <input type="number" :value="age" id="age" />
      </div>
      <div class="input">
        <label for="gender">Gender</label>
        <input type="text" :value="gender" id="gender" />
      </div>
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data: () => ({
    name: "Seemore Butt",
    age: 34,
    gender: "male",
  }),
  methods: {
    register() {
      this.$router.push("/preferences");
    },
  },
};
</script>
