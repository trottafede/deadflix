function Search({ title, handleSearch }) {
  const handleInput = (e) => {
    handleSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <label htmlFor="searcher" className="form-label">
        Buscador
      </label>
      <input
        autoComplete="off"
        onChange={handleInput}
        value={title}
        id="searcher"
        placeholder="Search"
        type="email"
        className="form-control"
      />
    </div>
  );
}

export default Search;
