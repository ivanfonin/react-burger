import Price from '../price/Price';
import { Loader } from '../loader/loader';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout } from '../../services/actions/checkout';
import { useDrop } from 'react-dnd';
import { ADD_BURGER_INGREDIENT, REMOVE_BURGER_INGREDIENT, MOVE_BURGER_INGREDIENT } from '../../services/actions/burger';
import ConstructorIngredient from './constructor-ingredient/ConstructorIngredient';
import { v4 as uuidv4 } from 'uuid';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor() {
  const { burger, orderRequest } = useSelector(state => ({
    burger: state.burger,
    orderRequest: state.checkout.orderRequest
  }));

  const dispatch = useDispatch();

  const handleDelete = useCallback((id) => {
    dispatch({
      type: REMOVE_BURGER_INGREDIENT,
      id
    });
  }, [dispatch]);

  const handleCheckout = () => {
    const ingredients = [];

    ingredients.push(burger.bun._id);
    burger.ingredients.forEach(ingredient => ingredients.push(ingredient._id));
    ingredients.push(burger.bun._id);

    dispatch(checkout({ 'ingredients': ingredients }));
  }

  const [{ isHover }, dropTargetRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch({
        type: ADD_BURGER_INGREDIENT,
        ingredient: { uuid: uuidv4(), ...ingredient }
      });
    }
  });

  const moveIngredient = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_BURGER_INGREDIENT,
      dragIndex,
      hoverIndex
    })
  }, [dispatch]);

  const renderConstructorElement = useCallback((ingredient, index) => {
    return (
      <ConstructorIngredient 
        key={ingredient.uuid} 
        id={ingredient._id} 
        handleDelete={handleDelete} 
        moveIngredient={moveIngredient} 
        index={index} 
        {...ingredient}
      />
    )
  }, [handleDelete, moveIngredient]);

  return (
    <>
      <section className={ `${styles.section } pr-4 ${isHover ? 'hover' : 'no-hover'}` } ref={dropTargetRef}>
        { burger.bun && (
          <ConstructorElement
            type='top'
            isLocked={ true }
            text={ burger.bun.name + ' (верх)' }
            price={ burger.bun.price }
            thumbnail={ burger.bun.image }
          />
        ) }
        <ul className={styles.ingredients}>
          { burger.ingredients.map((ingredient, index) => renderConstructorElement(ingredient, index)) }
        </ul>
        { burger.bun && (
          <ConstructorElement
            type='bottom'
            isLocked={ true }
            text={ burger.bun.name + ' (низ)' }
            price={ burger.bun.price }
            thumbnail={ burger.bun.image }
          />
        ) }
      </section>
      <div className={ `${styles.total} pl-4 pr-4` }>
        { orderRequest && ( <Loader size="medium" /> ) }
        <Price icon='primary' size='medium' value={ burger.total } classes='pr-10' />
        <Button htmlType='button' size='large' onClick={ handleCheckout } disabled={!burger.bun || !burger.ingredients.length}>
            Оформить заказ
        </Button>
      </div>
    </>
  )
}

export default BurgerConstructor;
