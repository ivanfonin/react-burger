import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import './Price.css';

type TPriceType = {
  icon: 'secondary' | 'primary' | 'error' | 'success';
  size: string;
  value: number;
  classes: string;
};

function Price({ icon, size, value, classes }: TPriceType) {
  return (
    <div className={`Price Price__${size} ${classes}`}>
      <p className={`text text_type_digits-${size} pr-2`}>{value}</p>
      <CurrencyIcon type={icon} />
    </div>
  );
}

export default Price;
