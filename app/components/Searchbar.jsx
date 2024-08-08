"use client";

const Searchbar = ({ userQuery, setUserQuery }) => {
  return (
    <input
      id="search"
      value={userQuery}
      onChange={(e) => setUserQuery(e.target.value)}
      className="text-black p-2"
    />
  );
};

export default Searchbar;
