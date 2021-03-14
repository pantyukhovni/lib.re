import {Field, reduxForm} from "redux-form";
import {Input} from "../../../formControls/FormControls";
import {maxLenghtCreator, number, requiredField} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {addBook} from "../../../redux/reducers/bookReducer";



const maxLength15 = maxLenghtCreator(15);

const AddNewBookForm = (props)=>{


    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='Title'
                       type='text'
                       label='Название'
                       component={Input}
                       validate={[requiredField, maxLength15]}

                />
            </div>
            <div>
                <Field name='Author'
                       type='text'
                       label='Автор'
                       component={Input}
                       validate={[requiredField, maxLength15]}
                />
            </div>
            <div>
                <Field name='Price'
                       type='number'
                       label='Стоимость'
                       component={Input}
                       validate={[requiredField, number]}
                />
            </div>
            <div>
                <Field name='Published'
                       type='date'
                       label='Дата выпуска'
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field name='inStock'
                       type='checkbox'
                       label='Статус'
                       component={Input}
                       validate={[]}
                />
            </div>
            <div>
                <button disabled={props.pristine} onClick={props.reset}>Очистить форму</button>
                <button type="submit" disabled={props.pristine || props.submitting }>Добавить книгу</button>
            </div>
        </form>
    )
}


const AddNewBookReduxForm = reduxForm({
    form: 'addNewBook',
    enableReinitialize: true
})(AddNewBookForm)

const NewBook = (props)=>{
    const onSubmit = (formData)=>{
        props.addBook(formData)
        props.setActive(false)
        console.log(formData)
    }


    return(
        <>
            <AddNewBookReduxForm onSubmit={onSubmit}/>
        </>
    )
}


export default connect(null, {addBook})(NewBook);