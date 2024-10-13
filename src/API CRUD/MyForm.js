import { useEffect } from 'react'
import { AddData, UpdateData } from './API_Functions';

const Add_Data_Form = ({ GetApiData, SetApiData, GetFieldData, SetFieldData, EditData, SetEditData }) => {




    const HandleEvent = (e) => {
        const FieldName = e.target.name; // GET FIELD NAME ATTRIBUTE
        const FieldValue = e.target.value; // GET FIELD VALUE ATTRIBUTE

        SetFieldData({
            ...GetFieldData, [FieldName]: FieldValue  //? Keep OLD TEXT & ADD NEW TEXT
        })
    }

    const EditObject = Object.keys(EditData).length; // Get Length of object

    const AddNewData = async () => {
        try {

            if (!EditObject) {
                let NewData = { //* Make a new object of my new DATA
                    id: new Date().getMilliseconds() * 223,
                    title: GetFieldData.Title,
                    body: GetFieldData.Body
                }
                SetApiData([...GetApiData, NewData])  //* [...GetApiData --> means keep OLD DATA , NewData -- ADD NEW DATA]
                SetFieldData({ Title: "", Body: "" }) //* Clear All Fields
                const res = await AddData(NewData); //* wait for data POST
                console.log(res);

            } else {

                let UpdatedData = {
                    title: GetFieldData.Title,
                    body: GetFieldData.Body,
                };

                await UpdateData(EditData.id, UpdatedData); //* EDIT.ID find ID of my current edit item , updated data my new edited data

                const UpdatedApiData = GetApiData.map(item => item.id === EditData.id ? UpdatedData : item); // Match that old API data id is match to our new response id that return other wise false
               
                SetApiData(UpdatedApiData);  //* Update local state with edited data
                SetFieldData({ Title: "", Body: "" });  //* Clear form fields
                SetEditData({})//* Clear State

            }


        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        if (EditData.id) { // SetFieldData set my title and body text
            SetFieldData({
                Title: EditData.title || "",
                Body: EditData.body || ""
            });
        }

    }, [EditData, SetFieldData])

    return (
        <div className='col-md-12 border p-3' style={{ width: '75rem', margin: "50px 0px" }}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={GetFieldData.Title} onChange={HandleEvent} name='Title' />
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea className="form-control" value={GetFieldData.Body} onChange={HandleEvent} rows={2} name='Body' />
            </div>
            <div className="d-grid gap-2">
                <button className={EditObject ? "btn btn-warning" : "btn btn-primary"} onClick={AddNewData} value={EditObject ? "UPDATE DATA" : "ADD DATA"} type="button">{EditObject ? "UPDATE DATA" : "ADD DATA"}</button>

            </div>
        </div>
    )
}

export default Add_Data_Form