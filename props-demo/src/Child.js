import React from 'react';
class Child extends React.Component{
    render(){
        return(
<div>
    <h1>{this.props.title}</h1>
    Child
</div>)
        
    }
}
export default Child;