import { Header, Layout } from "./components/Layout";
// import { LoginForm } from "./components/LoginForm";
import { Products } from "./components/Products";

const App = () => {
  return (
    <Layout>
      <Header>Hello world</Header>
      {/* <LoginForm /> */}
      <Products />
    </Layout>
  );
};

export default App;
