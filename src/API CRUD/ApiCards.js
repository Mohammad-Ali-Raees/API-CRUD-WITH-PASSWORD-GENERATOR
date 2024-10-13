import { DeleteData } from './API_Functions';

// All props that get from GET DATA component
const ApiCards = ({ id, title, body, GetApiData, SetApiData, UpdateData, Alldata }) => {



    //* Delete API Data -----
    const DeleteHandle = (id) => {
        try {

            DeleteData(id)
            const filter = GetApiData.filter(elem => elem.id !== id) // That id not match delete todo
            SetApiData(filter);

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <div className="card m-2 " style={{ width: '18rem' }} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
            <div className="d-inline p-2">

                <button className='btn btn-success me-2' onClick={() => UpdateData(Alldata)} >EDIT</button>
                <button className='btn btn-danger' onClick={() => DeleteHandle(id)} >DELETE</button>

            </div>
        </div>


    )
}

export default ApiCards