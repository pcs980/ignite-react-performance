import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((sum, prod) => sum + prod.price, 0);
  }, [results]);

  return (
    <div>
      <h2>Total price: {totalPrice}</h2>
      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}