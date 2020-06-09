import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPage from "../collection/collection.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsPageWithSpinner = WithSpinner(CollectionsPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props; 
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route 
          path={`${match.path}/:collectionId`}
          render={(props) =>(<CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ 
  isCollectionLoaded: selectIsCollectionsLoaded
});

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// });

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(ShopPage);
