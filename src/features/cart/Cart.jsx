import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="h-dvh p-16">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="my-10 text-xl font-semibold capitalize">
        Your cart, {username}
      </h2>

      <ul className="divide-y divide-stone-400 border-b-2 text-xl font-normal">
        {cart.map((item, index) => (
          <CartItem item={item} key={`${item.pizzaId}-${index}`} />
        ))}
      </ul>

      <div className="mt-8 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
