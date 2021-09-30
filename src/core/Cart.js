import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Card from './Card';
import { getCart, removeItem } from './cartHelpers';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([])
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart())
    }, [run]);

    const showItems = items => {
        return (
          <div>
            <h2>Your cart has {`${items.length}`} items</h2>
            <hr />
            {items.map((product, i) => (
              <Card
                key={i}
                product={product}
                showAddToCartButton={false}
                cartUpdate={true}
                showRemoveProductButton={true}
                setRun={setRun}
                run={run}
              />
            ))}
          </div>
        );
      };

    const noItemsMessage = () => (
        <h2 className="mt-5">Your cart is empty. <br /> <Link to="/shop" style={{ color: '#FFBCBC', textDecoration: 'none', fontSize: '15px' }}> Click Here To Shop !</Link></h2>
    )

    return (
        <Layout
            className="bg-success overflow-hidden container-fluid"
            title="Shopping Cart"
            description="Manage your cart items. Add or remove items from checkout or continue shopping"
        >

            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{width:'100%'}}>
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div >
                    <h6 > Your cart summary </h6>
                    
                    <Checkout products={items} />
                </div>

            </div>

        </Layout>
    )
}

export default Cart;