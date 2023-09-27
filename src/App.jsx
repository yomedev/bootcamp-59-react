import { Component } from "react";
import { Cart } from "./components/Cart";
import { Header, Layout } from "./components/Layout";
import { Modal } from "./components/Modal";
import { ProductsList } from "./components/Products/ProductsList";

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  handleModalToggle = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <Layout>
        <Header>Hello world</Header>

        {isModalOpen && (
          <Modal onModalClose={this.handleModalToggle} >
            <Cart defaultQuantity={10} />
          </Modal>
        )}

        <ProductsList onModalOpen={this.handleModalToggle} />
      </Layout>
    );
  }
}

// const App = () => {
//   return (
//     <Layout>
//       <Header>Hello world</Header>

//       {/* {isModalOpen ? (
//         <Modal>
//           <Cart defaultQuantity={10} />
//         </Modal>
//       ) : null} */}

//       {isModalOpen && (
//         <Modal>
//           <Cart defaultQuantity={10} />
//         </Modal>
//       )}

//       <ProductsList />
//     </Layout>
//   );
// };

// export default App;
