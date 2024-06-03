import React from "react";

const Button = ({ bg, size, src, alt, margin }) => {
  const buttonStyle = {
    backgroundColor: bg,
    width: size,
    height: size,
    margin: margin,
  };
//   console.log("button", buttonStyle);

  return (
    <button
      className="m-auto hover:animate-bounce hover:cursor-pointer bg-none"
      type="button"
      style={buttonStyle}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </button>
  );
};

export default Button;

{
  /* <input
            type="search"
            name="q"
            placeholder="Looking for design"
            title="Search"
            role="searchbox"
            aria-label="Search"
            aria-autocomplete="list"
            required
            id="search"
            className={`block w-full outline-0 p-4 pl-10 text-sm text-gray-900 bg-white- rounded-lg  ${
              isSearching ? "" : "border border-gray-300 "
            }`}
            onChange={onSearch}
            value={query}
          /> */
}
