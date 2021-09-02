import React, {Component} from 'react';
import classes from './Person.css';
import Aux from "../../../hoc/Auxiliary.js";
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class person extends Component{

constructor(props){
   super(props);
  this.inputElementRef =React.createRef();

}

componentDidMount(){
   this.inputElementRef.current.focus();
}

render() {
  console.log('[Person.js] rendering...');
  return (
   <Aux>
     {this.props.isAuth ? <p> Authenticated! </p> : <p> Please Login! </p>}
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>

      <p key="i2">{this.props.children}</p>

      <input   key="i3"  ref={this.inputElementRef} type="text" onChange={this.props.changed} value={this.props.name} />
    
      </Aux>);
};
}
person.propTypes= {
    
    click: PropTypes.func,
    name : PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(person, classes.Person);
