<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
    <div class="w-full card">
      <div class="form-group">
        <label for="" class="text-grey">Companies</label>
        
        <p v-if="$fetchState.pending" >Fetching companies...</p>
        <select 
          v-else
          v-model="selectedCompany"
          name="companies"
          id=""
          class="appearance-none input-field form-icon-chevron_down"
        >
        <!-- <option :value="companies.id" v-for="companies in company.data.result.data">
            {{ companies.name }}
          </option> -->
          <option >
            
          </option>
        </select>
      </div>
      <button @click="getCompany()" type="button" class="w-full btn btn-primary mt-[14px]">
        Continue
      </button>
      <div class="text-center">or</div>
        <NuxtLink :to="{name:'companies-create'}" class="w-full border btn btn-white">
            Create New Company
        </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  // middleware: 'auth',
  // layout: 'dashboard'
  data(){
    return{
      company:[],
      selectedCompany:'',
    }
  },

  async fetch(){
    this.company = await this.$axios.get('/company')
  },

  methods:{
    getCompany(){
      this.$router.push({
        name: 'companies-id',
        params: {
          id: this.selectedCompany
        }
      })
    }
  }
}
</script>