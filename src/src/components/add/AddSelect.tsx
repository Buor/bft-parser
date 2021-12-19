import React from 'react'

export const AddSelect: React.FC = () => {

    return (
        <div className="left_bottom_head">
            <div className="title">Добавление</div>
            <select id="select_variable_type">
                <option value="constant">Константа</option>
                <option value="variable">Переменная</option>
                <option value="connection">Связь</option>
            </select>
        </div>
    )
}