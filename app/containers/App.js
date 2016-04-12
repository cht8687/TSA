'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text
} from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import * as allActions from '../actions/home';

class App extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Home {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

App.propTypes = {
  currentDirection: PropTypes.string,
  tapTextShow: PropTypes.bool,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    currentDirection: state.home.currentDirection,
    tapTextShow: state.home.tapTextShow
  };
}

export default connect(
  mapStateToProps,
  (dispatch) => ({
    actions: bindActionCreators(allActions, dispatch)
  })
)(App)
