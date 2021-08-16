import React from 'react'
import { useRouter } from 'next/dist/client/router'

 const ProductItem = () => {

    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Esta es la pagina del producto: {id}</h1>
        </div>
    )
}

export default ProductItem
