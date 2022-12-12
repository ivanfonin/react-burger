import Ingredient from '../ingredient/Ingredient';
import IngredientsSectionTitle from './ingredients-section-title/IngredientsSectionTitle';
import { ingredientsPropTypes } from '../../utils/constants';
import { PropTypes } from 'prop-types';
import { useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_TAB } from '../../services/actions/tabs';

import styles from './IngredientsSection.module.css';

const IngredientsSection = forwardRef(({ type, ingredients }, ref) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const sections = document.querySelectorAll('.burger-ingredients > section');

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0.45) {
            dispatch({type: SET_ACTIVE_TAB, tab: entry.target.className});
          }
        }
      })
    }

    const options = {
      root: document.querySelector('.burger-ingredients'),
      rootMargin: '0px',
      threshold: [0, 0.5, 1]
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, [dispatch]);

  return (
    <section className={ type } ref={ ref }>
      <IngredientsSectionTitle type={ type } />
      <ul className={ `${styles.list} pt-6 pl-4 pr-4 pb-0` }>
        { ingredients.map(ingredient => {
          return (
            <li className={ styles.item } key={ ingredient._id }>
              <Ingredient ingredient={ ingredient } />
            </li>
          );
        } ) }
      </ul>
    </section>
  );
});

IngredientsSection.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: ingredientsPropTypes
}

export default IngredientsSection;