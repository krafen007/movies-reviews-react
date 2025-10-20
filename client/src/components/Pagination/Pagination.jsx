import { useState } from "react";

function Pagination({ getData }) {

    // track the first page number in the current group (e.g., 1–5, 6–10)
    const [pageStart, setPageStart] = useState(1);

    // number of pages to show per group
    const pagesPerGroup = 5;

    // generate an array of pages for the current group
    const pages = Array.from({ length: pagesPerGroup }, (_, i) => pageStart + i);

    // move to the previous group of pages
    const handlePrevPages = () => {
        setPageStart((prev) => Math.max(prev - pagesPerGroup, 1));
    };

    // move to the next group of pages
    const handleNextPages = () => {
        setPageStart((prev) => prev + pagesPerGroup);
    };

    return (
        <div aria-label="Page navigation example" className="d-flex justify-content-center mb-5">
            <ul className="pagination">
                {/* previous group button */}
                <li className="page-item">
                    <button onClick={handlePrevPages} className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                {/* render page numbers */}
                {pages.map((page) => (
                    <li key={page} onClick={() => getData(page)} className="page-item">
                        <a className="page-link" href="#">{page}</a>
                    </li>
                ))}

                {/* next group button */}
                <li className="page-item">
                    <button onClick={handleNextPages} className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
