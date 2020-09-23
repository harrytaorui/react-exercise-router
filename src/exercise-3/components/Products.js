import React, {Component, Fragment} from 'react';
import data from '../mockups/data.json';
import {Link} from "react-router-dom";

class Products extends Component {

  render() {

    return (
      <Fragment>
        <section className='view-page'>
          <h1>All Products:</h1>
          <div className='product'>
            {Object.keys(data).map((key, index) => {
              return <Link to={
                {
                  pathname: '/products/' + data[key].id,
                  item: data[key]
                }
              } key={index} className='items'>
                {data[key].name}
              </Link>;
            })}
          </div>
        </section>
      </Fragment>
    )
  }


}

export default Products;