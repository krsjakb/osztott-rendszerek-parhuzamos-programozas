<template>
  <div>
    <a href="add-car-brand">New brand</a>
    <b-list-group v-for="carBrand in carBrands" :key="carBrand.id">
      <b-list-group-item
        >Name: {{ carBrand.name }}
        <small class="text-secondary"> Origin: {{ carBrand.origin }} </small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carBrands: [],
    };
  },
  created() {
    this.axios.get("https://localhost:5001/api/CarBrands").then((response) => {
      this.carBrands = response.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
