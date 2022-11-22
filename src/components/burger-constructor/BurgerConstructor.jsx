import Price from '../price/Price';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ConstructorContext } from '../../context/constructor-context/constructorContext';
import { useMemo } from 'react';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor({ createOrder }) {
  const { constructorState } = useContext(ConstructorContext);

  const orderTotal = useMemo(() => {
    let total = 0;
    total += constructorState.ingredients?.reduce((prev, current) => current.price + prev, 0 );
    total += constructorState.bun?.price * 2;
    return (total >= 0) ? total : 0;
  }, [
    constructorState.ingredients,
    constructorState.bun
  ]);

  const handleDelete = () => {
    console.log('delete');
  }

  const handleCheckout = () => {
    const ingredients = [];
    ingredients.push(constructorState.bun._id)
    constructorState.ingredients.forEach(ingredient => ingredients.push(ingredient._id))
    ingredients.push(constructorState.bun._id)
    createOrder({ "ingredients": ingredients });
  }

  return (
    <>
      <section className={ `${styles.section } pl-4 pr-4` }>
        { constructorState.bun && (
          <ConstructorElement
            type='top'
            isLocked={ true }
            text={ constructorState.bun.name }
            price={ constructorState.bun.price }
            thumbnail={ constructorState.bun.image }
          />
        ) }
        { constructorState.ingredients.map((ingredient, index) => {
          return <ConstructorElement
            index={ index }
            key={ ingredient._id }
            text={ ingredient.name }
            price={ ingredient.price }
            thumbnail={ ingredient.image }
            handleClose={ handleDelete }
          />
        }) }
        { constructorState.bun && (
          <ConstructorElement
            type='bottom'
            isLocked={ true }
            text={ constructorState.bun.name }
            price={ constructorState.bun.price }
            thumbnail={ constructorState.bun.image }
          />
        ) }
      </section>
      <div className={ `${styles.total} pl-4 pr-4` }>
        <Price icon="primary" size="medium" value={ orderTotal } classes='pr-10' />
        <Button htmlType='button' size="large" onClick={ handleCheckout }>Оформить заказ</Button>
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  createOrder: PropTypes.func.isRequired
}

export default BurgerConstructor;
