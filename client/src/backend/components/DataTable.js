import React from 'react'
import MaterialTable from 'material-table';
function DataTable() {
    const data = [{
        name : "one", age :'1',
        name : "two", age :'2',
        name : "three", age :'3'
    }];
    return (
        <div>
            <MaterialTable
            title="THIS IS A TABLE TITLE"
            data= {data}
            columns =[
                { title: 'Name', field: 'name' },
                { title: 'Age', field: 'age' }
            ]
            />
        </div>
    )
}

export default DataTable
