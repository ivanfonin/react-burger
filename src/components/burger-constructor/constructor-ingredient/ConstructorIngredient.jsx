
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { PropTypes } from 'prop-types';

import styles from './ConstructorIngredient.module.css';

function ConstructorIngredient({ id, index, name, price, image, handleDelete, moveIngredient }) {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveIngredient(dragIndex, hoverIndex);

      item.index = hoverIndex;
    }
  });

  const [, drag] = useDrag({
    type: 'constructor-ingredient',
    item: () => {
      return { id, index }
    }
  });

  drag(drop(ref));

  return (
    <li ref={ref} className={styles.ingredient} data-handler-id={handlerId} draggable>
      <DragIcon type="primary" />
      <ConstructorElement
        index={ index }
        text={ name }
        price={ price }
        thumbnail={ image }
        handleClose={ e => handleDelete(id) }
      />
    </li>
  )
}

ConstructorIngredient.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  moveIngredient: PropTypes.func.isRequired
}

export default ConstructorIngredient;