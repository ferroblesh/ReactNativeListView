import React, {Component} from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  List,
  ListItem,
  SearchBar
} from 'react-native-elements';

class SearchList extends Component {
  componentWillMount() {
    console.log(this.props.libraries);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(rowData,sectionId) {
    console.log("rowData" + rowData);
    const {id, termino, traduccion} = rowData
    return (
      <ListItem
        key={sectionId}
        hideChevron
        title={termino}
        rightTitle={traduccion}
      />
    )
  }

  render() {
    console.log("libraries: " + this.props.libraries);
    return (
      <View>
        <SearchBar
          placeholder='Buscar significado...'
          lightTheme
          onChangeText={text => this.props.fetchResults(text)}
        />
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.dataSource}
          />
        </List>
      </View>
    );
  }

}

function mapStateToProps({libraries}) {
  return { libraries: libraries.results };
}

export default connect(mapStateToProps, actions)(SearchList);
