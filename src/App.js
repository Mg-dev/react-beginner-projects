import './App.css';
import Home from './Home'
import Employee from './Employee';

import GroupedTeamMember from './GroupedTeamMember';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';

import { useState, useEffect } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
function App() {
  const [selectedTeam, setTeam]  = useState(JSON.parse(localStorage.getItem('selectedTeam'))||"TeamB")
    const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem('employees')) ||
        [{
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
          },
          {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
          },
          {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
          },
          {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
          }]
    );
    function handleTeamSelectionChange(e){
        console.log(e.target.value)
        setTeam(e.target.value);
    }
    function handleEmployeeCardClick(event){
        console.log(event.currentTarget.id)
        const transformedEmployees = employees.map(employee => employee.id === parseInt(event.currentTarget.id)
        ?(employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee, teamName: selectedTeam} : employee) ;
        setEmployees(transformedEmployees);
    }
    useEffect(() => {
      localStorage.setItem('employees',JSON.stringify(employees))
    }, [employees]);
    useEffect(() => {
      localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
    }, [selectedTeam]);
  return (
          <>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tma-app' element={<Employee 
            employees={employees}
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
            handleEmployeeCardClick={handleEmployeeCardClick}
            />} />

            <Route path="/group-team-members"
              element={<GroupedTeamMember setTeam={setTeam}
              employees={employees}
              selectedTeam={selectedTeam}/>} />
            <Route path="/*" element={<NotFound />} />

          </Routes>
          
          </>
        
        
   
  );
}

export default App;
