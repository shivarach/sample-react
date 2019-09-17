import React from 'react'
import {connect} from 'react-redux'
import {cancelAppointment} from '../redux/actions.js'

const ViewAppointments = ({appointments, cancelAppointment}) => {
    return (
        <div>
            <ul>
                {appointments.map((appointment, index) =>
                    <li key={index}
                        onClick={() => cancelAppointment(index)}
                        style={{
                            textDecoration: !appointment.scheduled ? 'line-through' : 'none'
                        }}
                    >{appointment.patientName}</li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancelAppointment: id => dispatch(cancelAppointment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAppointments);

