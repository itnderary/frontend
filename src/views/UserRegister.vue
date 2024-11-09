<template>
  <div class="flex w-full justify-center">
    <div class="border rounded-md w-1/2 mt-8 px-4 py-4 shadow bg-white">
      <div class="mb-4">
        <h1 class="text-3xl font-extrabold">User Details</h1>
      </div>
      <form class="flex flex-col justify-center">
        <div class="pb-8 flex items-center justify-between">
          <label class="block text-sm/6 font-semibold text-gray-900 " for="name">Name</label>
          <input type="text" class="block w-2/3 rounded-md border-0  bg-gray-50 py-1.5 px-2 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-md" :value="name" id="name" />
        </div>
        <div class="pb-8 flex items-center justify-between">
          <label for="age" class="block text-sm/6 font-semibold text-gray-900">Age</label>
          <input type="number" class="block w-2/3 rounded-md border-0 bg-gray-50 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-md" :value="age" id="age" />
        </div>
        <div class="flex pb-8 items-center justify-between">
          <label for="gender" class="block text-sm/6 font-semibold text-gray-900">Gender</label>
          <input type="text" class="block w-2/3 rounded-md border-0 bg-gray-50 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-md" :value="gender" id="gender" />
        </div>
        <div class="flex justify-end">
          <button class="bg-blue-300 py-2 px-2 rounded-lg text-blue-900 font-medium hover:bg-blue-400 text-lg" @click="register">Register</button>
        </div>
      </form>
    </div>
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
