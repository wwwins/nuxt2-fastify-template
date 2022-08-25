<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>LIFF ID: {{ liffid }}</h2>
    <h2>URL: {{ url }}</h2>
    <h2>Result: {{ result.args ? result.args.id : '--' }}</h2>
    <h2>Name: {{ profile.args ? profile.args.name : '--'}}</h2>
  </div>
</template>

<script>
export default {
  async asyncData({ query, $http }) {
    const result = await $http.$get(`https://httpbin.org/get?id=${query.id}`)
    return { result }
  },
//  async asyncData(context) {
//    console.log('dump:',context)
//  },
  validate({ query }) {
    return /^\d+$/.test(query.id)
    return false
  },
  data () {
    return {
      message: 'liff app1',
      url: process.env.SERVER_URL,
      liffid: process.env.LIFF_ID,
      result: {},
      profile: {},
    }
  },
  async fetch() {
    this.profile = await fetch('https://httpbin.org/get?name=mytest')
      .then(res => res.json()) 
  },
  mounted () {
    this.$mylog('mounted')
  }
}
</script>

