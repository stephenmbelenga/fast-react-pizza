import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline md:text-2xl";
  if (to === "/")
    return (
      <button className={className} onClick={() => navigate("/")}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
