import React from 'react'

const ProductList = ({products, onSelect, onAddToCart}) => {
  if (!onSelect) {
    return null;
  }
  
  return (
    <div className='row'>
        {products.map((product)=> (
            <div key={product.id} className="col-sm-3 py-2">
                <div className='card'>
                    <img src={product.image} alt={product.name} className="card-img" width="100%" height="200px"/>
                    <div className='card-body'>
                         <h6 className='cart-title'>{product.name}</h6>
                          <p>{product.price} $</p>
                          <div className='d-flex justify-content-between'>
                         <button className='btn btn-outline-success' onClick={()=> onSelect(product)} >Chi Tiết</button>
                         <button className='btn btn-success' onClick={() => onAddToCart(product)} >Thêm Giỏ Hàng</button>
                         </div>
                    </div>
                 </div>
            </div>
        ))}

    </div>
  )
}

export default ProductList