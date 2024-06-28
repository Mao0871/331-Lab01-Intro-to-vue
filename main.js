const{ createApp,ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('abc')
        const image = ref('./assets/images/socks_green.jpg')
        const goToCmu = () =>{window.location.href = 'https://www.camt.cmu.ac.th'}
        return{
            product,
            description,
            image,
            goToCmu
        }
        
      
    }

}).mount('#app')