import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  
  render() {
    return (
      <React.Fragment>
        <header>
        
           
        <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand">Objector</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="/addType/all" class="nav-item nav-link active">All</a>
                {this.props.types.map((type, i) => <a href={`/addType/${type.id}`} key={i} class="nav-item nav-link">{(type.object_type==="")? "No Title":type.object_type}</a>)}
                <a href="/manageTypes" class="nav-item nav-link">Manage Types</a>
            </div>           
        </div>
    </nav>
            
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    types: state.types
  }
};

export default connect(mapStateToProps)(Header);

