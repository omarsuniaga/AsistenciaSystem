# Objetivo:
Registrar la asistencia de los alumnos
Registrar el contenido de las clases e indicadores
Registrar la evaluación continua de los alumnos
Consultar la gráfica y curva de aprendizaje de los alumnos
Estilos CCS	
Boostraps 5
Back-End
Firebase
Nombre:
Url: 
# Alumno:
•	Id_Alumnos
•	Nombre
•	Apellido
•	Edad
•	Fecha de Inicio
•	Grupo: (A, B, C, D)
# Clases
•	Id_clases
•	Titulo
•	Fecha de clase
•	Nivel
# Indicadores:
•	Id_indicadores
•	Titulo
•	Detalles
•	Padre
# Desempeño:
•	Id_desempeños
•	Nombre Alumno
•	Titulo Clases
•	Calificación
# Usuario:
•	Username
•	Password
•	Correo
•	Nivel
o	Administrador
o	Consultor
# Asistencias:
•	Id_assistance: Automático
•	nameStudents: String
•	date: Date
•	assistance
o	Presente
o	Ausente

# Pantalla Home:
 # Navbar:
•	Iniciar Sesión
o	Solo el Administrador puede crear usuarios para iniciar sesión
# Main:
•	Actividades Pautadas: Carrusel de Imágenes
o	Permite a los usuarios ver alguna actividad pautada
•	Videos de Orquestas
•	Instrumentos
# Footer: 
 # Link de Orquestas:
•	Fiesta Clásica
•	Orquesta Sinfónica La Española
•	El Sistema (Orquesta Sinfónica de Venezuela)
Pantalla Inicio:
Botón Registrar Alumnos: 
•	Activar Modal #RegistrarAlumnos
Botón Registrar Contenidos
•	Activar Modal #RegistrarContenidos
	Botón Agregar Indicadores
Botón Registrar Asistencia del Día
Botón Evaluación Continua
# Dashboard:
•	Lista de Alumnos y graficas de Aprendizaje
Registrar Alumnos:
#RegistrarAlumnos
Método:
AddStudent() 
Ingresar los valores de los campos correspondientes a la Base de Datos “Alumnos”
•	Id_student: Automático
•	name: String
•	lastName: String
•	age: Number
•	startDate: Date 
•	group:  Check Radio
o	A
o	B
o	C
o	D
Registrar Temas:
#RegistrarTemas
Método:
AddThemes() 
Ingresar los valores de los campos correspondientes a la Base de Datos “Clases”
Se requiere saber el nivel de dificultad de cada tema que se registra en este formulario
En el campo de indicadores aparecerá solo el titulo de los indicadores que se registran en el formulario de indicadores, y que serán usados en el tema
Indicators será una lista de Arrays
•	Id_class: Automático
•	title: String
•	indicators: String
•	classDate: Date 
•	nivel:  Check Radio
o	A
o	B
o	C
o	D
Registrar Indicadores:
#RegistrarIndicadores
Método:
AddIndicators() 

Ingresar los valores de los campos correspondientes a la Base de Datos “Indicadores”
•	Id_indicators: Automático
•	title: String
•	details: String
•	parents: String
•	valors:  Check Radio
o	No entendió
o	Tiene Fallas al intentarlo
o	Comprende la información 
o	Domina el tema
# Registrar Rendimiento:
# RegistrarAsiduidad
# Método:
AddEfficiency() 

Ingresar los valores de los campos correspondientes a la Base de Datos “Desempeños”
Permite identificar la relación entre el Alumno y los Indicadores con su calificación del tema
•	Id_efficiency: Automático
•	nameStudents: String
•	classTitle: String
•	indicators: String
o	title
o	qualification
# Registrar Usuarios:
## RegistrarUsuarios
### Método:
AddUser()

Ingresar los valores de los campos correspondientes a la Base de Datos “Usuarios”
Permite Registrar a usuarios encargados de la parte administrativa, los alumnos ni representantes pueden entrar a este nivel.
Hay diferentes niveles de jerarquías
1.	Administrador: Tiene control total del sistema
2.	Consultor: Solo puede agregar temas, asistencias, aplicar exámenes, registrar notas, pero no puede editar nada. Para editar necesita pasar la información al administrador.
•	Id_user: Automático
•	Username: String
•	Password: Pass
•	Correo: email
•	Nivel: check Radius

# Registrar Asistencias:
## RegistrarAsistencias
Método:
AddEfficiency() 

Ingresar los valores de los campos correspondientes a la Base de Datos “Asistencias”
Permite identificar los alumnos que asisten a la clase del día
•	Id_assistance: Automático
•	nameStudents: String
•	date: Date
•	assistance
o	Presente
o	Ausente
La asistencia de los alumnos
Método:
studentsAssistance() 

Permite registrar/consultar las asistencias diarias de los alumnos

1.	Aparecerá la lista de alumnos que han sido inscrito en las clases
2.	Debemos seleccionar el grupo al que pertenecen dichos alumnos
3.	Si el alumno asiste se enmarcara de color Verde
4.	Si el alumno no asiste se enmarcara de color Rojo
5.	Una vez terminada el registro de asistencias, se almacenara en la base de datos también la fecha actual al darle al botón de guardar.
6.	Si se requiere rescatar la asistencia de una fecha pasada, en el campo de fechas, seleccionamos el día.
7.	Debemos dar la opción de modificar la asistencia si así se requiere para corregir algún dato mal registrado.
Buscar la asistencia de una fecha dada
Acciones: Editar
Método: SearchDate()
Query: Seleccionar 

## La evaluación continua de los alumnos
Método:
dailyEvaluation() 

Después de cada tema dado, el profesor deberá pasar uno a uno los alumnos, para medir el conocimiento y si ha sido entendida la clase… para esto se usará la plantilla para medir cada alumno

1.	Seleccionar la clase que vamos a evaluar
a.	(Seleccionar * Clases )
2.	Seleccionar el indicador a evaluar
a.	(Seleccionar * Indicadores donde parents === “title”)
3.	Aparecerá el listado de alumnos presentes 
a.	(Seleccionar * Alumnos donde assistance === “presentes”)
4.	Seleccionamos al alumnos
5.	Se abre un modal con las diferentes calificaciones para seleccionar
6.	Registramos la calificación una vez finalizada la evaluación del alumno 
