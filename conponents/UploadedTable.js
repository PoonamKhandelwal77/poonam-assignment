import React from 'react'

const UploadedTable = ({arr}) => {
  return (
    <div>
    <h1>Upload</h1>
    <table>
        <thead>
                <td>Sno</td>
                <td>Links</td>
                <td>prefix</td>
                <td>Add tag</td>
                <td>selected tag</td>
        </thead>
        <tbody>
                {
                    arr.map((e)=>{
                        return(
                            <tr>
                                <td>{e.sno}</td>
                                <td>{e.links}</td>
                                <td>{e.prefix}</td>
                                <td>{e.addtag}</td>
                                <td>{e.selectedtag}</td>
                            </tr>
                        )
                    })
                }
        </tbody>
    </table>
    
    </div>
  )
}

export default UploadedTable