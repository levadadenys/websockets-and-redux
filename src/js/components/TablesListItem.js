import React from 'react';

class TablesListItem extends React.Component {
  static defaultProps = {
    id: -1,
    name: '',
    participants: 0,
    onDelete: () => {}
  };

  render () {
    return (
      <div className="panel tables-list-item">
        <div className="panel-heading">{this.props.name}</div>
        <div className="panel-body">
          {this._renderPeople()}
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-default pull-right"
                  onClick={this.props.onDelete.bind(this,
                    this.props.id)}>
            <i className="fa fa-trash" aria-hidden={true} />
          </button>
        </div>
      </div>
    );
  }

  _renderPeople () {
    let people = [];
    for (let i = 0; i < 12; i++) {
      if (i > this.props.participants) {
        people.push(<i key={i} className="fa fa-user" aria-hidden={true} />);
      } else {
        people.push(<i key={i} className="fa fa-user active"
                       aria-hidden={true} />);
      }
    }

    return people;
  }
}

export default TablesListItem;
