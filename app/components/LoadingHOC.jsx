import React, { Component } from 'react';
import '../styles/LoadingHOC.module.css';

const ApiErrorBoundaryHOC = (WrappedComponent) => {
    return class ApiErrorBoundaryHOC extends Component {

    render() {
      return this.props.isLoading ? 
      <div className="columns is-centered">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      : <WrappedComponent {...this.props} />;
    }
  }
}


export default ApiErrorBoundaryHOC;