import React from 'react';

class Products extends React.Component {

    render() {
        return (
            <div className='product'>
                <div className="main">
                    <img src={this.props.img} key={this.props.key} alt={this.props.alt} className="productImg"/>
                <div className='description'>
                        <b>{this.props.item}</b>
                    <p>
                        ${this.props.price}.00 USD
                    </p>
                </div>
              </div>
            </div>
        );
      }
}

export default Products;