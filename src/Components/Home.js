import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define a functional component named Home that accepts 'products' and 'addToCart' as props.
function Home({ products, addToCart }) {
  // Define an array of objects for carousel items.
  const carouselItems = [
    {
      url: 'https://www.livemint.com/lm-img/img/2023/04/21/1600x900/commerce_1680804490332_1682064977443.jpg',
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      url: 'https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg',
      title: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: 'https://www.upwordstranslation.com/admin/uploads/produtos/95.jpg',
      title: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];

  // Render the Home component.
  return (
    <>
      {/* Create a Bootstrap Carousel component with a dark theme. */}
      <Carousel data-bs-theme="dark">
        {/* Map through the carouselItems array to create individual carousel slides. */}
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" height={600} src={item.url} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <h2 className="text-center my-2">Products</h2>
      <div className="d-flex flex-wrap">
        {/* Map through the 'products' array to create ProductCard components. */}
        {products.map((product, productIndex) => (
          <ProductCard
            key={productIndex}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

// Define a functional component named ProductCard that accepts 'product' and 'addToCart' as props.
function ProductCard({ product, addToCart }) {
  // Render a Bootstrap Card component to display product details.
  return (
    <Card className="m-2" border="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.url} height={250} />
      <Card.Body>
        <Card.Title>
          {product.name} | {product.category}
        </Card.Title>
        <Card.Text>{product.seller}</Card.Text>
        <Card.Text> ₹. {product.price}/-</Card.Text>
        {/* Create a button to add the product to the cart. */}
        <Button onClick={() => addToCart(product)} variant="outline-dark">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

// Export the Home component as the default export of this module.
export default Home;
