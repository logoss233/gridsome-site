<template>
  <Layout>
    <div data-v-78e0b360="" class="container">
      <div data-v-78e0b360="" class="contact-header">
        <h1 data-v-78e0b360="" class="contact-title">Say hi!</h1>
        <p data-v-78e0b360="">Leave me a note with any questions you might have, I'll get back to you as soon as
          possible.</p>
      </div>
      <form 
        @submit.prevent="onSubmit"
        data-v-78e0b360="" name="contact" class="contact-form">
        <div data-v-78e0b360="" class="sender-info">
          <div data-v-78e0b360=""><label data-v-78e0b360="" for="name" class="label">Your name</label><input
              data-v-78e0b360="" type="text" name="name" required v-model="name"></div>
          <div data-v-78e0b360=""><label data-v-78e0b360="" for="email" class="label">Your email</label><input
              data-v-78e0b360="" type="email" name="email" required v-model="email"></div>
        </div>
        <div data-v-78e0b360="" class="message"><label data-v-78e0b360="" for="message"
            class="label">Message</label><textarea v-model="message" data-v-78e0b360="" name="message" required></textarea></div><button
          data-v-78e0b360="" class="button">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name:'Contact',
  data(){
    return {
      name:"",
      email:"",
      message:""
    }
  },
  metaInfo:{
    title:'Contact'
  },
  methods:{
    async onSubmit(){
      try{
        const {data}=await axios.post(this.GRIDSOME_API_URL+"/contacts",{
          name:this.name,
          email:this.email,
          message:this.message
        })
        alert("成功")
      }catch(err){
        const errors=err.response?.data?.data?.errors
        if(errors){
          let str="出错了：\n"
          let keys=Object.keys(errors)
          keys.forEach(key=>{
            let values=errors[key]
            values.forEach(value=>{
              str+=`${key}:${value}`+"\n"
            })
          })
          alert(str)
        }
      }
    }
  }
}
</script>

<style>

</style>