import React, {Fragment} from 'react';

const Product = (props) => {

  const item = props.location.item;
  return (
    <Fragment>
      <section className='view-page'>
        <h1>Product Details:</h1>
        {Object.keys(item).map((key, index) => {
          return <h2 key={index}>{key}: {item[key]}</h2>
        })}
        <h2>URL: {props.location.pathname}</h2>
      </section>
    </Fragment>
  )
}
export default Product;