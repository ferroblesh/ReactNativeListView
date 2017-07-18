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
          clearIcon={{name: 'clear'}}
          textInputRef='searchText'
          onChangeText={text => this.props.fetchResults(text)}
        />
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.props.dataSource}
          />
        </List>
      </View>
    );
  }

}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1,r2) => r1 !== r2
});

function mapStateToProps({libraries}) {
  return {
    dataSource: dataSource.cloneWithRows(libraries)
  };
}

export default connect(mapStateToProps, actions)(SearchList);
