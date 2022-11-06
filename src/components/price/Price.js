import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Price.css';

function Price({ icon, size, value, classes }) {
  return (
    <div className={ `Price Price__${size} ${classes}` }>
      <p className={ `text text_type_digits-${size} pr-2` }>{ value }</p>
      <CurrencyIcon type={ icon } className='xxxlarge' />
    </div>
  )
}

export default Price;