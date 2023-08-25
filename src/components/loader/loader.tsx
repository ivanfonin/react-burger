import { FunctionComponent } from 'react';
import style from './loader.module.css';
import { LoaderSvg } from './loader.svg';

const loaderSizes: { [key: string]: number } = {
  small: 16,
  medium: 24,
  large: 40,
};

interface ILoaderProps {
  size: Required<string>;
  inverse?: boolean;
}

export const Loader: FunctionComponent<ILoaderProps> = ({
  size,
  inverse = false,
}) => {
  const loaderColor: string = inverse ? '#fff' : '#3C39EC';
  const wrapperStyleKey: string = 'wrapper_' + size;

  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
};
