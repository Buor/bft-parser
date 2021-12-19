import React from 'react'

export const AddConnection: React.FC = () => {
    return (
        <>
            <section className="add_connection _add_section">
                <div className="flex _column">
                    <div className="input_description _center">Название связи</div>
                    <input type="text" className="_mb"/>
                    <div className="flex">
                        <div className="flex_center _mr">
                            <div className="input_description _center">
                                Название переменной
                            </div>
                            <input id="" type="text"/>
                        </div>
                        <div className="flex_center">
                            <div className="input_description _center">
                                Значение
                            </div>
                            <input id="" type="text"/>
                        </div>
                    </div>
                </div>

            </section>
            <button className="btn_add">Добавить</button>
        </>
    )
}