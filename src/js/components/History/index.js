import History from "./History";
import { connect } from 'react-redux';




function mapStoreToProps(store) {
  return {
    searchItems: store.input.searchItems,
    searchTime: store.input.searchTime
  };
}

export default connect(mapStoreToProps)(History);
