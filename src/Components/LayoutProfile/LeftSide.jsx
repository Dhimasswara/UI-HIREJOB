import style from './style.module.css'

const LeftSide = ({children}) => {
    return (
        <div class={`col-10 col-md-3 bg-light ${style.leftSide}`}>
            {children}
        </div>
    )
}

export default LeftSide