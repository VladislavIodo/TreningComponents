import React, {ButtonHTMLAttributes, DetailedHTMLProps, KeyboardEvent} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    error?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,error,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`
    // const onKeyPressCallback = (e: KeyboardEvent<HTMLButtonElement>) => {
    //     onKeyPress && onKeyPress(e);
    //
    //     onEnter // если есть пропс onEnter
    //     && e.key === 'Enter' // и если нажата кнопка Enter
    //     && onEnter() // то вызвать его
    // }

    return (
        <div>
        <button
            className={finalClassName}
            // onKeyPress={onKeyPressCallback}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    {error && <span >{error}</span>}
        </div>
    )
}

export default SuperButton
