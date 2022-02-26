import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

export async function NewOrder (buyer,cartList,vaciarCarrito,setId){
    try{

        let order = {}
        order.buyer = buyer
        order.total = '1000'// utilizar funcion q calcule el total

        order.items = cartList.map(cartItem =>{
            const id = cartItem.item.id
            const name = cartItem.item.name
            const price = cartItem.item.price
            const cant = cartItem.item.cant
            return{
                id,name,price
            }
        })

        //Creo la conexion a la BD y cargo la orden
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection,order)
            .then(resp =>setId(resp.id))

        //Actualizo los Stock de los productos

        const queryCollections = collection(db,'items')
        const queryUpdateStock = query(queryCollections,where(documentId(),'in', cartList.map(item=>item.item.id)))
        const batch = writeBatch(db)
        await getDocs(queryUpdateStock)
            .then(resp=>resp.docs.forEach(res => batch.update(res.ref,{
                stock:res.data().stock - cartList.find(item =>item.item.id === res.id).quantity
            })))
            .catch(err=>console.log('Error conexion Update Stock: '+err))
            .finally(()=>console.log('Stock actualizado'))
        batch.commit()
        vaciarCarrito()
    }
    catch{
        console.log('Error: No se pudo procesar la orden')
    }
}