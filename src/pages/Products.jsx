import { useParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeApi";

export default function Products() {
  const products = getProducts();
  console.log(useParams());

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
