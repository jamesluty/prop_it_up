import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  // const peopleInfo = [
  //   {
  //     'firstname': 'Jane',
  //     'lastname': 'Doe',
  //     'age': 45,
  //     'hair_color': 'Black'
  //   },
  //   {
  //     'firstname': 'John',
  //     'lastname': 'Smith',
  //     'age': 88,
  //     'hair_color': 'Brown'
  //   },
  //   {
  //     'firstname': 'Millard',
  //     'lastname': 'Fillmore',
  //     'age': 50,
  //     'hair_color': 'Brown'
  //   },
  //   {
  //     'firstname': 'Maria',
  //     'lastname': 'Smith',
  //     'age': 62,
  //     'hair_color': 'Brown'
  //   }
  // ]

  return (
    <div className="Center">
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
      {/* <PersonCard peopleInfo={peopleInfo}/> */}
    </div>
  );
}

export default App;
