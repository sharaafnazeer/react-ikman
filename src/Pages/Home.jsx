import TopHeader from "../Components/TopHeader";
import SearchHeader from "../Components/SearchHeader";
import Categories from "../Components/Categories";
import Advertisement from "../Components/Advertisement";
import QuickLinks from "../Components/QuickLinks";

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

    const quickLinks = [
        {
            id: 1,
            title: '138,633 ads in Electronics',
            links: [
                {
                    id: 1,
                    title: 'Mobile Phones',
                    url: ''
                },
                {
                    id: 2,
                    title: 'Cameras & Camcorders',
                    url: ''
                },
                {
                    id: 3,
                    title: 'Computers & Tablets',
                    url: ''
                },
                {
                    id: 4,
                    title: 'TVs',
                    url: ''
                },
                {
                    id: 5,
                    title: 'Air Conditions & Electrical fittings',
                    url: ''
                },
            ]
        },
        {
            id: 2,
            title: '66,844 ads in Property',
            links: [
                {
                    id: 1,
                    title: 'Mobile Phones',
                    url: ''
                },
                {
                    id: 2,
                    title: 'Cameras & Camcorders',
                    url: ''
                },
                {
                    id: 3,
                    title: 'Computers & Tablets',
                    url: ''
                },
                {
                    id: 4,
                    title: 'TVs',
                    url: ''
                },
                {
                    id: 5,
                    title: 'Air Conditions & Electrical fittings',
                    url: ''
                },
            ]
        },
        {
            id: 3,
            title: '9,110 ads in Jobs',
            links: [
                {
                    id: 1,
                    title: 'Mobile Phones',
                    url: ''
                },
                {
                    id: 2,
                    title: 'Cameras & Camcorders',
                    url: ''
                },
                {
                    id: 3,
                    title: 'Computers & Tablets',
                    url: ''
                },
                {
                    id: 4,
                    title: 'TVs',
                    url: ''
                },
                {
                    id: 5,
                    title: 'Air Conditions & Electrical fittings',
                    url: ''
                },
            ]
        },
        {
            id: 4,
            title: '73,450 ads in Vehicles',
            links: [
                {
                    id: 1,
                    title: 'Mobile Phones',
                    url: ''
                },
                {
                    id: 2,
                    title: 'Cameras & Camcorders',
                    url: ''
                },
                {
                    id: 3,
                    title: 'Computers & Tablets',
                    url: ''
                },
                {
                    id: 4,
                    title: 'TVs',
                    url: ''
                },
                {
                    id: 5,
                    title: 'Air Conditions & Electrical fittings',
                    url: ''
                },
            ]
        }
    ];

    return (
        <div className="container-fluid">
            <TopHeader/>
            <SearchHeader/>
            <Categories categories={categories}/>
            <Advertisement/>
            <QuickLinks quickLinks={quickLinks}/>
        </div>
    )
}

export default Home