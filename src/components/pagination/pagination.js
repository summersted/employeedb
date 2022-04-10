import { PaginationWrapper, PaginationItem, PaginationPageLink } from "../pagination/pagination-style";

export default function Pagination({ pages, setActivePage, currentPage }) {

    let pageIndexes = [];
    for (let i = 1; i <= pages; i++) {
        pageIndexes.push(
            <PaginationItem
                key={'_' + i + 1}
                onClick={() => setActivePage(i)}>
                <PaginationPageLink
                    href="#"
                    active={currentPage === i}>{i}</PaginationPageLink>
            </PaginationItem>
        );
    }

    const goPrevPage = (paginate, currentpage) => {
        if (currentpage - 1 !== 0) {
            paginate(currentPage - 1)
        }
    }
    const goNextPage = (paginate, currentpage, pages) => {
        if (currentpage !== pages) {
            paginate(currentPage + 1)
        }
    }

    return (
        <PaginationWrapper>
            <PaginationItem
                key='0'
                onClick={() => goPrevPage(setActivePage, currentPage)}>
                <a
                    href="#">&lt;&lt;&nbsp;Prev</a>
            </PaginationItem>
            {pageIndexes}
            <PaginationItem
                key={pages + 1}
                onClick={() => goNextPage(setActivePage, currentPage, pages)}>
                <a href="#">Next&nbsp;&gt;&gt;</a>
            </PaginationItem>
        </PaginationWrapper>
    )
}