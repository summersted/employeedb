import { useState } from 'react';
import { SearchFormElement, SearchInputElement, SearchButtonElement } from './search-input-styles';

export default function SearchInput({handler}) {
    const [query, setQuerry] = useState('')
    function submitHandler(e) {
        e.preventDefault();
        handler(query)
    }

    return (
        <SearchFormElement onSubmit={submitHandler}>
            <SearchInputElement placeholder="Search for employee" onChange={(e) => setQuerry(e.target.value)}/>
            <SearchButtonElement type='submit' className='search_button' ></SearchButtonElement>
        </SearchFormElement>
    )
}