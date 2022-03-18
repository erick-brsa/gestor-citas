import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState("")
	const [propietario, setPropietario] = useState("")
	const [email, setEmail] = useState("")
	const [fecha, setFecha] = useState("")
	const [sintomas, setSintomas] = useState("")

	const [error, setError] = useState(false)

	useEffect(() => {
		if (Object.keys(paciente)) {
			console.log("Sí hay algo")
			setNombre(paciente.nombre)
			setPropietario(paciente.propietario)
			setEmail(paciente.email)
			setFecha(paciente.fecha)
			setSintomas(paciente.sintomas)
		} else {
			console.log("No hay nada")
		}
	}, [paciente])

	const generarId = () => {
		const random = Math.random().toString(36).substring(2)
		const fecha = Date.now().toString(36)
		return random + fecha
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// Validación del formulario
		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			setError(true)
			return
		}

		setError(false)

		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas
		}

		if (paciente.id) {
			// Editando el registro
			objetoPaciente.id = paciente.id

			const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
			setPacientes(pacientesActualizados)
			setPaciente({})
		} else{
			// Nuevo registro
			objetoPaciente.id = generarId()
			setPacientes([...pacientes, objetoPaciente])
		}

		// Reiniciar el formulario
		setNombre("")
		setPropietario("")
		setEmail("")
		setFecha("")
		setSintomas("")
	}

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">
				Seguimiento Pacientes
			</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade pacientes {""}
				<span className="text-indigo-500 font-bold">
					Administrarlos
				</span>
			</p>
			<form
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
				onSubmit={handleSubmit}
			>
				{error && (
					<Error message={"Todos los campos son obligatorios"} />
				)}
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block text-gray-700 font-bold uppercase"
					>
						Nombre mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block text-gray-700 font-bold uppercase"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-gray-700 font-bold uppercase"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="block text-gray-700 font-bold uppercase"
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block text-gray-700 font-bold uppercase"
					>
						Sintomas
					</label>
					<textarea
						id="sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los síntomas"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					value={paciente.id ? "Editar paciente" : "Agregar paciente"}
					className="bg-indigo-600 text-white uppercase w-full p-3 font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
				/>
			</form>
		</div>
	)
}

export default Formulario
