import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class FoodList extends Component {
  


  render() {
    
    let content = (<div></div>) 
    if (this.props.numAvailFoods == 0){
      content = (<div>No Food Available Now! Come Back Later!</div>) 
    }
    let nonReservedFoods = this.props.foods.filter((food) => !food.reservation);
    if(nonReservedFoods.length > 0) {
      console.log('hey in if');
      try{
        content = nonReservedFoods.map((food, idx) => {
          // return <div> key={idx} {food.name} {food.ingredients} {food.note} {food.box_number} {food.time}</div>
          let imgSource = (food.image.includes('https://') || food.image.includes('http://')) ? food.image : `/img/${food.image}`;
          console.log(food.image);
          console.log('does image include http or https')
          console.log((food.image.includes('https://') || food.image.includes('http://')));
          return <div class="float-left card-width">
          <Card className="middlecard-margin">
            <CardImg top width="100%" src={imgSource} alt="Card image cap" />
              <CardBody>
                <CardTitle className="h3">{food.name}</CardTitle>
                <CardSubtitle> Available Food </CardSubtitle>
                <br />
      
                  <CardText>Ingredients: {food.ingredients} <br />
                            Description: {food.note} <br />
                            Available Pick-Up Time: {food.time} <br/>
                  </CardText>
                  { this.props.logged_in &&
                   <Button onClick={() => this.props.reserveFood(food)} className={`btn2 ${food.reservation ? "reserved" : "notReserved"}`}>{food.reservation ?  'RESERVED' : 'RESERVE'}</Button>
                  } 
              </CardBody>
          </Card>
      </div>
        })
      }
      catch(err){
        debugger;
        console.log('sad');
      }
    } 
    return (
      <div>
        {content}
      </div>
    )
  }
}


export default FoodList;