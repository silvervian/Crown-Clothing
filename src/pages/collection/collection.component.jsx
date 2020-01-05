import React from "react";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2>COLLECTION PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  collection: selectCollections(ownProps.match.path.params.collectionId)(state);
};

export default connect(mapStateToProps)(CollectionPage);