import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestore } from "../index";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const data = await query(
        collection(firestore, "fakestore-test-products")
      );

      onSnapshot(data, (querySnapshot) => {
        const prd = querySnapshot.docs.map((doc) => doc.data());

        setProducts(prd);
        setLoading(false);
      });
    };

    getData();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <h1>FakeStore</h1>
      {loading && <p>Cargando...</p>}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
