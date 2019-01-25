import CCard from './card';


const components = [
    CCard
]

const install = function(Vue){
    if(Vue.installed)return;
    components.map(component => Vue.component(component.name,component));
}

if(typeof window!== 'undefined' && window.Vue){
    install(window.Vue);
}

export default {
    install,
    CCard,
}