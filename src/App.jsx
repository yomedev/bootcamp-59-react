import { Header, Layout } from "./components/Layout";
import { Products } from "./components/Products";
// import {Timer} from "./components/Timer"
// import {Rerender} from "./components/Rerender"

const App = () => {
  return (
    <Layout>
      {/* <Rerender />
      <Timer /> */}
      <Header>Hello world</Header>
      <Products />
    </Layout>
  );
};

export default App;
