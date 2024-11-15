import React from "react";

interface OptionProps {
  length: number;
  setLength: (arg: number) => void;
  setIncludeCharacters: (arg: boolean) => void;
  setIncludeNumber: (arg: boolean) => void;
  includeNumber: boolean;
  includeCharacters: boolean;
}

const Options: React.FC<OptionProps> = ({
  length,
  setLength,
  setIncludeCharacters,
  setIncludeNumber,
  includeNumber,
  includeCharacters,
}) => {
  const toggleBoolean = (
    setter: (arg: boolean) => void,
    currentValue: boolean
  ) => {
    setter(!currentValue);
  };
  return (
    <div className="bg-purple-950 text-slate-200 w-3/5 m-auto rounded-xl p-4 my-4 flex flex-col gap-4">
      <div className="flex align-center justify-center">
        <div className="flex w-48 text-xl p-auto">
          <h5>Length</h5>
          <h5>({length}):</h5>
        </div>
        <div className="w-64">
          <input
            type="range"
            name=""
            id=""
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            placeholder="Password"
            readOnly
            className="cursor-pointer w-64 h-2 bg-gray-200 rounded-lg appearance-none dark:bg-gray-400"
          />
        </div>
      </div>
      <div className="flex align-center justify-center text-xl">
        <h5 className="w-48">Allow Numbers:</h5>
        <input
          className="w-64"
          type="checkbox"
          name=""
          id=""
          onClick={() => toggleBoolean(setIncludeNumber, includeNumber)}
        />
      </div>
      <div className="flex align-center justify-center text-xl">
        <h5 className="w-48">Allow Characters:</h5>
        <input
          className="w-64"
          type="checkbox"
          name=""
          id=""
          onClick={() => toggleBoolean(setIncludeCharacters, includeCharacters)}
        />
      </div>
    </div>
  );
};

export default Options;
