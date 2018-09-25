import React, { Component } from 'react';
import Products from './Products';

class Clothes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            filteredProducts: []
        };

        this.filteredProducts = this.filteredProducts.bind(this);
    }

    componentWillMount() {
        const url = `http://localhost:4000/products`;
        fetch(url)
         .then(response => response.json())
         // .then(response => console.log(response[0].products))
         .then(response => 
            this.setState({
                 products: response[0].products,
                 filteredProducts: response[0].products
            })
        )
    }

    filteredProducts () {
        console.log(this.state.products);
        this.state.products.map((product) => {
            if (document.getElementById('sortBy').value === 'All') {
                let products = this.state.products;

                this.setState ({
                    filteredProducts: products
                })
            } else if (document.getElementById('sortBy').value === 'Tops') {
                let tops = this.state.products.filter(function (i) {
                    return i.type === 'top';
                });

                this.setState ({
                    filteredProducts: tops
                })
            } else if (document.getElementById('sortBy').value === 'Dresses') {
                let dresses = this.state.products.filter(function (i) {
                    return i.type === 'dress';
                });

                this.setState ({
                    filteredProducts: dresses
                })
            } else if (document.getElementById('sortBy').value === 'Pants') {
                let pants = this.state.products.filter(function (i) {
                    return i.type === 'pants';
                });

                this.setState ({
                    filteredProducts: pants
                })
            } else if (document.getElementById('sortBy').value === 'Price – Low to High') {
                let products = this.state.products;
                
                function compare (a, b) {
                    if (a.price < b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                }

                let lowPrice = products.sort(compare);

                this.setState ({
                    filteredProducts: lowPrice
                })
            } else if (document.getElementById('sortBy').value === 'Price – High to Low') {
                let products = this.state.products;
                
                function compare (a, b) {
                    if (a.price > b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                }

                let highPrice = products.sort(compare);

                this.setState ({
                    filteredProducts: highPrice
                })
            }
        })
    }

    render() {
        const productComponents = this.state.filteredProducts.map(product => (
            <Products
            key={product.id}
            item={product.item}
            img={product.url}
            price={product.price}
            type={product.type}
            alt={product.alt}
            ></Products>
        ));

        console.log(this.state);


    return (
        <div>
            <div className="productsContainer">
                <form id='filterMenu' style={{textAlign: "center", marginBottom: "25px"}}>
                    <label for="sortBy" style={{paddingRight: "10px"}}>Sort by:</label>
                    <select id="sortBy" onChange={this.filteredProducts}>
                        <option value="All">All</option>
                        <option value="Tops">Tops</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Pants">Pants</option>
                        <option value="Price – Low to High">Price – Low to High</option>
                        <option value="Price – High to Low">Price – High to Low</option>
                    </select>
                </form>
                {productComponents}
            </div>
        </div>
    )
  }
}

export default Clothes;