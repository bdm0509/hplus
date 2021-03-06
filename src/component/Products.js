import React, { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import ProductItem from './ProductItem';
// import productData from './data/products.json'

const listProducts = `
  query ListProducts {
    listProducts {
      items {
        id
        dynamicSlug
        productName
      }
    }
  }
`;

const Products = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = await() => {
    const productData = API.graphql(
      graphqlOperation(listProducts)
    );
    setProductList(response);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="products" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">Products</h2>
        <p>H+ Sport is <em>dedicated to creating</em> eco-friendly, high-quality, nutrient-rich, nutritional products that <em>enhance active lifestyles</em>. We <a href="#guarantee">guarantee</a> it. Take a look at some of our products.</p>
      </div>
      <ul className="product-list">
        {
          productData.map((product) => <ProductItem dynamicSlug={`${product.dynamicSlug}`} productName={`${product.productName}`} />)
        }
      </ul>
    </section>
  );
}

export default Products;