import {Row, Spinner} from "reactstrap";
import CategoryBanner from "../Common/CategoryBanner";
import {useLocation, useNavigate} from "react-router-dom";

const Categories = ({categories = [], isLoading}) => {

    const navigate = useNavigate();

    const onCategoryClick = (path) => {
        navigate(`/categories/${path}`);
    }

    return (
        <div className="container p-4 ps-10rem pe-10rem">
            <p className="h6 mb-5">Browse items by category</p>
            <Row>
                {
                    isLoading ? (
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <>
                            {
                                categories.length ? (
                                    <>
                                        {
                                            categories.map((category) => (
                                                <CategoryBanner key={category.id}
                                                                path={category.key}
                                                                imageUrl={category.imageUrl}
                                                                count={category.count}
                                                                title={category.title}
                                                                onClick={onCategoryClick}
                                                />
                                            ))
                                        }
                                    </>
                                ) : (
                                    <>
                                        <Row>
                                            No categories available
                                        </Row>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </Row>
        </div>
    )
}

export default Categories

// categories/electronics
// categories/vehicles

// categories -> Static
// categoryName -> Dynamic