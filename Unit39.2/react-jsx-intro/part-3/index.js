function Person(props) {
    let voteText = props.age >= 18 ? "Go vote!" : "Go study!";
  
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {props.name.slice(0, 6)}</li>
          <li>Age: {props.age}</li>
          <ul>
            Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }

  function App() {
    return (
      <div>
        <Person
            name="Homer"
            age={38}
            hobbies={["bowling", "watching tv", "drinking beer"]}
        />
        <Person 
            name="Marge" 
            age={34} 
            hobbies={["painting", "gambling"]} />
        <Person
            name="Bart"
            age={10}
            hobbies={["skateboarding", "making prank calls"]}
        />
        <Person
            name="Lisa"
            age={8}
            hobbies={["reading", "saxophone", "eating vegetables"]}
        />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById("root"));