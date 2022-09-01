import React, { Component } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import "./Quack.css";
const reduceOne = (prevState, groupName, otherGroupName) => {
  prevState[groupName].wasClicked
    ? (prevState[groupName].count = prevState[groupName].count - 1)
    : (prevState[groupName].count = prevState[groupName].count + 1);
  prevState[groupName].wasClicked = !prevState[groupName].wasClicked;
  if (prevState[otherGroupName].wasClicked) {
    prevState[otherGroupName].count = prevState[otherGroupName].count - 1;
    prevState[otherGroupName].wasClicked = false;
  }
  return prevState;
};

const reducer = (action) => (prevState, props) =>
  action.type === "TOGGLE_LIKE"
    ? reduceOne(prevState, "like", "dislike")
    : reduceOne(prevState, "dislike", "like");

class Upvote extends Component {
  state = {
    like: {
      count: 0,
      wasClicked: false,
    },
    dislike: {
      count: 0,
      wasClicked: false,
    },
  };

  toggleLike = () => this.setState(reducer({ type: "TOGGLE_LIKE" }));
  toggleDislike = () => this.setState(reducer({ type: "TOGGLE_DISLIKE" }));

  render() {
    return (
      <div className="Upvote">
        <p className="Upvote-intro">
          <span className="like-button" onClick={this.toggleLike}>
            <AiOutlineLike size={30} color="white" />
            <button>{this.state.like.count}</button>
          </span>

          <span className="dislike-button" onClick={this.toggleDislike}>
            <BiDislike size={30} color="white" margin="2rem" />
            <button>{this.state.dislike.count}</button>
          </span>
        </p>
      </div>
    );
  }
}

export default Upvote;
