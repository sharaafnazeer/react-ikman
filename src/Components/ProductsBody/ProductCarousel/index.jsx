import {Carousel} from "react-bootstrap";

const ProductCarousel = () => {

    return (
        <Carousel className="mb-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={400}
                    src="https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/p1022463-1200x900.jpg?key=165dce4e"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Iphone 14 Pro Max</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={400}
                    src="https://www.cnet.com/a/img/resize/e27d88c3149103cb725b116777f04a9d6d97f4e3/hub/2021/10/23/b4e8daa4-d3c1-4f4c-9a15-d127246205d9/macbook-pro-2021-cnet-review-15.jpg?auto=webp&fit=crop&height=900&width=1200"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={400}
                    src="https://www.cnet.com/a/img/resize/50a2b0406834f3b07d90495e3fac989d6bf51af3/hub/2016/04/28/5a91e8fc-14bc-4c22-abe4-b990073328d2/2016-tesla-model-s-19-of-43.jpg?auto=webp&width=768"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductCarousel;