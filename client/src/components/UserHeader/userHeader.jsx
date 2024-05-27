import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profilePut } from "../../Store/profileSlice";

function UserHeader() {
  const { firstName, lastName } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.login);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  function changeEditMode() {
    setEditMode(!editMode);
  }

  function profileUpdate() {
    const profileData = {
      userName: username,
    };

    dispatch(profilePut(profileData, token));
    setEditMode(false);
  }

  return editMode ? (
    <>
      <form action="">
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="button" onClick={profileUpdate} className="edit-button">
          Edit Name
        </button>
        <button type="button" onClick={changeEditMode} className="edit-button">
          Cancel
        </button>
      </form>
    </>
  ) : (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName + " " + lastName}
      </h1>
      <button onClick={changeEditMode} className="edit-button">
        Edit Name
      </button>
    </div>
  );
}

export default UserHeader;
