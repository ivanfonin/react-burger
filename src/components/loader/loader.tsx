import style from './loader.module.css';
import { LoaderSvg } from './loader.svg';

const loaderSizes: { [key: string]: number } = {
  small: 16,
  medium: 24,
  large: 40,
};

type TLoaderType = {
  size: Required<number>;
  inverse: boolean;
};

export const Loader = ({ size, inverse = false }: TLoaderType) => {
  const loaderColor = inverse ? '#fff' : '#3C39EC';

  const wrapperStyleKey = 'wrapper_' + size;
  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
};
