import PickerContainer from "./PickerContainer";
import './css/PickerContainer.css';

function Container()
{
    return (
        <div className="container">
            <h1 style={{color: 'white'}}>Color Picker</h1>
            <PickerContainer />
        </div>
    )
}

export default Container;