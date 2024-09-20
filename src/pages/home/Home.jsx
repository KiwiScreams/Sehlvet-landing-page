import Customer from "../../components/customer/Customer";
import Layout from "../../components/layout/Layout";
import Trending from "../../components/trending/Trending";

const Home = () => {
  return (
    <>
      <Layout />
      <Trending />
      <Customer />
    </>
  );
};

export default Home;
