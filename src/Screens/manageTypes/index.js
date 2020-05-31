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
    
    this.objectTypeEdit = this.objectTypeEdit.bind(this);
    this.AddTypes = this.AddTypes.bind(this);
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
        {id:0,title:'Title',type:'small_text'}
      ],
    }
    this.props.createTypes(types);

    // Entry in type_item and type_field
    this.props.addItems(typeLength);      
  }

  AddField(data,e){
    e.preventDefault();
    let fieldLength = data.fields.length;
    let lastFieldId = data.fields[fieldLength-1].id;
    lastFieldId = ++lastFieldId;

    let types = {id:lastFieldId,title:'',type:'small_text'}
    data.fields.push(types);
    this.props.editTypes(data);
  }

  objectTypeEdit(e,data){
    data.object_type = e.target.value;
    this.props.editTypes(data);
  }
  objectTitleEdit(e,data){
    data.object_title = e.target.value;
    this.props.editTypes(data);
  }
  objectFieldEdit(e,data,i){
    data.fields[i].title = e.target.value;
    this.props.editTypes(data);
  }
  objectFieldTypeEdit(e,data,i){
    if(e.target.value=="remove_text") {
      //this.props.removeFields(data.id,data.fields[i].id);
      data.fields.splice( i, 1 );
    } else {
      data.fields[i].type = e.target.value;
    }
    this.props.editTypes(data);
  }
  deleteTypes(e, index){
    e.preventDefault();
    this.props.deleteTypes(index);
  }


  listView(data, index){
    return (
        <div className="box-grid" key={index}>
          <div className="heading">
            {data.object_type}
            <a href="#" className="cross" onClick={(e) => this.deleteTypes(e, data.id)}>x</a>
          </div>
          <div className="box-detail"> 
             <label>Object Type:</label>
             <input type="text" onChange={(e) => this.objectTypeEdit(e,data)} value={data.object_type} />
             <label>Object Title:</label>
             <select onChange={(e) => this.objectTitleEdit(e,data)} value={data.object_title}>
                {data.fields.map((value, i) => {
                  return (
                      <option key={i} value={value.title}>{value.title}</option>
                    );
                 })
                }
             </select>

             <label>Fields:</label>
             {data.fields.map((value, i) => {
               return (
                <div className="field-sec" key={i}>
                  <input type="text" onChange={(e) => this.objectFieldEdit(e,data,i)} value={value.title}  />
                  <select onChange={(e) => this.objectFieldTypeEdit(e,data,i)} value={value.type}>
                    <option value="small_text">Small Text</option>
                    <option value="long_text">Long Text</option>
                    <option value="number_text">Number Text</option>
                    <option value="date_text">Date</option>
                    <option value="remove_text">Remove</option>
                  </select>
                </div>
                );
              })
             }
            <div className="add_field" onClick={(e) => this.AddField(data,e)}><button>Add Field</button></div>
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
            
              {this.props.types.map((type, i) => this.listView(type, i))}
            
            <div class="col-md-3">
              <button onClick={(e) => this.AddTypes(e,this.props.types)} className="add_type_btn">Add Types</button>
            </div>
          </div>
        </section>
        </React.Fragment>
        
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    types: state.types
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTypes: types => dispatch(typesAction.createTypes(types)),
    editTypes: data => dispatch(typesAction.editTypes(data)),
    deleteTypes: index =>dispatch(typesAction.deleteTypes(index)),
    addItems: typesItem =>dispatch(typesAction.addItems(typesItem)),
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);