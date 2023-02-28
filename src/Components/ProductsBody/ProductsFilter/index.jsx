import {Fragment} from "react";
import SortFilter from "../../Common/Filters/SortFilter";
import AdsFilter from "../../Common/Filters/AdsFilter";
import PosterFilter from "../../Common/Filters/PosterFilter";

const ProductsFilter = ({sortFilterItems, adsFilterItems, posterFilterItems}) => {

    return (
        <Fragment>
            <SortFilter items={sortFilterItems}/>
            <AdsFilter items={adsFilterItems}/>
            <PosterFilter items={posterFilterItems}/>
            <hr/>
        </Fragment>
    )
}

export default ProductsFilter;