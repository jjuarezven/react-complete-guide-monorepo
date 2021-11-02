import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6.25,
    title: "Product 1",
    description: "Product 1 description"
  },
  {
    id: "p2",
    price: 8.5,
    title: "Product 2",
    description: "Product 2 description"
  }
];

const Products = (props) => {
  const productList = DUMMY_PRODUCTS.map((p) => (
    <ProductItem
      key={p.id}
      id={p.id}
      title={p.title}
      price={p.price}
      description={p.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
