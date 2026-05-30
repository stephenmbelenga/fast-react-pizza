import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-10 py-16 text-center">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 text-2xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
