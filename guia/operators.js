import db from "./firebaseConfig.js";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import router from "../router";

const provider = new GoogleAuthProvider();
const auth = getAuth();
// signInWithRedirect(auth, provider);
let uid = null;

export const obtenerDatos = async () => {
  const consulta = await getDocs(collection(db, "app"));
  consulta.docs.forEach((doc) => {
    return doc.data();
  });
};

//INICIAR AUTOMATICAMENTE
export const initAuto = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) router.replace("/");
    uid = user.uid;
  });
};
console.log(uid);

export const singOut = async () => {
  await signOut(auth)
    .then(() => {
      router.replace("/login");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};
//LOGGEAR
export const loginUser = async (user) => {
  let asd = {
    email: user.email,
    check: user.check,
    name: user.name,
  };

  await signInWithEmailAndPassword(auth, user.email, user.pass1).then(
    (user) => {
      router.replace("/");
      modificarPerfil(user, asd);
      localStorage.setItem("user", JSON.stringify(asd));
      console.log(user);
    },
    (error) => alert(error.code)
  );
};

//REGISTRAR EL USUARIO EN BASE DE DATOS
const setInDB = async (user) => {
  await setDoc(doc(collection(db, "users")), {
    name: user.name,
    email: user.email,
    pass1: user.pass1,
    check: user.check,
  });
  return user;
};
//REGISTRAR ALUMNOS EN LA BASE DE DATOS
export const setAlumnos = async (data) => {
  await setDoc(doc(collection(db, "app")), {
    uid: data.uid,
    id_alumno: Date.now().toString(),
    nombre: data.nombre,
    apellido: data.apellido,
    edad: data.edad,
    fecha_inicio: data.fecha_inicio,
    grupo: data.grupo,
    padre: data.padre,
    madre: data.madre,
    telefono: data.telefono,
  });
  return data;
};
//AUTENTICA AL USUARIO CON CORREO
export const createUser = async (user) => {
  let asd = {
    email: user.email,
    check: user.check,
    name: user.name,
  };
  await createUserWithEmailAndPassword(auth, user.email, user.pass1)
    .then((userCredential) => {
      // const usuario = userCredential.user;
      setInDB(user);
      loginUser(user);
      localStorage.setItem("user", JSON.stringify(asd));
      router.replace("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error! ", error, errorCode, errorMessage);
    });
  return;
};
//AUTENTICAR USUARIO CON GOOGLE
export const initGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      console.log(token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("Error! ", error, errorCode, errorMessage, email, credential);
    });
};

//MODIFICAR PERFIL DE USUARIO
export const modificarPerfil = async (user, asd) => {
  updateProfile(user, {
    displayName: "Nombre Completo",
    photoURL:
      "https://img.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg?size=338&ext=jpg",
  })
    .then(() => {
      console.log("MODIFICADO", user);
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};
