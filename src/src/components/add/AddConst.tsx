import React, {useState} from 'react'

interface IProps {

}

export const AddConst: React.FC<IProps> = () => {

    const [constName, setConstName] = useState('')

    const handleClick = () => {
        // if(constants.includes(constName))
        //TODO implement
    }

    return (
        <>
            <section className="add_constant _add_section">
                <div className="input_description">Введите константу</div>
                <input type="text" value={constName} onChange={(e) => setConstName(e.target.value)}/>
            </section>
            <button className="btn_add" onClick={handleClick}>Добавить</button>
        </>
    )
}