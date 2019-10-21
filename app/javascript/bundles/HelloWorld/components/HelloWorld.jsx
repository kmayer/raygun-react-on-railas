import { connect } from "react-redux";
import HelloWorldComponent from "./HelloWorldComponent";
import { updateName } from "../store/helloWordSlice";

// Which part of the Redux global state does our component want to receive as props?

const mapStateToProps = state => ({ name: state.name });

const mapDispatch = { updateName };

// Note that we don't use HelloWorldComponent, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(
  mapStateToProps,
  mapDispatch
)(HelloWorldComponent);
