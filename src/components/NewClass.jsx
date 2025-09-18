import './NewClass.css'

function NewClass() {
    return(
        <>
            <div className='new-class-widget'>
                <div className='container'>
                    <div className='new-class-title'>Add New Class</div>
                    <form className='new-class-form'>
                        <select className='new-class-input'>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                        </select>
                        <input type="text" placeholder='Class Name' className='new-class-input'/>
                        <input type="text" placeholder='Start time' className='new-class-input'/>
                        <input type="text" placeholder='End time' className='new-class-input'/>
                        <input type="text" placeholder='Room' className='new-class-input'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewClass;