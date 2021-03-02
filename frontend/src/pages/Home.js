import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

export function Home({
  isLoading = true,
  error = '',
  products = [],
  listProducts,
}) {
  useEffect(() => {
    listProducts();
  }, [listProducts]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {renderPrefetch()}
        {!isLoading &&
          !error &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.productList.products,
  isLoading: state.productList.loading,
  error: state.productList.error,
});

const mapDispatchToProps = {
  listProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
