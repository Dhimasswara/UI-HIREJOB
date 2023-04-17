import style from './style.module.css'

const RightSide = ({ children, sty }) => {
    return (
        <div class={`col-8 col-md-8 bg-light ${style.rightSide}`} style={sty}>
            {children}
        </div>
    )
}

export default RightSide