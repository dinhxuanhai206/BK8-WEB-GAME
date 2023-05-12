import React, { useState, useRef } from "react";
import styles from "./SearchMobile.module.scss";
import { BsSearch } from "react-icons/bs";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

const cx = classNames.bind(styles);

SearchMobile.propTypes = {
  search: PropTypes.bool,
  valueSearch: PropTypes.func,
};

function SearchMobile(props) {
  const { search, valueSearch } = props;
  const [value, setValue] = useState("");
  const [visiable, setVisiable] = useState(false);

  const handleSearch = (e) => {
    if(e.key == 'Enter'){
        valueSearch(value);
    }
  };

  const inputRef = useRef()

  const handleOpenSearchBox = ()=> {
    setVisiable(true)
    // inputRef.current.focus();
  }

  const handleCloseSearchBox = ()=> {
    setVisiable(false)
    setValue('')
    // inputRef.current.focus();
  }

  return (
    <div className={cx("search-mobile")}>
      <div className="container">
        <div className={cx("body")}>
          {!visiable && (
            <React.Fragment>
              <div className={cx("back")}>
                <AiOutlineArrowLeft />
              </div>
              <div className={cx("title")}>Title</div>
            </React.Fragment>
          )}
          {search && (
            <React.Fragment>
              {visiable && (
                <div className={cx("search-box")}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={(e) => handleSearch(e)}
                    />
                    <button onClick={handleCloseSearchBox}><IoIosClose /></button>
                </div>
              )}
              <button
                className={cx("btn-search")}
                onClick={handleOpenSearchBox}
              >
                <BsSearch />
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchMobile;
