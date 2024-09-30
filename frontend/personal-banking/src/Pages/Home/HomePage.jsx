import React from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state;
  return (
    <div>
      <button>
        Dark Mode
      </button>
    </div>
  );
};
export default HomePage;
