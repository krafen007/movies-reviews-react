/**
 * current page
 * specify number of pages
 * handle prev pages
 * handle nex pages
 */ import {useState} from "react";


function Pagination({getData}) {

    const [pageStart, setPageStart] = useState(1);
    const pagesPerGroup = 5;

    const pages = Array.from({length: pagesPerGroup}, (_, i) => pageStart + i);

    const handlePrevPages = () => {
        setPageStart((prev) => Math.max(prev - pagesPerGroup, 1));
    }

    const handleNextPages = () => {
        setPageStart((prev) => prev + pagesPerGroup);
    }
    return (
        <div aria-label="Page navigation example" className="d-flex justify-content-center mb-5">
            <ul className="pagination">
                <li className="page-item">
                    <button onClick={handlePrevPages} className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {pages.map((page) => (
                    <li key={page} onClick={() => getData(page)} className="page-item"><a className="page-link" href="#">{page}</a></li>
                ))}

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