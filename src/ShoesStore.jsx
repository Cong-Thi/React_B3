import React, { Component } from 'react'
import Cart from './Cart';
import data from "./data.json";
import ProductDetail from './ProductDetail';
import ProductList from './ProductList'

export default class ShoesStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectProduct: null,
            isOpen: false, 
            carts: [],
          
        }
    }
    handleSelect = (product) => {
        this.setState({selectProduct: product})
        console.log(product);
    }
    handleToggleModal = () => {
      this.setState((state) => ({ isOpen: !state.isOpen }));
    };
  
    handleAddToCart = (product) => {
      const index = this.state.carts.findIndex((item) => item.id === product.id);
  
      if (index === -1) {
        this.setState((state) => ({
          carts: [...state.carts, { ...product, quantity: 1 }],
        }));
      } else {
        const newCarts = [...this.state.carts];
        newCarts[index].quantity += 1;
        this.setState({ carts: newCarts });
      }
    };
  

    handleChangeQuantity = (productId, quantity) => {
      const index = this.state.carts.findIndex((item) => item.id === productId);
      const newCarts = [...this.state.carts];
  
      if (newCarts[index].quantity === 1 && quantity === -1) {
        newCarts.splice(index, 1);
        this.setState({ carts: newCarts });
      } else {
        newCarts[index].quantity += quantity;
        this.setState({ carts: newCarts });
      }
    };
    
  render() {
    return (
      <div className='container text-center'>
        <div className="d-flex justify-content-between mb-3">
          <h1 className="text-success">Shoe Shop</h1>
          <button className="btn btn-success" onClick={this.handleToggleModal}>
            Giỏ hàng
          </button>
        </div>
        <ProductList products={data} onSelect={this.handleSelect} onAddToCart={this.handleAddToCart} />
        <ProductDetail product={this.state.selectProduct}/>
        <Cart
          isOpen={this.state.isOpen}
          carts={this.state.carts}
          onClose={this.handleToggleModal}
          onChangeQuantity={this.handleChangeQuantity}
        />
        
      </div>
    )
  }
}
