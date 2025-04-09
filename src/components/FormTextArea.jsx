

function FormTextArea({label}) {
  return (
     <fieldset className="fieldset">
     <legend className="fieldset-legend">{label}</legend>
     <textarea name="description" className="textarea h-24 w-full" placeholder="type here"></textarea>
   </fieldset>
  )
}

export default FormTextArea