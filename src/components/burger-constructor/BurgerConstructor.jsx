import Price from '../price/Price';
import { Loader } from '../loader/loader';
import {
  ConstructorElement,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout } from '../../services/actions/checkout';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import {
  addBurgerIngredient,
  moveBurgerIngredient,
  removeBurgerIngredient,
} from '../../services/actions/burger';
import {
  increaseIngredientCounter,
  decreaseIngredientCounter,
} from '../../services/actions/ingredients';
import ConstructorIngredient from './constructor-ingredient/ConstructorIngredient';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor() {
  const { burger, orderRequest, user } = useSelector((state) => ({
    burger: state.burger,
    orderRequest: state.checkout.orderRequest,
    user: state.auth.user,
  }));

  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (id) => {
      dispatch(removeBurgerIngredient(id));
      dispatch(decreaseIngredientCounter({ _id: id }));
    },
    [dispatch]
  );

  const navigate = useNavigate();

  const handleCheckout = useCallback(() => {
    if (!user) {
      navigate('/login');
    } else {
      const ingredients = [];

      ingredients.push(burger.bun._id);
      burger.ingredients.forEach((ingredient) =>
        ingredients.push(ingredient._id)
      );
      ingredients.push(burger.bun._id);

      dispatch(checkout({ ingredients: ingredients }));
    }
  }, [dispatch, burger, user, navigate]);

  const [{ isHover }, dropTargetRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addBurgerIngredient(ingredient));
      dispatch(increaseIngredientCounter(ingredient));
    },
  });

  const moveIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(moveBurgerIngredient(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  const renderConstructorElement = useCallback(
    (ingredient, index) => {
      return (
        <ConstructorIngredient
          key={ingredient.uuid}
          id={ingredient._id}
          handleDelete={handleDelete}
          moveIngredient={moveIngredient}
          index={index}
          {...ingredient}
        />
      );
    },
    [handleDelete, moveIngredient]
  );

  return (
    <>
      <section
        className={`${styles.section} pr-4 ${isHover ? 'hover' : 'no-hover'}`}
        ref={dropTargetRef}
      >
        {burger.bun && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={burger.bun.name + ' (верх)'}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
          />
        )}
        <ul className={styles.ingredients}>
          {burger.ingredients.map((ingredient, index) =>
            renderConstructorElement(ingredient, index)
          )}
        </ul>
        {burger.bun && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={burger.bun.name + ' (низ)'}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
          />
        )}
      </section>
      <div className={`${styles.total} pl-4 pr-4`}>
        {orderRequest && <Loader size="medium" />}
        <Price
          icon="primary"
          size="medium"
          value={burger.total}
          classes="pr-10"
        />
        <Button
          htmlType="button"
          size="large"
          onClick={handleCheckout}
          disabled={!burger.bun || !burger.ingredients.length}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

export default BurgerConstructor;
