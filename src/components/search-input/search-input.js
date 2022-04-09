import { SearchFormElement, SearchInputElement, SearchButtonElement } from './search-input-styles';

export default function SearchInput() {

    function submitHandler(e) {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <SearchFormElement>
            <SearchInputElement placeholder="Search for employee" />
            <SearchButtonElement type='submit' className='search_button' onClick={submitHandler}></SearchButtonElement>
        </SearchFormElement>
    )
}