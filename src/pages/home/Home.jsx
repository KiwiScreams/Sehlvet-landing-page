import Customer from "../../components/customer/Customer";
import Layout from "../../components/layout/Layout";
import Summer from "../../components/summer/Summer";
import Trending from "../../components/trending/Trending";
import Winter from "../../components/winter/Winter";

const Home = () => {
  return (
    <>
      <Layout />
      <Trending />
      <Summer />
      <Winter />
      <Customer />
    </>
  );
};

export default Home;
