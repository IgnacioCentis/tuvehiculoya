const products = [
    {id:'1', categoria:'monopatin',name:'XIAOMI Mi Electric Scooter Essential', description:'Monopatin electrico Urbano, autonomia de 7hs continuas. ', price:70000 , foto:'assets/image/monopatinXiaomi.png'},
    {id:'2', categoria:'monopatin',name:'Eléctrico Logus L7', description:'Monopatin One Wheel electrico de 700Watts Urbano', price:55000 , foto:'assets/image/monopatinOneWheel.png'},
    {id:'3', categoria:'monopatin',name:'Hiboy S2 Pro Plegable', description:'Monopatin plegable electrico 200Watts', price:92000 , foto:'assets/image/monopatin_plegado.png'},
    {id:'4', categoria:'bicicleta',name:'Venzo Shadow Series Loki Evo R29', description:'Mountain Bike SemiProfessional R29 ', price:77000 , foto:'assets/image/biciMountain.png'}
];

//resolve  -  reject
const getFetch = new Promise ((res,rej)=>{

    let condition = true
    if (condition){
        setTimeout(()=>{
            res(products)
        },3000)
    }else{
        rej('404 not found!')
    }
})

export default getFetch