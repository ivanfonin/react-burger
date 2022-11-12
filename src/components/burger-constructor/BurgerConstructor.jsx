import Price from '../price/Price';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientsPropTypes } from '../../utils/constants';
import { PropTypes } from 'prop-types';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor({ ingredients, createOrder }) {
  const getType = (index) => {
    if ( 0 === index ) {
      return 'top';
    } else if ( index === ingredients.length - 1 ) {
      return 'bottom';
    }
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
  ingredients: ingredientsPropTypes,
  createOrder: PropTypes.func.isRequired
}

export default BurgerConstructor;
