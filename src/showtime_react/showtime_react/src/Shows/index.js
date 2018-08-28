import React, {Component} from 'react';
// import WhatElse from '../WhatElse';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Shows extends Component {
  constructor(props){
    super();

  this.state = {
    actors: []
  }
}


async componentDidMount() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/actors');
    console.log(res);
    const actorsData = await res.json(); //array of objects.

      const wwActors = await actorsData.map(async eachActor => {
      //step 1: map through your db json data. However, you it's only showing
      //for each show over that shows json data. list of all your actors.
      for (let i = 0; i < eachActor.shows.length; i++) {
        //initially we were returning a promise for each thing, which made us wait for each thing. we made wwActors return all those promises. Wed did that with Promise.all so all the awaits (which are promises) would load with .then.

        //map over all your actors' shows. each object is called shows. you go into each array that is called shows.

      //so show (actor object).shows (the array that is the property of shows)

        const showOfShows = await fetch(eachActor.shows[i]);
        const showOfShowsJson = await showOfShows.json();
        eachActor.shows[i] = showOfShowsJson;
      }
      return eachActor;
    })

//NOTE: Promise.all means all the awaits (which are promises) will load. THEN you can use the spread operator over them. wwActors is returning all the promises. Before we were returning a promise for each thing.
    Promise.all(wwActors).then( data => {
      this.setState({actors: [...this.state.actors, ...data]})
    } );


    // this.setState({actors: wwActors}) //now you can export the data shows?
    /* {actor.shows.map((show, index) => (<li key={index}>{show}</li>))} */


  } catch (err) {
    console.log(err);
  }
}
// {/* .map() is no logic. .map{} is logic */}
render() {
  console.log(this.state.actors);
 const data = this.state.actors.length > 0 ?
   this.state.actors.map((actor) => {
     return (

       // <div className='actorInfo' key={actor.id} >
         <div className='actorContainer' key={actor.id} >
         <Card className='actorInfo'>
           <CardTitle>{actor.actor_name}</CardTitle>
         <CardImg className='actorImages' src={actor.actor_photo_url} />
         <CardBody>
           <CardTitle>Best Known For: </CardTitle>
           <CardSubtitle>
          <h4 className='recommendedShows'>Recommended Shows</h4>
        </CardSubtitle>
        <CardText>
         {actor.shows.map((item, i) => {
           return (
             <a target='_blank'  href={item.show_main_url}><br/>{item.show_title}</a>
                      )
         })}
       </CardText>
     </CardBody>
     </Card>
     </div>
     )})
  : null
console.log(data, 'data');

return (
    <div>
      {data}
    </div>
  )}

}

export default Shows;
