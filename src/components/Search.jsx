var Search = (props) => (
  //Need a debounce version of this function
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => props.onInputSearch(e.target.value)} />
    <button className="btn hidden-sm-down" onClick={(e) => props.onSearchSubmit(e.target.value)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
