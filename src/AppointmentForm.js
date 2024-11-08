import React from 'react';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            time: '',
            profession: '', // Inicializar como cadena vacía
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            profession: this.state.profession || "Sin profesión", // Valor predeterminado
        };
        console.log("Datos del formulario:", formData);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={this.handleChange}
                />
                <input
                    type="date"
                    name="date"
                    onChange={this.handleChange}
                />
                <input
                    type="time"
                    name="time"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="profession"
                    placeholder="Profesión"
                    onChange={this.handleChange}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default AppointmentForm;
