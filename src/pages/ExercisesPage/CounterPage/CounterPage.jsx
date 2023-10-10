import { useEffect } from "react";
import { AndroidIcon } from "../../../components/AndroidIcon/AndroidIcon";
import { AppleIcon } from "../../../components/AppleIcon/AppleIcon";
import { useState } from "react";
import { getLocalData } from "../../../helpers/getLocalData";

const LOCAL_STORAGE_PHONES_KEY = "phones";

export const CounterPage = ({ defaultAndroid = 0 }) => {
  const [android, setAndroid] = useState(
    getLocalData({
      lsKey: LOCAL_STORAGE_PHONES_KEY,
      key: "android",
      defaultValue: defaultAndroid,
    })
  ); // 10 => 20
  const [iphone, setIphone] = useState(
    getLocalData({
      lsKey: LOCAL_STORAGE_PHONES_KEY,
      key: "iphone",
      defaultValue: 0,
    })
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_PHONES_KEY,
      JSON.stringify({ android, iphone })
    );
  }, [android, iphone]);

  const handleUpdate = (event) => {
    const { name } = event.target;
    switch (name) {
      case "android":
        setAndroid((prev) => prev + 1);
        break;
      case "iphone":
        setIphone((prev) => prev + 1);
        break;
      default:
    }
  };

  return (
    <div className=" mx-auto w-75 mb-5 p-5 text-white bg-dark rounded-3 row">
      <div className="col-6 d-flex flex-column align-items-center gap-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: 100, height: 100 }}
        >
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
