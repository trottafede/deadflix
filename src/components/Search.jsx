function Search({ search, searchMovie }) {
  const handleInput = (e) => {
    searchMovie(e.target.value);
  };

  return (
    <div>
      <label htmlFor="searcher" className="form-label">
        Buscador
      </label>
      <input
        autoComplete="off"
        onInput={handleInput}
        value={search}
        id="searcher"
        placeholder="Search"
        type="email"
        className="form-control"
      />
    </div>
  );
}

export default Search;
