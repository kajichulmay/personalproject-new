import React from 'react';

function SearchBox() {
  return (
    <div className="searchBox">
      <i class="bi bi-search"></i>
      <input id="search" name="search" type="text" placeholder="Search Books ..." />
    </div>
  );
}

export default SearchBox;
