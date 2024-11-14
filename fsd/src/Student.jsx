import React from 'react';
import './student.css';
function Student({data}) {
  return (
    <div className='icard'>

    {/* {JSON.stringify(data)} */}
        <table>
            <tbody>
                <tr><td colSpan={2}>
                    {data.college}
                    </td></tr>
                    <tr><td colSpan={2}>
                    {data.pic}
                    </td></tr>
                    <tr><td>name</td><td>{data.name}</td></tr>
                    <tr><td>branch</td><td>{data.branch}</td></tr>
                    <tr><td>section</td><td>{data.section}</td></tr>
            </tbody>
        </table> 
    </div>
  )
}

export default Student;