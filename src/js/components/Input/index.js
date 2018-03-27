import Input from "./Input";
import { connect } from 'react-redux';

function mapStoreToProps(store) {
  return {
    city: store.input.city,
    data: store.input.data
  };
}

export default connect(mapStoreToProps)(Input);
