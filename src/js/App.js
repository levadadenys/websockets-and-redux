import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tablesActions from './actions/tablesActions';
import TablesList from './components/TablesList';

class App extends React.Component {
  render () {
    return (
      <div>
        <TablesList tables={window.innerWidth <= 1024
          ? this.props.tablesStore.tables.slice(0, 20)
          : this.props.tablesStore.tables}
                    onDelete={this.props.actions.removeTable} />
      </div>
    );
  }
}

export default connect(state => ({
  tablesStore: state.tablesStore
}), dispatch => ({actions: bindActionCreators(tablesActions, dispatch)}))(App);