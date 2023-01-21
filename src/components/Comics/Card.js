import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';
export const Card = ({ data }) => {
  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
              <div className="card" key={item.id}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                <div className="title">
                  <h3>Limted Addtion Toys</h3>
                  <p>Action Figure from the Pop Culture Landscape</p>
                  <div className = "cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                    <p className='add'>Add to Cart</p>
                  </div>
                </div>
              </div>
            )
          })
        ):""
      }

    </>
  )
}

