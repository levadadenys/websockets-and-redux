import React from 'react';
import TablesListItem from './TablesListItem';

class TablesList extends React.Component {
  static defaultProps = {
    tables: []
  };

  render () {
    return (
      <div className="tables-list">
        {
          this.props.tables.map(table => <TablesListItem key={table.id}
                                                         onDelete={this.props.onDelete} {...table} />)
        }
      </div>
    );
  }
}

export default TablesList;
