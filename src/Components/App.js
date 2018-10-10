import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Contact from './Contact';
import Clothes from './Clothes';
import NavBar from './NavBar';
import Footer from './Footer';
import Callback from '../Auth0/Callback'
import Admin from './Admin'
import SecuredRoute from '../Auth0/SecuredRoute';
import Routing from './Routing';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        products: [],
        filteredProducts: [],
        formData: [],
        isEditing: false,
        contact: [],
        item: '',
        price: '',
        category: '',
        availability: ''
    };
  }

  componentWillMount() {
    fetch(`http://localhost:4000/products`)
      .then(response => response.json())
      .then(response => 
          this.setState({
              products: response,
              filteredProducts: response
          })
      )
      fetch(`http://localhost:4000/form`)
      .then(response => response.json())
      .then(response => 
        this.setState({ 
            contact: response
        })
     )
  }


  deleteProduct = (id) => {
    fetch (`http://localhost:4000/products/${id}`, {
        method: "DELETE",
    }).then(response => response.json())
    .catch(err => console.log(err))
  }

  handleEdit = (e) => {
    e.preventDefault();

    let edit = !this.state.isEditing;
    this.setState({
        isEditing: edit
    })
  }

  productFetch = (id, info) => {
      fetch(`http://localhost:4000/products/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(info)
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))
      window.location.reload();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  formSubmit = (e, id) =>  {
    e.preventDefault();
    const {item, price, category, availability} = this.state;
    let info = {item, price, category, availability};

    this.productFetch(id, info);
  }

  filteredProducts = (props) => {
    this.state.products.map((products) => {
        if (document.getElementById('sortBy').value === 'All') {
            let products = this.state.products;

            this.setState({
                filteredProducts: products
            })
        } else if (document.getElementById('sortBy').value === 'Tops') {
            let tops = this.state.products.filter(function (i) {
                return i.category === 'top';
            });

            this.setState ({
                filteredProducts: tops
            })
        } else if (document.getElementById('sortBy').value === 'Dresses') {
            let dresses = this.state.products.filter(function (i) {
                return i.category === 'dress';
            });

            this.setState ({
                filteredProducts: dresses
            })
        } else if (document.getElementById('sortBy').value === 'Pants') {
            let pants = this.state.products.filter(function (i) {
                return i.category === 'pants';
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
    return (
      <Router>
        <div>
            <NavBar />
            <Route name="Homepage" exact path="/" component={Homepage} />
            <Routing name="Contact" exact path="/contact" component={Contact} />
            <Routing name="Clothes" exact path="/clothes" 
                component={Clothes} 
                products={this.state.filteredProducts} filteredProducts={this.filteredProducts}
            />
            <Route exact path="/callback" component={Callback}/>
            <SecuredRoute exact path="/admin"
                component={Admin} 
                contact={this.state.contact}
                products={this.state.products} 
                formData={this.state.formData}
                deleteProduct={this.deleteProduct}
                handleEdit={this.handleEdit}
                onChange={this.onChange}
                formSubmit={this.formSubmit}
            />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;