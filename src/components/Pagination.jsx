import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

const Pagination = () => {
  const { totalResults,pages, actualPages,nextPages,prevPages } = useContext(CharactersContext);
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
        {prevPages && <button className="btn btn-success mx-2">Prev</button>}
        {nextPages && <button className="btn btn-success mx-2">Next</button>}
      </section>
    </>
  );
};

export default Pagination;
