<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Create Companies</div>
    <div class="w-full card">
      <form class="w-full card" @submit.prevent="createCompany">
            <div class="form-group">
                <label for="" class="text-grey">Company Name</label>
                <input v-model="company.name" name="name" type="text" class="input-field">
            </div>
            <button type="submit" class="w-full btn btn-primary mt-[14px]">
                Continue
            </button>
        </form>
    </div>
  </section>
</template>
<script>
export default{
  // auth: 'auth',
  data(){
    return {
      company:{
        name:'',
      }
    }
  },
  methods: {
    async createCompany() {
        try {
            await this.$axios.post('/company', this.company)
                          .then(response => {
                            this.$router.push({
                              name: 'companies-id',
                              params: {
                                id: response.data.result.id
                              }
                            })
                          })
            console.log(response);
        } catch (error) {
        }
      
    }
  }
}
</script>