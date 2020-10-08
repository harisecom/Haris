import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchbarProducts from '../Searchbar-products/Searchbar-products.component'
import {Products} from '../../Data/Products.js';

import './Searchbar.styles.css';
class Searchbar extends React.Component {
  constructor(){
    super();
    this.state = {
      searchinput: '',
      fullList:  Products[0]['items'],
      results: []
    }

  }

  handleChange = (e) => {
    const fullList = this.state.fullList
    this.setState({searchinput: e.target.value});
    const value = e.target.value.toLowerCase();
    const results = this.state.results;
    for(let i= 0 ; i < fullList.length ; i++ ) {
      if(fullList[i]['name'].toLowerCase().startsWith(value) && value !== '' ) {
        if(!this.state.results.includes(fullList[i])){
          results.push(fullList[i]);
          // console.log(`${fullList[i]['name']} has been added`)
        }
      }
      else{
        if(this.state.results.includes(fullList[i])){
          const index = results.findIndex( (element) => element=== fullList[i]);
          results.splice(index, 1);
          // console.log(`${fullList[i]['name']} has been removed`)
        }
      }
    }
    this.setState({results: results})
          
  }
  render() {
    const {searchbarStatus} = this.props;
    return(
    <div className={`container-fluid search-component ${searchbarStatus === true ? 'searchbar-active' : ''}`} >
      <div className="searchbar">
        <i className="fas fa-search fa-3x"></i>
        <input 
          className="search-input"
           placeholder="Enter Search" 
           value={this.state.searchinput}
           onChange={this.handleChange} 
        ></input>
        <h3 className="search-cross">X</h3>
      </div>
      <div className="results">
        <SearchbarProducts items={this.state.results}></SearchbarProducts>
      </div>
    </div>
    )
  }
};
const mapStateToProps = ({searchbar}) => ({
  searchbarStatus: searchbar.searchbarStatus
})


export default connect(mapStateToProps)(Searchbar);
Searchbar.propTypes ={
  searchbarStatus: PropTypes.bool
}