import React, {Component} from 'react';
import { Button} from 'react-bootstrap';


class Stores extends Component {
  render (){
    return(
      <div className="text-center m-4">
        <a href='/store/add-product'>
          <Button 
            variant="success" 
            className="btn"
            size="lg"
            >
            Add New Product
          </Button>
        </a>
        <hr/>
        <Button
          variant="success" 
          className="btn"
          size="lg"
          onClick={()=> this.props.history.push('/store/product-dashboard')}
          >
          Store Products
          </Button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      
    )
  }
}
export default Stores;