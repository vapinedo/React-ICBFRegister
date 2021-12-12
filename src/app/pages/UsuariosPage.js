import React from 'react'
import { data } from "../data";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export const HomePage = () => {

    return (
        <section className='container'>
            <div className="row justify-center">
                <table className='table table-striped' id="icbf-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.edad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='col-12'>
                    <ReactHTMLTableToExcel 
                        sheet="Sheet"
                        table="icbf-table" 
                        filename="ICBF Excel file"
                        buttonText="Export to Excel"
                        className="btn btn-info mx-auto d-block" />
                </div>
            </div>
        </section>
    )
}
