import Price from '../price/Price';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor({ ingredients }) {
  const getType = (index) => {
    if ( 0 === index ) {
      return 'top';
    } else if ( index === ingredients.length - 1 ) {
      return 'bottom';
    }
  }

  const createOrder = () => {
    console.log('Оформляем заказ');
  }

  return (
    <>
      <section className={ `${styles.section } pl-4 pr-4` }>
        { ingredients.map((ingredient, index) => {
          return <ConstructorElement
            key={ ingredient._id }
            type={ getType(index) }
            isLocked={ 'bun' === ingredient.type ? 1 : 0 }
            text={ ingredient.name }
            price={ ingredient.price }
            thumbnail={ ingredient.image }
          />
        })}
      </section>
      <div className={ `${styles.total} pl-4 pr-4` }>
        <Price icon="primary" size="medium" value={ ingredients.reduce((prev, current) => current.price + prev, 0 ) } classes='pr-10' />
        <Button htmlType='button' size="large" onClick={ createOrder }>Оформить заказ</Button>
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
  }))
}

export default BurgerConstructor;