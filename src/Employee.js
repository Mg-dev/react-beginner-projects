
import {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Teams from './Teams';
import TeamMembers from './TeamMembers';


const Employee = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    
    return (
        <main className='container-lg'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
                </div>
                
            </div>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>

                    <Header
                        selectedTeam={selectedTeam}
                        teamMemberCount={
                            employees.filter(employee=>
                            employee.teamName === selectedTeam
                            ).length
                            }
                    />
                    <div className="card-collection">
                        <TeamMembers 
                        selectedTeam={selectedTeam} 
                        handleEmployeeCardClick={handleEmployeeCardClick} 
                        employees={employees} 
                        />
                    </div>
                    <Footer />
                </div>
        </div>
       </main>
    )
}

export default Employee;