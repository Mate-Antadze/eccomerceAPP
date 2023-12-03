import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../components/BreadCrum/BreadCrum';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../components/ProductsDisplay/ProductDisplay';
import { Description } from '../components/Description/Description';
import { RelatedProduct } from '../components/RelatedProduct/RelatedProduct';

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
      {/* Render other parts of the product details */}
    </div>
  );
};
