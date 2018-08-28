import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class Similar extends Component {
  constructor(props) {
  super();
  this.toggle = this.toggle.bind(this);
  this.state = {
    similar: [],
    popoverOpen: false,
  }
}

toggle() {
   this.setState({popoverOpen: !this.state.popoverOpen});
 }


getSimilarShows = async() => {
  try {
    const similarData = await fetch("https://api.themoviedb.org/3/tv/688/similar?api_key=5e5af396956ad15decd6239be59b3c2d&language=en-US&page=1");

    const getSimilarJson = await similarData.json();
    console.log(getSimilarJson.results);
    return getSimilarJson;

  } catch (err) {
    return err;
  }
}

componentDidMount(){
this.getSimilarShows().then((similarData) => {
  this.setState({similar: similarData.results})
  console.log(this.state.similar);
})
}

//https://reactstrap.github.io/components/collapse/

render() {
return (
  <Jumbotron className='Jumbotron'>
      <h1>Most Similar Shows: </h1>

      {this.state.similar.map((item, id) => (
        <div key={id}>
          {/* NOTE: originally it was just item as your 1st param and key={item} */}

          <h3>{item.name}</h3>
          {/* <h4>{item.overview}</h4> */}

          <Button id="Popover1" onClick={this.toggle}>Click For Show Description
      </Button>
<div>
          {/* <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}> */}


<Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>

             <PopoverHeader className='similarShowName'>{item.name}</PopoverHeader>
           <PopoverBody className='similarShowOverview'>{item.overview}</PopoverBody>
          </Popover>

        </div>

           {/* <h3>{item.name}</h3> */}
           {/* <img src='https:api.themoviedb.org/3/tv/688/similar?api_key=5e5af396956ad15decd6239be59b3c2d&language=en-US&page=1{item.poster_path}' /> */}
{/* <p > {
  item.overview
}
</p> * /} */}
{/* GUESS: It loops, then it read the toggle function for the Popover. It is reading the last one. */}

       </div>
))}
</Jumbotron>

)}

}


export default Similar;
