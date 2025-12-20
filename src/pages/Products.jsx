import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../components/ProductList/ProductList';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getProducts } from '../fakeApi';

export default function Products() {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);

    if (value !== '') {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }

    setSearchParams(updatedParams);
  };

  return (
    <main>
      {/* <SearchBox value={productName} onChange={updateQueryString} /> */}
      <SearchBox
        value={productName}
        onChange={value => updateSearchParams('name', value)}
      />
      <ProductList products={visibleProducts} />
    </main>
  );
}
