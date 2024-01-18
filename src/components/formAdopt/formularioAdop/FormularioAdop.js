import { View } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from "react-native-elements"
import { styles } from "./Formulario.styles"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./formulario.data"
import Toast from "react-native-toast-message";
import { getAuth } from "firebase/auth";
import {initFirebase} from '../../../utils/firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

export  function FormularioAdop() {

 // const {uid, displayName,email} = getAuth().currentUser
  const db = getFirestore(initFirebase);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
        try {

          const dataFirebase = { ...formValue, isValid: true, estado: 'progress'};
          addDoc(collection(db, 'formularioTest'), {formDataWithIsValid: dataFirebase} )
          console.log('guardado con exito')
          console.log(formValue);

        } catch (error) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Error al guardar el formulario",
            });
        }
    }

});




return (
  <View style={styles.content}>
    <Input
      placeholder="nombre completo"
      containerStyle={styles.input}
      rightIcon=<Icon
        type="material-community"
        name="at"
        iconStyle={styles.icon}
      />
      onChangeText={(text) => formik.setFieldValue("nombre", text)}
      errorMessage={formik.errors.nombre}
    />

    <Input
      placeholder="celular"
      containerStyle={styles.input}
      rightIcon=<Icon
        type="material-community"
        name="at"
        iconStyle={styles.icon}
      />
      onChangeText={(text) => formik.setFieldValue("celular", text)}
      errorMessage={formik.errors.celular}
    />

    <Input
      placeholder="direccion"
      containerStyle={styles.input}
      rightIcon=<Icon
        type="material-community"
        name="at"
        iconStyle={styles.icon}
      />
      onChangeText={(text) => formik.setFieldValue("direccion", text)}
      errorMessage={formik.errors.direccion}
    />

    <Input
      placeholder="cedula"
      containerStyle={styles.input}
      rightIcon=<Icon
        type="material-community"
        name="at"
        iconStyle={styles.icon}
      />
      onChangeText={(text) => formik.setFieldValue("cedula", text)}
      errorMessage={formik.errors.cedula}
    />

    <Button
      title="Generar Adopcion"
      containerStyle={styles.btnContainer}
      buttonStyle={styles.btn}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
    />
  </View>
);
}