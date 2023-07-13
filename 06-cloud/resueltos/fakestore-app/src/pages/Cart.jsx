import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          {/* {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))} */}
        </div>
        {/* <div className="font-bold text-3xl">TOTAL: ${totalPrice}</div> */}
      </div>
    </div>
  );
};

export default Cart;
