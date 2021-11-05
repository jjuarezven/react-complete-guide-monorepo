import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to="/products/1">A book</Link>
        </li>
        <li>
          <Link to="/products/2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/3">Online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
