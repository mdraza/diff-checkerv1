import { useState } from "react";
import { diffChars } from "diff";
import { GrClear } from "react-icons/gr";
import { Link } from "react-scroll";

const TextDiffChecker = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState([]);

  const handleTextChange = (event, setText) => {
    setText(event.target.value);
  };

  const handleCheckDiff = () => {
    if (text1 == "" || text2 == "") return;
    const diff = diffChars(text1, text2);
    setDiff(diff);
  };

  const handleClearText1 = () => {
    setText1("");
  };
  const handleClearText2 = () => {
    setText2("");
  };

  const handleClearAll = () => {
    setText1("");
    setText2("");
    setDiff([]);
  };

  return (
    <div id="top">
      <div className="w-100 flex h-[70vh] m-1 md:m-3 md:space-x-3 space-y-1 md:space-y-0 flex-col md:flex-row">
        <div className="flex-1 rounded-md md:mb-0 mb-10">
          <textarea
            className="w-[100%] h-[100%] p-2 dark:bg-[#2b2b2b] dark:text-white rounded-md border-[2px] border-slate-300 dark:border-[#464646] outline-none focus-visible:border-[#5002d0] dark:focus-visible:border-slate-300"
            placeholder="Old content"
            value={text1}
            onChange={(e) => handleTextChange(e, setText1)}
          />
          <div className="flex justify-between">
            <p className="text-sm text-slate-500 dark:text-[#9a9a9a]">
              Words count:{" "}
              <b>{text1 === "" ? "0" : text1.trim().split(" ").length}</b>
            </p>
            <button
              className="text-2xl text-slate-600 dark:text-[#9a9a9a] hover:text-slate-700 transition-all dark:hover:text-slate-300"
              onClick={handleClearText1}
            >
              <GrClear />
            </button>
          </div>
        </div>
        <div className="flex-1 rounded-md md:mb-0 mb-8">
          <textarea
            className="w-[100%] h-[100%] p-2 rounded-md border-[2px] dark:bg-[#2b2b2b] dark:text-white border-slate-300 dark:border-[#464646] outline-none focus-visible:border-[#5002d0] dark:focus-visible:border-slate-300"
            placeholder="New content"
            value={text2}
            onChange={(e) => handleTextChange(e, setText2)}
          />
          <div className="flex justify-between">
            <p className="text-sm text-slate-500 dark:text-[#9a9a9a]">
              Words count:{" "}
              <b>{text2 === "" ? "0" : text2.trim().split(" ").length}</b>
            </p>
            <button
              className="text-2xl text-slate-600 dark:text-[#9a9a9a] hover:text-slate-700 transition-all dark:hover:text-slate-300"
              onClick={handleClearText2}
            >
              <GrClear />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[35px] md:mt-[50px]">
        <Link
          to="result"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="bg-[#4608ad] hover:bg-[#551bb3] dark:hover:bg-[#333] dark:transition-all transition-all rounded text-white px-6 py-[14px] md:px-8 md:py-3 mb-6 md:mb-0 mt-1  dark:text-white dark:bg-[#2b2b2b]  cursor-pointer"
          onClick={handleCheckDiff}
        >
          Compute Difference
        </Link>
      </div>
      <div className="md:mt-11 md:m-3 m-2" id="result">
        <div className=" bg-white p-2 md:p-2 rounded min-h-20 dark:bg-[#2b2b2b] dark:text-white">
          {diff.length == 0 ? (
            <span className="text-[#676767c5] dark:text-[#ffffff89]">
              Difference results (if there are any)
            </span>
          ) : (
            diff.map((part, index) => {
              return (
                <span
                  key={index}
                  className={
                    part.added ? "added" : part.removed ? "removed" : ""
                  }
                >
                  {part.value}
                </span>
              );
            })
          )}
        </div>

        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="bg-[#4608ad] dark:bg-[#2b2b2b] hover:bg-[#551bb3] transition-all dark:hover:bg-[#333] rounded text-white px-6 py-2 md:mt-4 mt-3 cursor-pointer inline-block"
          onClick={handleClearAll}
        >
          Clear all
        </Link>
      </div>
    </div>
  );
};

export default TextDiffChecker;
