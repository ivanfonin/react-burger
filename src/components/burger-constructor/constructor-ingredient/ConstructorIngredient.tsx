import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import styles from './ConstructorIngredient.module.css';

type TConstructorIngredientProps = {
  id: string;
  index: number;
  name: string;
  price: number;
  image: string;
  type?: string;
  handleDelete: (id: string) => void;
  moveIngredient: (dragIndex: number, hoverIndex: number) => void;
};

function ConstructorIngredient({
  id,
  index,
  name,
  price,
  image,
  handleDelete,
  moveIngredient,
}: TConstructorIngredientProps) {
  const ref = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'constructor-ingredient',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => {
      return { id, index };
    },
  });

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  return (
    <li
      ref={ref}
      className={styles.ingredient}
      data-handler-id={handlerId}
      style={{ opacity }}
      draggable
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDelete(id)}
      />
    </li>
  );
}

export default ConstructorIngredient;
