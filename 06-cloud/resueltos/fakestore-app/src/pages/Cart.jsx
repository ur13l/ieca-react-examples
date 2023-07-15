import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { totalPrices } from "../redux/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  useEffect(() => {
    dispatch(totalPrices());
  }, [items]);
  return (
    <div>
      <h1>Carrito</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          {items.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
        <div className="font-bold text-3xl">TOTAL: ${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
