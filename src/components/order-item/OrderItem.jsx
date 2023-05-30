import { PropTypes } from 'prop-types';

function OrderItem(props) {
  const { name } = props;

  return (
    <li className="order-item">
      <p className="text">{name}</p>
      <figure>
        <ul className="order-item__ingredients">
          <img className="order-item__ingredients-img" src="" alt="text" />
        </ul>
      </figure>
    </li>
  );
}

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OrderItem;
