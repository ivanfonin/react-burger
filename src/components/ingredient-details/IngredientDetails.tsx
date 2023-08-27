import { useSelector } from '../../services/hooks';
import { useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Loader } from '../loader/loader';
import { TIngredient } from '../../services/types/data';
import { getIngredients } from '../../utils/storeHelpers';

import styles from './IngredientDetails.module.css';

function IngredientDetails() {
  const { id } = useParams();
  const { items } = useSelector(getIngredients);
  const ingredient = items.find((i: TIngredient) => i.id === id);
  const location = useLocation();

  interface ICalculatedClasses {
    containerClass: string;
    titleClass: string;
  }

  const { containerClass, titleClass } = useMemo<ICalculatedClasses>(() => {
    if (location?.state?.background?.pathname === '/') {
      return {
        containerClass: styles.ingredient,
        titleClass: 'pr-15 ',
      };
    } else {
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
