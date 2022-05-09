function ButtonAddToShoppingCart(props) {
  return (
    <button className="addButton" onClick={props.data}>
      <p className="addButton">Add To Cart</p>
    </button>
  );
}

export default ButtonAddToShoppingCart;
