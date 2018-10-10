import React from 'react';
import {Route} from 'react-router-dom';

function Routing(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        return <Component products={props.products} filteredProducts={props.filteredProducts} />
    }} />
  );
}

export default Routing;