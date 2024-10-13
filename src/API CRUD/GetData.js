import { useEffect, useState } from 'react'
import { Get_All_Api_Data } from './API_Functions';
import ApiCards from './ApiCards';
import MyForm from './MyForm';

const GetData = () => {

  const [EditData, SetEditData] = useState({}) // For Edit Object
  const [GetApiData, SetApiData] = useState([]) // For Get All API DATA
  const [GetFieldData, SetFieldData] = useState({  // For Onchange Input
    Title: "",
    Body: ""
  });


  //* Get all API Data
  const GetData = async () => {
    const res = await Get_All_Api_Data();
    SetApiData(res.data);

  }

  //* Update Data --  Asume that call this funtion in edit button
  const UpdateData = (data) => {
    SetEditData(data)
  }


  useEffect(() => {
    GetData();
  }, [])



  return (
    <div className='container'>

      <div className='row justify-content-center mt-4'>
        <h3 className='text-center display-2'>API DATA PRACTICE </h3>
        <MyForm
          GetApiData={GetApiData}
          SetApiData={SetApiData}
          GetFieldData={GetFieldData}
          SetFieldData={SetFieldData}
          EditData={EditData}
          SetEditData={SetEditData}
        />
        {
          GetApiData.map(elem => {
            return (
              //* Pass All Props To Api Card Component
              <ApiCards
                key={elem.id}
                title={elem.title}
                body={elem.body}
                id={elem.id}
                GetApiData={GetApiData}
                SetApiData={SetApiData}
                UpdateData={UpdateData}
                Alldata={elem}
              />
            )

          })
        }

      </div>
    </div>

  )
}

export default GetData