import {Row} from "reactstrap";
import CategoryBanner from "../Common/CategoryBanner";

const Categories = ({categories}) => {

    return (
        <div className="container p-4 ps-10rem pe-10rem">
            <p className="h6 mb-5">Browse items by category</p>
            <Row>
                {
                    categories.map((category) => (
                        <CategoryBanner key={category.id} imageUrl={category.imageUrl} count={category.count} title={category.title}/>
                    ))
                }
            </Row>
        </div>
    )
}

export default Categories