// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link} from 'react-router-dom';

// const Home = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/users')
//       .then(res => setUsers(res.data))
//       .catch(err => console.error("Error fetching users:", err));
//   }, []);
//   let navigate = useNavigate();
//   function addUser(){
//     navigate("/add")
//   }
//   function deletes(id){
//     // axios.delete("http://localhost:5173/users/"+id);
//     axios.delete(`http://localhost:8000/users/${id}`)
//     .then(()=>{
//       alert(`users with id ${id} delete successfully`);
//       navigate("/home");


//     }
    
      
//     )
//   }

//   return (
//     <div>
//       <h2>User List</h2>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>operations</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>
             
//              <Link to={`/edit/${user.id}`}><button>edit</button></Link>
//              <button onClick={ () => deletes(user.id)}>delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// const Home=()=>{
//     return(
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, minima. Pariatur quasi, nam corporis assumenda et delectus ducimus voluptates ratione at deleniti aspernatur earum harum dolor in. Nemo, velit voluptatibus exercitationem provident, voluptatum cupiditate magni temporibus dolore repudiandae facilis pariatur dolores, recusandae amet. Eveniet culpa, ullam cumque itaque et quibusdam consequatur eaque odit est ea voluptate, qui quia eius nisi aliquid ratione minus, debitis obcaecati amet? Esse pariatur, illum, hic atque necessitatibus non repudiandae magni quisquam fugiat a ea illo, placeat dolorum. Tempora vitae excepturi, harum voluptatum iste dolore? Nihil iure expedita sunt, accusamus magnam excepturi fuga beatae ex aut!</p>
//     )
// }
// export default Home
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  function getMovies(e) {
    e.preventDefault(); // Prevents page reload
    if (!search) return; // Prevents fetching empty search
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ecb4cede01e61790b6d0b4ffda97211d&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=ecb4cede01e61790b6d0b4ffda97211d"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* Search Bar */}
          <form onSubmit={getMovies} className="d-flex">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2"
            />
            <Button type="submit" variant="primary">
              Search
            </Button>
          </form>
        </Container>
      </Navbar>

      {/* Movie List */}
      <Container className="mt-4">
        <h2 className="text-center">
          {search ? `search Results for "${search}"` : "Trending Movies"}
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.id} style={{ width: "18rem", margin: "10px" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Button variant="primary" onClick={()=>navigate("/movie",{state:movie})}>Know More</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-center">No movies found.</p>
          )}
        </div>
      </Container>
    </div>
  );
};
export default Home;