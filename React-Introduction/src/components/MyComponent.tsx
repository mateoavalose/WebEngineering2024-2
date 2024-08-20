import React from "react";
class MyComponent extends React.Component {
  render() {
    let food:string[] = ['Rice', 'Pizza']
    return(
        <>
            <h3>The old way to do a component</h3>
            <ul>
                {food.map((meal) => (
                    <li key={meal}>{meal.toUpperCase()}</li>
                ))}
            </ul>
        </>
    )
  }
}
export default MyComponent;