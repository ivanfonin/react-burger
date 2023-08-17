import Ingredient from '../ingredient/Ingredient';
import IngredientsSectionTitle from './ingredients-section-title/IngredientsSectionTitle';
import { useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { SET_ACTIVE_TAB } from '../../services/actions/tabs';

import styles from './IngredientsSection.module.css';

// import TIngredientsSection from '../../services/types/data';

const IngredientsSection = forwardRef(({ type, ingredients }, ref) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const sections = document.querySelectorAll('.burger-ingredients > section');

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0.45) {
            dispatch({ type: SET_ACTIVE_TAB, tab: entry.target.className });
          }
        }
      });
    };

    const options = {
      root: document.querySelector('.burger-ingredients'),
      rootMargin: '0px',
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, [dispatch]);

  return (
    <section className={type} ref={ref}>
      <IngredientsSectionTitle type={type} />
      <ul className={`${styles.list} pt-6 pl-4 pr-4 pb-0`}>
        {ingredients.map((ingredient) => {
          return (
            <Link
              className={styles.link}
              key={ingredient.id}
              to={`/ingredients/${ingredient.id}`}
              state={{ background: location }}
            >
              <li className={styles.item} key={ingredient.id}>
                <Ingredient {...ingredient} />
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
});

export default IngredientsSection;
