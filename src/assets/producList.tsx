import React from 'react'
import Product from './product'

const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Leptop Geming',
            description: 'High-perfomance laptop for work and play',
            price: '$999',
            imageUrl: 'https://images.unsplash.com/photo-1630794180018-433d915c34ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwZ2FtaW5nfGVufDB8fDB8fHww'
        },
        {
            name: 'MekBuk',
            description: 'High-perfomance laptop for work and play',
            price: '$1500',
            imageUrl: 'https://images.unsplash.com/photo-1617194242688-1283f274e46d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxhcHRvcCUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Laptop',
            description: 'High-perfomance laptop for work and play',
            price: '$1200',
            imageUrl: 'https://images.unsplash.com/photo-1611885936369-9b95a7a6e869?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxhcHRvcCUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Laptop',
            description: 'High-perfomance laptop for work and play',
            price: '$1000',
            imageUrl: 'https://images.unsplash.com/photo-1622820366109-3113cfa3825d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGxhcHRvcCUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Laptop',
            description: 'High-perfomance laptop for work and play',
            price: '$1300',
            imageUrl: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGxhcHRvcCUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D'
        }
    ]
        return (
            <>
                <h1>Product List</h1>
                {
                    products.map((product, index) => {
                        return (
                            <Product key={index} {...product}/>
                        )
                        
                    })
                }
            </>
            
        )
    
}

export default ProductList