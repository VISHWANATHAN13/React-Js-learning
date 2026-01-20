
import User from "./User";

function Hello() {

  const userData = {
    name: "vishwanathan",
    age: 22,
    phone: "9790739680",
    email: "vishwanathan247@gmail.com"
  };

  return (<div>
    <h1>Hello world</h1>
    <User
    //  name={userData.name}
    //   age={userData.age}
    //   phone={userData.phone}
    //   email={userData.email}
    //or
    {...userData}
    />
  </div>
  );

}
function App() {
  return <>
    <h1>H1 tag</h1>
    <h2>H2 tag</h2>
    <h3>H3 tag</h3>
    <h4>H4 tag</h4>
  </>
}
// export default Hello;
export { App, Hello };


