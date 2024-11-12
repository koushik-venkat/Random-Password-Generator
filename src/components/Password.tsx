import React, { useCallback, useRef } from "react";

const Password = ({ password }) => {
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex justify-center align-center">
      <div className="bg-white w-96 h-10 rounded-l-lg flex items-center">
        <input
          type="text"
          className="text-center w-full"
          ref={passwordRef}
          value={password}
          readOnly
        />
      </div>
      <div className="bg-red-500 w-16 rounded-r-lg">
        <button className="w-full h-full text-white" onClick={copyPassword}>
          copy
        </button>
      </div>
    </div>
  );
};

export default Password;
