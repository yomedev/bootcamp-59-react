import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ onModalClose, children }) => {

  const ref = useRef(null)

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };
  
  useEffect(() => {
    console.log(ref.current)
    const handleEscape = (event) => {
      if (event.code === "Escape") {
        console.log(event.code);
        onModalClose();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      console.log("removeEventListener");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onModalClose]);

  const jsx = (
    <>
      <div ref={ref} className="modal-backdrop fade show" />

      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={handleBackdrop}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onModalClose}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(jsx, modalRoot);
};

// export class Modal extends Component {
//   handleEscape = (event) => {
//     if (event.code === "Escape") {
//       console.log(event.code);
//       this.props.onModalClose();
//     }
//   };

//   componentDidMount() {
//     document.addEventListener("keydown", this.handleEscape);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleEscape);
//   }

//   handleBackdrop = (event) => {
//     if (event.target === event.currentTarget) {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     const { children, onModalClose } = this.props;
//     const jsx = (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div
//           className="modal fade show"
//           style={{ display: "block" }}
//           onClick={this.handleBackdrop}
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={onModalClose}
//                 />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );

//     return createPortal(jsx, modalRoot);
//   }
// }

// export const Modal = ({ children, onModalClose }) => {
//   const handleBackdrop = (event) => {
//     if (event.target === event.currentTarget) {
//       onModalClose();
//     }
//   };

//   return (
//     <>
//       <div className="modal-backdrop fade show" />

//       <div
//         className="modal fade show"
//         style={{ display: "block" }}
//         onClick={handleBackdrop}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//                 onClick={onModalClose}
//               />
//             </div>

//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
