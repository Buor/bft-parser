import React from 'react'
import './Values.scss'

export const Values: React.FC = () => {
    return (
        <section className="values">
            <div className="constants">
                <div className="title">Константы</div>
                <div className="list"></div>
            </div>
            <div className="variables">
                <div className="title">Переменные</div>
                <div className="list"></div>
            </div>
            <div className="connections">
                <div className="title">Связи</div>
                <div className="list"></div>
            </div>
        </section>
    )
}