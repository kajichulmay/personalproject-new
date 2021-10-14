import axios from '../../../config/axios';
import React from 'react';
import { useParams } from 'react-router';
import { useContext, useState, useEffect } from 'react/cjs/react.development';
import { CartContext } from '../../../context/CartContext';
import DrowDownSearch from './DrowDownSearch';

function SearchBox() {
  const [bookSearch, setBookSearch] = useState('');
  const [searchBook, setSearchBook] = useState('');
  // console.log(bookTransaction);
  const params = useParams();

  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const bookAll = await axios.get('/');

        setBookSearch(bookAll.data.bookAll);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchAllBook();
  }, []);

  const filterSearch = [...bookSearch].filter(item => item.name.toLowerCase().includes(searchBook.toLowerCase()));
  return (
    <div className="BoxSearchDrowDown">
      <div className="searchBox">
        <i className="bi bi-search"></i>
        <input
          className="boxInputSearch"
          id="search"
          name="search"
          type="text"
          placeholder="Search Books ..."
          value={searchBook}
          onChange={e => setSearchBook(e.target.value)}
        />
      </div>
      <DrowDownSearch filterSearch={filterSearch} setSearchBook={setSearchBook} searchBook={searchBook} />
    </div>
  );
}

export default SearchBox;
