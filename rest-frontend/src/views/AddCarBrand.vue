<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        id="brand-name-input-group"
        label="Brand name:"
        label-for="brand-name-input"
      >
        <b-form-input
          id="brand-name-input"
          v-model="form.brand"
          type="text"
          placeholder="Enter brand"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mb-2"
        id="origin-name-input-group"
        label="Origin name:"
        label-for="origin-name-input"
      >
        <b-form-input
          id="origin-name-input"
          v-model="form.origin"
          type="text"
          placeholder="Enter origin"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mx-1" type="submit" variant="primary">Submit</b-button>
      <b-button class="mx-1" type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-alert show variant="danger" dismissible>Something went wrong</b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        brand: "",
        origin: "",
      },
      toastCount: 0,
    };
  },
  methods: {
    onSubmit() {
      let self = this;
      let params = {
        name: self.form.brand,
        origin: self.form.origin,
      };
      self.axios
        .post("https://localhost:5001/api/CarBrands", params)
        .then(() => {
          // self.form.brand = "";
          // self.form.origin = "";
          self.makeToast("Resource created!", "Success", "success");
        })
        .catch((e) => {
          console.log(e);
          // this.makeToast("e.message", "Failed", "danger");
        });
    },
    onReset() {
      this.form.brand = "";
      this.form.origin = "";
    },
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: append,
      });
    },
    // makeToast() {
    //   this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
    //     title: "BootstrapVue Toast",
    //     autoHideDelay: 5000,
    //     appendToast: false,
    //   });
    // },
    // makeToast(toastText, toastTitle, variant) {
    //   this.$bvToast.toast(toastText, {
    //     title: toastTitle,
    //     autoHideDelay: 5000,
    //     variant: variant,
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped></style>
