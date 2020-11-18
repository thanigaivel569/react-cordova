import React, { Component } from 'react';
//import logo from './logo.svg';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './App.css';
import Hello from './Component/Hello'
import * as productActions from './Action/ProductAction';
//import { withRouter,Route, Switch, Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
//import ProductList from './Component/ProductList';
// import QrReader from 'react-qr-reader'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : "Scan QRcode - Give camera access to scan",
      dataDisplay:"",
      // result: 'No result',
      // scan: false

    }
  }
//  componentWillMount(){
//   this.props.actions.getProduct();
//  }
// handleScan = data => {
//   if (data) {
//     this.setState({
//       result: data
//     })
//   }
// }
// handleError = err => {
//   console.error(err)
// }

//  changeState = () => {
//   this.setState({
//     data:data
//   });
//  }
changeState = () => {
  
  var data =  BarcodeScanner.scan();
  console.log(`Barcode data: ${data}`);
  this.setState({
        dataDisplay:data
    });
  
 }
  render() {
    //alert(this.state.result);
    return (
      <div className="App">
        <Hello name={this.state.value} />
        <p>{this.state.dataDisplay}</p>
        <button type="button"onClick={this.changeState}>Scan</button>
       {/* <button type="button"onClick={this.changeState}>Scan</button> 
         {this.state.scan ?
         <div className="size">
         <QrReader
          delay={false}
          onError={this.handleError}
          onScan={this.handleScan} 
        />
        </div> : "" }
        <p>{this.state.result}</p> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products:state.productsInfo.Products,
    isLoading: state.productsInfo.isLoading

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)

  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

