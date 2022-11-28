import Price from '../price/Price';
import { Loader } from '../loader/loader';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { checkout } from '../../services/actions/checkout';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor() {
  const { burger, orderRequest } = useSelector(state => ({
    burger: state.burger,
    orderRequest: state.checkout.orderRequest
  }));

  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('delete');
  }

  const handleCheckout = () => {
    const ingredients = [];

    ingredients.push(burger.bun._id);
    burger.ingredients.forEach(ingredient => ingredients.push(ingredient._id));
    ingredients.push(burger.bun._id);

    dispatch(checkout({ "ingredients": ingredients }));
  }

  return (
    <>
      <section className={ `${styles.section } pl-4 pr-4` }>
        { burger.bun && (
          <ConstructorElement
            type='top'
            isLocked={ true }
            text={ burger.bun.name }
            price={ burger.bun.price }
            thumbnail={ burger.bun.image }
          />
        ) }
        { burger.ingredients.map((ingredient, index) => {
          return <ConstructorElement
            index={ index }
            key={ ingredient._id }
            text={ ingredient.name }
            price={ ingredient.price }
            thumbnail={ ingredient.image }
            handleClose={ handleDelete }
          />
        }) }
        { burger.bun && (
          <ConstructorElement
            type='bottom'
            isLocked={ true }
            text={ burger.bun.name }
            price={ burger.bun.price }
            thumbnail={ burger.bun.image }
          />
        ) }
      </section>
      <div className={ `${styles.total} pl-4 pr-4` }>
        { orderRequest && ( <Loader size="medium" /> ) }
        <Price icon="primary" size="medium" value={ burger.total } classes='pr-10' />
        <Button htmlType='button' size="large" onClick={ handleCheckout }>
            Оформить заказ
        </Button>
      </div>
    </>
  )
}

export default BurgerConstructor;
