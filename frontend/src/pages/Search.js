import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../stories/components/CategoryProduct/';
import { listProducts } from '../actions/productActions';
import PageSelect from '../components/PageSelect';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export function Search({ productList, listProducts, match }) {
  const { error, loading, products } = productList;
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    listProducts(keyword, pageNumber);
  }, [listProducts, keyword, pageNumber]);

  return (
    <>
      <Meta title={`Searching: ${keyword}`} />
      <Breadcrumb
        links={[
          { name: 'Home', link: '/' },
          { name: keyword, link: '/search/' + keyword, active: true },
        ]}
      />

      <Row>
        <Prefetch loading={loading} error={error} />
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product {...product} />
            </Col>
          ))}
      </Row>
      <PageSelect
        pages={productList.pages}
        page={productList.page}
        keyword={keyword}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  listProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
