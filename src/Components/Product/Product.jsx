import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cartItems: [],
    };
  }

  productList = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => console.error("Error fetching data:", error));
  };

  componentDidMount() {
    this.productList();
  }

  addToCart = (product) => {
    this.setState({ cartItems: [...this.state.cartItems, product] });
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <div id="main-container" className="px-4 py-8">
          <h1 className="text-4xl mb-8 text-center bg-blue-500 text-white py-2 rounded">
            Product
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(item => (
              <div
                id="allItem"
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="imgContainer w-full flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="h-64"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                  <h3 className="text-lg font-semibold mb-2">$ {item.price}</h3>
                  <p className="text-sm text-gray-600 mb-2 flex items-start">
                    Rate {item.rating.rate} Count {item.rating.count}
                  </p>
                  <div className="button flex gap-3">
                    <button
                      onClick={() => this.addToCart(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Add To Cart
                    </button>
                    <Link
                      to="/cart"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Product;
