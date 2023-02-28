import {Input, InputGroup, InputGroupText} from "reactstrap";
import './search-box.css'

const SearchBox = () => {

    return (
        <InputGroup>
            <Input className="input-group-radius-left" placeholder='What are you looking for?'/>
            <InputGroupText className="input-group-radius-right">
                <i className="bi bi-search"></i>
            </InputGroupText>
        </InputGroup>
    )
}

export default SearchBox;