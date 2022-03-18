import React from "react"

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente

	const handleEliminar = () => {
		console.log('Eliminando...');
		const respuesta = confirm('¿Deseas eliminar este paciente?')
		if (respuesta) {
			eliminarPaciente(id)
		} 
	}

	return (
		<div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre: {""}
				<span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Propietario: {""}
				<span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Correo: {""}
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Fecha alta: {""}
				<span className="font-normal normal-case">
					10 de Diciembre de 2022
					{fecha}
				</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Síntomas: {""}
				<span className="font-normal normal-case">{sintomas}</span>
			</p>
			<div className="flex justify-between">
				<button
					className="py-2 px-10 bg bg-indigo-600 hover:bg-indigo-700 uppercase rounded text-white font-bold"
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					className="py-2 px-10 bg bg-red-600 hover:bg-red-700 uppercase rounded text-white font-bold"
					onClick={handleEliminar}
				>
					Eliminar
				</button>
			</div>
		</div>
	)
}

export default Paciente
