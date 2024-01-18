import * as Yup from 'yup'

export function initialValues() {
    return {
        nombre:"",
        celular:"",
        direccion:"",
        cedula:""
    };
}

export function validationSchema() {
    return Yup.object({
        nombre: Yup.string().required("El nombre es obligatorio"),
        celular: Yup.string()
            .matches(/^[0-9]+$/, "El celular solo debe contener números")
            .required("El celular es obligatorio"),
        direccion: Yup.string().required("La dirección es obligatoria"),
        cedula: Yup.string()
            .matches(/^[0-9]+$/, "La cédula solo debe contener números")
            .required("La cédula es obligatoria")
    });
}