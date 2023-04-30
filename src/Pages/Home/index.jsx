import TopHeader from "../../Components/TopHeader";
import SearchHeader from "../../Components/SearchHeader";
import Categories from "../../Components/Categories";
import Advertisement from "../../Components/Advertisement";
import QuickLinks from "../../Components/QuickLinks";
import Description from "../../Components/Description";
import {useEffect, useState} from "react";
import {getCategoriesApi} from "../../Api/categoriesApi";

const Home = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCategoriesApi().then(res => {
            console.log(res?.data)
            setCategories(res?.data || []);
            setLoading(false);
        });
    }, []);
    // Dependency array - Null -> Component will re-render each and everytime when the state updates
    // Dependency array - [] -> Component will re-render only once
    // Dependency array - [Dependency1, Dependency2] -> Component will re-render only when Dependency1 and Dependency2 gets updated


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
            <Categories categories={categories} isLoading={isLoading}/>
            <Advertisement/>
            <QuickLinks quickLinks={quickLinks}/>

            <Description/>
        </div>
    )
}

export default Home