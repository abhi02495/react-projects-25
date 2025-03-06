import { useState } from 'react';
import data from './data/accordian-data';
import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Accordian() {

    const navigate = useNavigate();

    const [selected, setSelected] = useState<string | null>();
    const [listOfSelected, setListOfSelected] = useState<Array<string>>([]);
    const [multiSelectEnabled, setMultiSelectEnabled] = useState<boolean>(false);

    function handleSingleSelection(getCurrentId: string) {
        setListOfSelected([]);
        selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId);
    }

    function handleMultiSelect(getCurrentId: string) {
        if(!multiSelectEnabled){
            setListOfSelected([]);
        }
        let selectedIds = listOfSelected;
        if (!listOfSelected.includes(getCurrentId)) {
            selectedIds.push(getCurrentId);
            setListOfSelected(selectedIds);
        }
        else {
            let filteredIds = selectedIds.filter(item => item !== getCurrentId);
            setListOfSelected(filteredIds);
        }
    }

    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map((item) => (
                        <div className='item'>
                            <div onClick={() => {
                                handleSingleSelection(item.id)
                                multiSelectEnabled && handleMultiSelect(item.id)
                            }} className='title'>
                                <h3>{item.question}</h3>
                                <span className='expand'>+</span>
                            </div>
                            {
                                multiSelectEnabled && listOfSelected.includes(item.id) ?
                                    <div className='content'>{item.answer}</div> : null
                            }
                            {
                                !multiSelectEnabled && selected === item.id ?
                                    <div className='content'>{item.answer}</div> : null
                            }
                        </div>
                    ))
                    : <div> No Data found!! </div>
            }
            <div className='btnDiv'>
                <button onClick={() => setMultiSelectEnabled(!multiSelectEnabled)} className='multiSelectBtn'>Enable Multi Select</button>
                {multiSelectEnabled ? <div className='multiSelectOn'>Multi Select is ON!</div> : <div className='multiSelectOff'>Multi Select is OFF!</div>}
                <button className='btn' onClick={() => {navigate('/')}}>Back To Home</button>
            </div>
        </div>
    </div>
}