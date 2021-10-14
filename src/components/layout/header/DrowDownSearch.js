import React from 'react';
import { useHistory } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../../context/CartContext';

function DrowDownSearch({ setSearchBook, searchBook, filterSearch }) {
  const history = useHistory();

  const handleClickSearch = bookId => {
    history.push(`/book/${bookId}`);

    setSearchBook('');
  };
  return (
    <>
      {searchBook && (
        <div className="DropDownSc show ">
          {filterSearch.map(item => (
            <p className="seachText" onClick={() => handleClickSearch(item.id)}>
              {item.name}
            </p>
          ))}
        </div>
      )}
    </>
    // <div className="DropDownSc show ">
    //   {searchBook &&
    //     filterSearch.map(item => (
    //       <p className="seachText" onClick={() => handleClickSearch(item.id)}>
    //         {item.name}
    //       </p>
    //     ))}
    // </div>
  );
}

export default DrowDownSearch;
