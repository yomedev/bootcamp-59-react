import { useContext, useState } from "react";

import { Button } from "../../../Button";
import { Modal } from "../../../Modal";
import { TimerModal } from "../../../Timer/TimerModal";
import { AuthContext } from "../../../../context/AuthContext";

export const Nav = () => {
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const toggleTimer = () => setIsTimerOpen((prev) => !prev);

  const { logout } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <Button
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className="btn-light"
          disabled
        >
          Home page
        </Button>
        <Button
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className="btn-light"
          disabled
        >
          Create new post
        </Button>
        <Button
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className="btn-light"
          onClick={toggleTimer}
        >
          Open timer
        </Button>
      </div>

      {isTimerOpen && (
        <Modal onModalClose={toggleTimer}>
          <TimerModal />
        </Modal>
      )}

      <Button onClick={logout} className="btn-danger mt-auto">
        Log Out
      </Button>
    </div>
  );
};
