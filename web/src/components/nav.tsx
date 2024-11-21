import React from "react";
import { collection } from "../types/collection";

const Nav = () => {
  // query: string,
  // showCollection: boolean,
  // collections: collection[],
  // currentCollection: collection,
  // setQuery: (arg0: string) => void,
  // setShowCollection: (arg0: boolean) => void,
  // setCurrentCollection: (arg0: collection) => void,
  // searchPhotos: () => void
  return (
    <nav className="fixed top-0 right-0 left-0 bg-[#050417] flex items-center h-44 lg:h-32 px-12">
      <img src="/Logo.svg" alt="logo" className="mr-4" />
      <div className="w-full flex flex-wrap items-center md:flex-row flex-col">
        some text
        {/* <input
          type="text"
          placeholder="Query"
          value={query}
          className="flex-auto w-80 h-5 p-6 mx-4 rounded-md placeholder:text-[#D5D7E5] font-bold"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <div className="flex-auto w-80 min-w-52 mx-4 my-2 lg:my-0 relative">
          <button
            className={`w-full h-5 p-6 flex justify-between items-center bg-white text-[#D5D7E5} ${
              showCollection ? "rounded-t-md" : "rounded-md"
            }`}
            onClick={() => {
              setShowCollection(!showCollection);
            }}
          >
            <p className="font-bold">{currentCollection.title}</p>
            <img src="/Polygon.svg" />
          </button>
          <div className="w-4/5 h-3 rounded-lg bg-slate-400 absolute -z-10 left-0 right-0 mx-auto -bottom-1" />
          {showCollection && (
            <div
              className={`absolute bg-white w-full flex flex-col divide-y divide-solid ${
                showCollection ? "rounded-b-md" : "rounded-md"
              }`}
            >
              {collections &&
                collections.map((collection: collection) => {
                  return (
                    <button
                      className="py-3 pl-6 font-bold hover:bg-slate-300 text-left border-slate-400"
                      onClick={() => {
                        setCurrentCollection(collection);
                        setShowCollection(false);
                      }}
                      key={collection.id}
                    >
                      {collection.title}
                    </button>
                  );
                })}
            </div>
          )}
        </div>
        <button
          className="flex-auto bg-[#2A2B8D] text-white font-bold rounded-full py-3 px-32 ml-4 lg:mt-2"
          onClick={() => searchPhotos()}
        >
          Search
        </button> */}
      </div>
    </nav>
  );
};

export default Nav;
