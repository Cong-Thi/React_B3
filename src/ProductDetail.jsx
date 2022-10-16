import React from 'react'

const ProductDetail = ({ product }) => {
    if (!product) {
        return null;
    }
    return (

        <div>
            <div className="row mt-5">
                <div className="col-sm-4">
                    <h3 className="text-center">{product.name}</h3>
                    <img
                        src={product.image}
                        alt={product.name}
                        width="100%"
                        height="400px"
                    />
                </div>
                <div className="col-sm-8">
                    <h3>Chi Tiết Sản Phẩm</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Tên Sản Phẩm</td>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                                <td>Giá Sản Phẩm</td>
                                <td>{product.price}$</td>
                            </tr>
                            <tr>
                                <td>Mô tả ngắn</td>
                                <td>{product.shortDescription}</td>
                            </tr>
                            <tr>
                                <td>Chi tiết</td>
                                <td>{product.description}</td>
                            </tr>
        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail