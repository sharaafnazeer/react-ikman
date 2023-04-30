import {Input, InputGroup, InputGroupText} from "reactstrap";
import './search-box.css'
import {useState} from "react";

const SearchBox = ({onSearchClick}) => {

    // 1. Actual Value 2. Function to Capture the Value
    const [searchQuery, setSearchQuery] = useState(''); // hook

    return (
        <InputGroup>
            <Input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}
                   className="input-group-radius-left" placeholder='What are you looking for?'/>
            <InputGroupText
                onClick={() => onSearchClick(searchQuery)}
                className="input-group-radius-right">
                <i className="bi bi-search"></i>
            </InputGroupText>
        </InputGroup>
    )
}

export default SearchBox;