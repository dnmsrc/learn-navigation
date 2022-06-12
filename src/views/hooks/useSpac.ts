import {ref,computed} from 'vue'

const getSpac = ()=>{
    const size = ref(0);
    const btnSpac = computed(()=>{
        return size.value?size.value:'0'
    })
    return{size,btnSpac}
}


export default getSpac