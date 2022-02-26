import {doc,getDocs,getDoc, getFirestore, collection, query, where} from 'firebase/firestore'

const getProducts = async (filterType,filterData) =>{

    try{
        const db = getFirestore()
        const queryCollection = collection(db,'items')
            
        switch (filterType) {
            case 'idItem':

                const queryId = doc(db,'items',filterData)
                return await getDoc(queryId)
            break;
            case 'category':

                const queryCategory = query(queryCollection,where('categoria','==',filterData))
                return await getDocs(queryCategory)
            break;
            default:

                const queryAll = queryCollection
                return await getDocs(queryAll)
               
            break;
          }

    }
    catch{
        return console.log('error de conexion')
    }
    
}
export default getProducts;