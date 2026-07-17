import { products } from "../../data/products";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((item) => (
        <div key={item.id} className="border rounded-lg p-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />

          <h2 className="mt-3 font-semibold">{item.name}</h2>

          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
