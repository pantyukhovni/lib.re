import c from "./FormControls.module.css"

export const Input = ({id, type, label, input, meta, ...props})=>{

    const showError = meta.touched && meta.error;
    return(
        <div className={c.wrapper}>
            <lable>{label}</lable>
            <div className={c.input}>
                <input placeholder={label} type={type} {...props} {...input} />
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}


