import { PaginationWrapper, PaginationItem } from "../pagination/pagination-style";

export default function Pagination({ pages, setActivePage}) {

    let pageIndexes = [];
    for (let i = 1; i <= pages; i++) {
        pageIndexes.push(
                <PaginationItem
                    key={'_' + i+1}
                    href="#top"
                    onClick={() => setActivePage(i)}>
                    <a href="#">{i}</a>
                </PaginationItem>
        );
    }

    return (
        <PaginationWrapper>
            <PaginationItem key='0'><a href="#">&lt;&lt;&nbsp;Prev</a></PaginationItem>
            {pageIndexes}
            <PaginationItem key={pages + 1}><a href="#">Next&nbsp;&gt;&gt;</a></PaginationItem>
        </PaginationWrapper>
    )
}