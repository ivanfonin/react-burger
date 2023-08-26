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

import { TIngredient } from '../../services/types/data';

type THandleDeleteFunc = (id: string) => void;
type TRenderConstructorElementFunc = (
  ingredient: TIngredient,
  index: number
) => void;
type TMoveIngredientFunc = (dragIndex: number, hoverIndex: number) => void;
type TCallbackFunc = () => void;

function BurgerConstructor() {
  const { burger, orderRequest, user } = useSelector((state: any) => ({
    burger: state.burger,
    orderRequest: state.checkout.orderRequest,
    user: state.auth.user,
  }));

  const dispatch = useDispatch();

  const handleDelete = useCallback<THandleDeleteFunc>(
    (id) => {
      dispatch(removeBurgerIngredient(id));
      dispatch(decreaseIngredientCounter({ id }));
    },
    [dispatch]
  );

  const navigate = useNavigate();

  const handleCheckout = useCallback<TCallbackFunc>(() => {
    if (!user) {
      navigate('/login');
    } else {
      const ingredients = [];

      ingredients.push(burger.bun.id);
      burger.ingredients.forEach((ingredient: TIngredient) =>
        ingredients.push(ingredient.id)
      );
      ingredients.push(burger.bun.id);

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

  const moveIngredient = useCallback<TMoveIngredientFunc>(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(moveBurgerIngredient(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  const renderConstructorElement = useCallback<TRenderConstructorElementFunc>(
    (ingredient, index) => {
      return (
        <ConstructorIngredient
          key={ingredient.uuid}
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
        className={`${styles.section} scroll-section pr-4 ${
          isHover ? 'hover' : 'no-hover'
        }`}
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
          {burger.ingredients.map((ingredient: TIngredient, index: number) =>
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
