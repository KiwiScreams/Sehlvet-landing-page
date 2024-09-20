import Customer from "../../components/customer/Customer";
import Layout from "../../components/layout/Layout";
import Summer from "../../components/summer/Summer";
import Trending from "../../components/trending/Trending";

const Home = () => {
  return (
    <>
      <Layout />
      <Trending />
      <Summer />
      <Customer />
    </>
  );
};

export default Home;
