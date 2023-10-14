import {useState} from "react";
import PickButton from "./PickButton";
import './css/PickButton.css';
import ColorList from "./ColorList";
import './css/ColorList.css';

function PickerContainer()
{
    var [btnStyle, setBtnStyle] = useState({'background-color': 'rgb(180, 37, 85)'});

    var [colorDisp, setColorDisp] = useState({display: 'none'});
    
    function ColorListDisplay()
    {
        console.log(colorDisp.display);
        if (colorDisp.display == 'none') setColorDisp({display: 'block'});
        else setColorDisp({display: 'none'});
    }

    function HandleColorButton(color)
    {
        switch (color)
        {
            case 'black': 
                setBtnStyle({'background-color': 'rgb(50, 50, 50)', color: 'white'}); break;
            case 'brown':
                setBtnStyle({'background-color': 'rgb(97, 62, 52)', color: 'white'}); break;
            case 'red':
                setBtnStyle({'background-color': 'rgb(156, 42, 42)', color: 'white'}); break;
            case 'orange':
                setBtnStyle({'background-color': 'rgb(207, 139, 62)', color: 'white'}); break;
            case 'yellow':
                setBtnStyle({'background-color': 'rgb(223, 199, 64)', color: 'black'}); break;
            case 'white':
                setBtnStyle({'background-color': 'rgb(220, 220, 220)', color: 'black'}); break;
            case 'green':
                setBtnStyle({'background-color': 'rgb(60, 180, 106)', color: 'white'}); break;
            case 'blue':
                setBtnStyle({'background-color': 'rgb(59, 121, 214)', color: 'white'}); break;
            case 'indigo':
                setBtnStyle({'background-color': 'rgb(47, 47, 99)', color: 'white'}); break;
            case 'violet':
                setBtnStyle({'background-color': 'rgb(109, 53, 134)', color: 'white'}); break;
            default:
                setBtnStyle({'background-color': 'rgb(180, 37, 85)', color: 'white'}); break;
        }
        ColorListDisplay();
    }

    return (
        <div className="picker-container">
            <PickButton ButtonStyle={btnStyle} ColorListDisplay={ColorListDisplay}/>
            <ColorList HandleColorButton={HandleColorButton} DisplayStyle={colorDisp}/>
        </div>
    )
}

export default PickerContainer;