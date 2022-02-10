const Pagination = (props : {
            next: number | null | undefined;
            prev: number | null | undefined;
            page: number;
            totalPages: number | undefined;
            handlePagination: (page: number) => void;
        } ) => {

            return <nav aria-label="">
                <ul className="pagination">
                {(typeof props.prev === "number") &&
                    <li className="page-item">
                        <button className="page-link" aria-label="Previous" onClick={() => props.handlePagination(props.page - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only"></span>
                        </button>
                    </li>
                }
                {(props.page - 1) > 0 &&

                    <li className="page-item"><button onClick={() => props.handlePagination(props.page - 1)} className="page-link" >{props.page - 1}</button></li>
                
                }

                <li className="page-item active"><button className="page-link" >{props.page}</button></li>

                {(typeof props.next === "number") &&
                    <li className="page-item"><button onClick={() => props.handlePagination(props.page + 1)} className="page-link" >{props.page + 1}</button></li>
                }
                {(typeof props.next  === "number") &&
                    <li className="page-item">
                        <button onClick={() => props.handlePagination(props.page + 1)} className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only"></span>
                        </button>
                    </li>
                }
                
                </ul>
            </nav>
        }

export default Pagination;