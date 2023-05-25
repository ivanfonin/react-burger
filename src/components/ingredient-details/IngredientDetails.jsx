import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';

import styles from './IngredientDetails.module.css';
import { Loader } from '../loader/loader';

function IngredientDetails() {
  const { id } = useParams();
  const { ingredients } = useSelector((state) => state);
  const ingredient = ingredients?.items?.find((i) => i.id === id);
  const location = useLocation();

  const { containerClass, titleClass } = useMemo(() => {
    if (location?.state?.background?.pathname === '/') {
      console.log('from homapge');
      return {
        containerClass: styles.ingredient,
        titleClass: 'pr-15 ',
      };
    } else {
      console.log('not from homapge');
      return {
        containerClass: `${styles.ingredient} mt-15`,
        titleClass: `${styles.title_auto} `,
      };
    }
  }, [location]);

  if (!ingredient) {
    return <Loader size="large" />;
  } else {
    const { name, proteins, fat, carbohydrates, calories, image_large } =
      ingredient;
    return (
      <div className={containerClass}>
        <div className={`${styles.header} pl-10 pt-10 pr-10`}>
          <h3 className={`${titleClass}text text_type_main-large`}>
            Детали ингредиента
          </h3>
        </div>
        <img
          className={styles.image}
          src={image_large}
          alt={name}
          width="480"
          height="240"
        />
        <p
          className={`${styles.name} text text_type_main-medium pl-25 pr-25 pt-4`}
        >
          {name}
        </p>
        <ul className={`${styles.details} pt-8 pl-25 pr-25 pb-15`}>
          <li className={styles.detail}>
            <p className="text text_type_main-small text_color_inactive">
              Калории, ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive pt-2">
              {calories}
            </p>
          </li>
          <li className={styles.detail}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive pt-2">
              {proteins}
            </p>
          </li>
          <li className={styles.detail}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive pt-2">
              {fat}
            </p>
          </li>
          <li className={styles.detail}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive pt-2">
              {carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default IngredientDetails;
