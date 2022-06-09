import {useField} from 'formik'


const RegisterInputs = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </>
    );
  };

  export default RegisterInputs