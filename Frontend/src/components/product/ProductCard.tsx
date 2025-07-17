import { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import type { Product } from "../../lib/types";

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isWishlisted ? "bg-red-500 text-white" : "bg-white/90 text-gray-600"
          }`}
        >
          <HeartIcon className="w-5 h-5" />
        </button>
        {product.discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{Math.round(product.discountPercentage)}%
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">{product.rating.toFixed(1)}</span>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="text-sm text-gray-500 line-through ml-1">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
