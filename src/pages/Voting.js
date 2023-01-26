// src/App.js
import React, { Component } from 'react';
import { ButtonGroup, ExtraText, StyledFormAreaVote } from '../components/Styles';
import {Form, Formik} from 'formik';
import { ExtraTextVoting,StyledTitle, colors } from '../components/Styles';

const list = [
   
{
    id: 1,
    name: 'Candidate 1',
    votes: 0
  },
  
  {
    id: 2,
    name: 'Candidate 2',
    votes: 0
  },
  {
    id: 3,
    name: 'Candidate 3',
    votes: 0
  },
  {
    id: 4,
    name: 'Candidate 4',
    votes: 0
  }

];

class Voting extends Component {
    
  state = {
    members: []
  };

  componentDidMount() {
    this.setState({ members: list });
  }

  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId) {
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
      } else {
        return member;
      }
    });
  
    this.setState({
      members: updatedList
    });
  };

  render() {
      
    
    return this.state.members.map(member => (
        <StyledFormAreaVote>
            <ExtraTextVoting>
                  
      <Candidate key={member.id} id={member.id} name={member.name} votes={member.votes} onVote={this.handleEvent} />
        </ExtraTextVoting>
        </StyledFormAreaVote>
    ));
  }
}

class Candidate extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (

            <div className="Voting">
            {this.props.name} <button onClick={this.handleClick}>+</button> {this.props.votes}
         </div>
     
    );
  }
}
export default Voting;