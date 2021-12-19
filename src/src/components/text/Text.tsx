import React from 'react'
import './Text.scss'
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../reduxToolkit/store"
import {changeBftText} from "../../reduxToolkit/slices/bftTextSlice"

interface IProps {

}


export const Text: React.FC<IProps> = () => {

    const bftText = useSelector((state: RootState) => state.bftText.bftText)
    const dispatch = useDispatch()

    function handleChange(bftText: string) {
        dispatch(changeBftText(bftText))
    }

    return (
        <section className="root right_bottom">
            <div className="title">
                BFT-файл
            </div>
            <code className="bftArea" contentEditable={"true"}>
                <span style={{color: 'blue'}}>asd</span>
            </code>
        </section>
    )
}