
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './CustomerService' ;
import './Screen.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function Screen({dataone,table,datatwo}) {

    const navigate=useNavigate()
     const handleClick=()=>{
        navigate('/')
     }
    
  
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id:{value:null,matchMode: FilterMatchMode.EQUALS},
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        age:{value:null,matchMode: FilterMatchMode.EQUALS},
        subject: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        mark: { value: null, matchMode: FilterMatchMode.EQUALS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        place: { value: null, matchMode: FilterMatchMode.STARTS_WITH },

    });
    const [loading, setLoading] = useState(true);

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    useEffect(() => {
        
            setLoading(false);
       
    }, []); 

   

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    {dataone ?(
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                     ) :(
                        <Button icon="pi pi-refresh" rounded raised />
                     )}
                </span>
            </div>
        );
    };

    const header = renderHeader();

    return (
    <>
   
   
     <div className="card">
           

         <i className="pi pi-arrow-left p-2 " id='icon' onClick={handleClick} style={{ fontSize: '1.5rem' }}></i>
           <h1>   Table {table}</h1>
   {dataone ? (
            <DataTable value={dataone} paginator rows={10} dataKey="id"  filterDisplay="row"  filters={filters} loading={loading}
                globalFilterFields={['id', 'name', 'subject', 'mark','age','status']} header={header} emptyMessage="No customers found." >
            <Column field="id" header="ID" filterField="id" filter filterPlaceholder="Search by ID"  style={{ minWidth: '12rem' }}/>
            <Column field="name" header='Name' filterField="name"  filter filterPlaceholder="Search by name"  style={{ minWidth: '16rem' }}  />
            <Column field="age" header='Age' filterField="age" filter  filterPlaceholder="Search by age"  style={{ minWidth: '15rem' }}/>
            <Column field="subject" header='Subject'filterField="subject" filter filterPlaceholder="Search by subject"   style={{ minWidth: '17rem' }}  />
            <Column field="mark" header='Mark' filterField="mark" filter filterPlaceholder="Search by mark"  style={{ minWidth: '16rem' }}/>   
            <Column field="status" header='Status' filterField="status"  filter filterPlaceholder="Search by status"   style={{ minWidth: '16rem' }}  />
            </DataTable>

):(
           <DataTable value={datatwo}  rows={10} dataKey="id"  filterDisplay="row"   loading={loading} sortMode="multiple"
                    header={header} emptyMessage="No customers found." >
              <Column field="id" header="ID" filterField="id" filter filterPlaceholder="Search by ID" sortable style={{ minWidth: '12rem' }}/>
               <Column field="name" header='Name' filterField="name"  filter filterPlaceholder="Search by name" sortable style={{ minWidth: '12rem' }}  />
               <Column field="age" header='Age' filterField="age" filter  filterPlaceholder="Search by age" sortable  style={{ minWidth: '12rem' }}/>
               <Column field="place" header='Place'filterField="place" filter filterPlaceholder="Search by place" sortable   style={{ minWidth: '12rem' }}  />    
           </DataTable>

)}        
       </div>
    </>

       
    );
}
        