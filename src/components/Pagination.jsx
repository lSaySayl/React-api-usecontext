import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

const Pagination = () => {
  const { totalResults,pages, actualPages,nextPages,prevPages,goToPage } = useContext(CharactersContext);
  return (
    <>
      <section className="col-3 d-flex align-items-center">
        <b>Total results: {totalResults}</b>
      </section>

      <section className="col-3 d-flex align-items-center">
        <b>Page {actualPages} of {pages} </b>
      </section>

      <section className="col-3 d-flex align-items-center">
        <b>Go to page </b>
        <select className="form-select w-auto mx-1" name="goto">
          <option value="1">1</option>
        </select>
      </section>

      <section className="col-3 text-end">
        {prevPages && <button data-type="prev" className="btn btn-success mx-2" onClick={e=> goToPage(prevPages,e)}>Prev</button>}
        {nextPages && <button data-type="next" className="btn btn-success mx-2" onClick={e=> goToPage(nextPages,e)}>Next</button>}
      </section>
    </>
  );
};

export default Pagination;
