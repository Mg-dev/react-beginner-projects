
import {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employee = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    
    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <select className='form-select form-select-md' value={selectedTeam}
                    onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
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
                    {
                        employees.map(employee=>{
                            return (
                                <div key={employee.id} id={employee.id} className={ employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2' } style={{cursor: 'pointer'}} onClick={handleEmployeeCardClick}>
                                    { (employee.gender === 'male') ?
                                        <img src={maleProfile} alt="male employee" className='card-img-top'/>
                                        :
                                        <img src={femaleProfile} alt="female employee" className='card-img-top'/>
                                    }
                                    
                                    <div className='card-body'>
                                        <h3 className='text-danger'>{employee.fullName}</h3>
                                        <p>{employee.designation}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <Footer />
                </div>
        </div>
       </main>
    )
}

export default Employee;