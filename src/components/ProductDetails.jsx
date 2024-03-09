import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

const ProductDetails = ({ data,cart,setCart }) => {
  const { id } = useParams();
  const [selectedData, setSelectedData] = useState(null);
  const [relatedCard, setRelatedCard] = useState([]);

  useEffect(() => {
    const foundData = data.find((element) => String(element.id) === String(id));
    setSelectedData(foundData);
  }, [id, data]);
  useEffect(() => {
    if (selectedData) {
      const relatedProducts = data.filter((element) => element.category === selectedData.category);
      setRelatedCard(relatedProducts);
      // console.log(relatedProducts);
    }
  }, [selectedData, data]);
  return (
    <div>
      {selectedData && (
        <div key={selectedData.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={selectedData.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{selectedData.title}</h2>
              <p>{selectedData.description}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <p className="text-4xl bg-orange-400 text-center">RelatedProducts !!!</p>
       <Products cart={cart} setCart={setCart}  data={relatedCard}></Products>
      </div>
    </div>
  );
};

export default ProductDetails;
