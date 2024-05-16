const { createApp } = Vue;

createApp({
data() {
    return {
        message: "Generare 10 email con API",
        mail: "https://flynn.boolean.careers/exercises/api/random/mail",
        newmail: [],
    }
},
 methods: {
    getmail() {
        axios.get(this.mail).then((result) =>{
            console.log(result.data.response);
            this.newmail.push(result.data.response);
        })
    }
 },
 mounted() {
    console.log("app caricata");
    for (let i = 0; i < 10; i++){
        this.getmail()
    }
 }
 


}).mount("#app")