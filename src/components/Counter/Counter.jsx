import { AndroidIcon } from "../AndroidIcon/AndroidIcon";
import { AppleIcon } from "../AppleIcon/AppleIcon";
import { useEffect, useState } from "react";

const COUNTER_LOCAL_STORAGE_KEY = "counter";

const getLocalData = (key, defaultValue = 0) => {
  const localData = JSON.parse(localStorage.getItem(COUNTER_LOCAL_STORAGE_KEY));
  console.log('getLocalData');
  return localData ? localData[key] : defaultValue;
};

export const Counter = ({ defaultAndroid }) => {
  const [android, setAndroid] = useState(() => getLocalData('android'));
  const [iphone, setIphone] = useState(() => getLocalData('iphone'));

  const handleUpdate = (event) => {
    const { name } = event.target;
    switch (name) {
      case "android":
        setAndroid(android + 1);
        break;
      case "iphone":
        setIphone(iphone + 1);
        break;
      default:
    }
  };

  useEffect(() => {
    localStorage.setItem(
      COUNTER_LOCAL_STORAGE_KEY,
      JSON.stringify({ android, iphone })
    );
  }, [android, iphone]);

  return (
    <div className=" mx-auto w-75 mb-5 p-5 text-white bg-dark rounded-3 row">
      <div className="col-6 d-flex flex-column align-items-center gap-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: 100, height: 100 }}
        >
          <h3>{android}</h3>
          <AndroidIcon
            width={50 + android - iphone}
            height={50 + android - iphone}
          />
        </div>
        <button
          type="button"
          name="android"
          className="btn p-3 btn-outline-light mx-2"
          onClick={handleUpdate}
        >
          Android
        </button>
      </div>

      <div className="col-6 d-flex flex-column align-items-center gap-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: 100, height: 100 }}
        >
          <h3>{iphone}</h3>
          <AppleIcon
            width={50 + iphone - android}
            height={50 + iphone - android}
          />
        </div>
        <button
          type="button"
          name="iphone"
          className="btn p-3 btn-outline-light mx-2"
          onClick={handleUpdate}
        >
          iPhone
        </button>
      </div>
    </div>
  );
};

// export default class Counter extends Component {
//   state = {
//     android: 0,
//     iphone: 0,
//   };

//   render() {
//     const { android, iphone } = this.state;
//     return (
//       <div className=" mx-auto w-75 mb-5 p-5 text-white bg-dark rounded-3 row">
//         <div className="col-6 d-flex flex-column align-items-center gap-5">
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ width: 100, height: 100 }}
//           >
//             <AndroidIcon
//               width={50 + android - iphone}
//               height={50 + android - iphone}
//             />
//           </div>
//           <button
//             type="button"
//             name="android"
//             className="btn p-3 btn-outline-light mx-2"
//             onClick={() =>
//               this.setState((prev) => ({ android: prev.android + 1 }))
//             }
//           >
//             Android
//           </button>
//         </div>

//         <div className="col-6 d-flex flex-column align-items-center gap-5">
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ width: 100, height: 100 }}
//           >
//             <AppleIcon
//               width={50 + iphone - android}
//               height={50 + iphone - android}
//             />
//           </div>
//           <button
//             type="button"
//             name="iphone"
//             className="btn p-3 btn-outline-light mx-2"
//             onClick={() =>
//               this.setState((prev) => ({ iphone: prev.iphone + 1 }))
//             }
//           >
//             iPhone
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
