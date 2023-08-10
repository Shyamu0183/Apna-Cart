import React from 'react'

class AddItem extends React.Component {
   constructor(props){
    super(props);
    this.state={
productname:"",
productprice:0
    };
   }
    render(){
        return (
      <form className='row mb-5'>
  <div className="mb-3 col-4">
    <label htmlFor="exampleInputEmail1" className="form-label">
Name    </label>
    <input
      type="text"
      className="form-control"
      id="inputName"
      aria-describedby="name"
      name="productname"
      onChange={(e)=>{
        this.setState({productname: e.currentTarget.value})
      }}
      value={this.state.productname}
    />

  </div>
  <div className="mb-3 col-4">
    <label htmlFor="inputPrice" className="form-label">
      Price
    </label>
    <input
      type="number"
      name='productprice'
      className="form-control"
      id="price"
      onChange={(e)=>{
        this.setState({productprice: e.currentTarget.value})
      }}
      value={this.state.productprice}

    />
  </div>
  
  <button type="submit" className="btn btn-primary col-3" onClick={()=>{
    this.props.addItem()
  }}>
    Add
  </button>
</form>

        
    
)
    }
}
 
export default AddItem;