import TopHeader from "../Components/TopHeader";
import SearchHeader from "../Components/SearchHeader";
import CategoryBanner from "../Components/Common/CategoryBanner";
import {Row} from "reactstrap";

const Home = () => {


    const categories = [
        {
            id: 1,
            title: 'Electronics',
            count: '121,322 adds',
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        },
        {
            id: 2,
            title: 'Vehicles',
            count: '121,100 adds',
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        },
        {
            id: 3,
            title: 'Properties',
            count: '121,100 adds',
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        },
        {
            id: 4,
            title: 'Home & Garden',
            count: '121,100 adds',
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        }
    ]

    return (
        <div className="container-fluid">
            <TopHeader/>
            <SearchHeader/>
            <div className="container p-4">
                <p className="h5 mb-5">Browse items by category</p>
                <Row>
                    {
                        categories.map((category) => (
                            <CategoryBanner key={category.id} imageUrl={category.imageUrl} count={category.count} title={category.title}/>
                        ))
                    }
                </Row>
            </div>
        </div>
    )
}

export default Home