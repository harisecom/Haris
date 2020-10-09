import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchbarProducts from './Searchbar-products/Searchbar-products.component'
import {firestore} from '../../firebase/firebase.utils';
import './Searchbar.styles.css';
class Searchbar extends React.Component {
  constructor(){
    super();
    this.state = {
      searchinput: '',
      allProducts:  [],
      results: []
    }

  }


  // componentDidMount() {
  //   firestore.collection("products")
  //     .get()
  //     .then(querySnapshot => {
  //       const data = querySnapshot.docs.map(doc => doc.data());
  //       this.setState({allProducts: data})
  //     })
  // }

  handleChange = (e) => {
    const allProducts = this.props.allProducts;
    this.setState({searchinput: e.target.value});
    const value = e.target.value.toLowerCase();
    const results = this.state.results;
    for(let i= 0 ; i < allProducts.length ; i++ ) {
      if(allProducts[i]['productName'].toLowerCase().startsWith(value) && value !== '' ) {
        if(!this.state.results.includes(allProducts[i])){
          results.push(allProducts[i]);
          // console.log(`${allProducts[i]['name']} has been added`)
        }
      }
      else{
        if(this.state.results.includes(allProducts[i])){
          const index = results.findIndex( (element) => element=== allProducts[i]);
          results.splice(index, 1);
          // console.log(`${allProducts[i]['name']} has been removed`)
        }
      }
    }
    this.setState({results: results})
          
  }
  render() {
    const {searchbarStatus, allProducts} = this.props;
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
const mapStateToProps = ({searchbar, products}) => ({
  searchbarStatus: searchbar.searchbarStatus,
  allProducts: products.allProducts,

})



export default connect(mapStateToProps)(Searchbar);
Searchbar.propTypes ={
  searchbarStatus: PropTypes.bool
}