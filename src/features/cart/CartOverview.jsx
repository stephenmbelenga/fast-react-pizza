import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <>
      <div className="flex items-center justify-between bg-stone-600 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 py-6 font-semibold text-stone-300 sm:space-x-6">
          <span>23 pizzas</span>
          <span>$23.45</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
      <div className="bg-stone-600 py-4 text-center text-xl text-stone-200">
        <footer>&copy;{new Date().getFullYear()}</footer>
      </div>
    </>
  );
}

export default CartOverview;
