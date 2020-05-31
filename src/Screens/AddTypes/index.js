import React, { Component } from 'react';
import Header from '../header';
import { connect } from 'react-redux';
import * as typesAction from '../../actions/typesAction';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:[],
    }; 
    
   
  }

  componentDidMount(){
    
     this.props.items.map((item, i) => {
      let typeLength = 0;
      let fieldLength = this.props.fields.length;
      console.log("fieldLength>>",fieldLength)
      if(fieldLength > 0){
        let lastId = this.props.fields[fieldLength-1].id;
        console.log("lastId>>",lastId)
        typeLength = ++lastId;
      }
        const index = this.props.types.findIndex(val => val.id === item.types_id);
        console.log("index",index)
        this.props.types[index].fields.map((value, i) => {
          let types = {
            id: typeLength,
            item_id:item.id,
            type_id:item.types_id,
            field_id:value.id,
            field_value:'',
          }
          this.props.addFields(types);
        })
      })
  }

  AddTypes(e,typeVal){
    e.preventDefault();
    let typeLength = 0;
    console.log(typeVal.length);
    if(typeVal.length > 0){
      let lastId = typeVal[typeVal.length-1].id;
      typeLength = ++lastId;
    }
    
    let types = {
      id: typeLength,
      object_type:'',
      object_title:'Title',
      fields:[
        {title:'Title',type:'small_text'}
      ],
    }
    this.props.createTypes(types);
  }

  

  editFields(e,index){
    e.preventDefault();
    //let fieldIndex = this.props.fields.findIndex(val => val.id === index);
    console.log("fieldIndex>>>>>>>>",index);
    let data = this.props.fields;
    data[index].field_value = e.target.value;
    this.props.editFields(data);
  }


  listView(data, index){
    let indexType = this.props.types.findIndex(val => val.id === data.types_id);

    var filterField = this.props.fields.filter(n => n.item_id == data.id);
    
    return (
        <div className="box-grid" key={index}>
          <div className="heading">
            
            {this.props.types[indexType].object_type}
            <a href="#" className="cross" onClick={(e) => this.deleteTypes(e, data.id)}>x</a>
          </div>
          <div className="box-detail"> 
            {filterField.map((value, i) => {
                return (
                  <div key={i}>
                    <label>{this.props.types[indexType].fields[(this.props.types[indexType].fields.findIndex(val => val.id === value.field_id))].title}</label>
                    <input type="text" onChange={(e) => this.editFields(e,i)} value={value.field_value} />
                  </div>
                  );
             })
            }
          </div>
        </div>
    )
  }

  render() {
    return (
        <React.Fragment>
        <Header />
        <section className="body-sec">
          <div className="flex-row">
          {this.props.match.params.id === 'all' ?
            this.props.items.map((type, i) => this.listView(type, i))
            :
            this.props.types.forEach((type, i) => {
              console.log("type.id",type)
              if(type.id===this.props.match.params.id) {
                console.log("type.id>>>",type)
                //return this.listView(type, i);
              }
            })
          }
            
            
            <div class="col-md-3">
              {(this.props.types.length>0) ?
              <button className="add_type_btn">Add Item</button>
              : "" }
            </div>
          </div>
        </section>
        </React.Fragment>
        
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    types: state.types,
    items: state.items,
    fields: state.fields
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFields: types =>dispatch(typesAction.addFields(types)),
    editFields: data =>dispatch(typesAction.editFields(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);