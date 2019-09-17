import {CREATE_APPOINTMENT, UPDATE_STATUS} from './actions.js'

function appointmentsApp(state = {appointments: []}, action) {
    switch (action.type) {
        case CREATE_APPOINTMENT:
            return Object.assign({}, state, {
                appointments: [
                    ...state.appointments,
                    {
                        patientName: action.patientName,
                        scheduled: true
                    }
                ]
            });
        case UPDATE_STATUS:
            return Object.assign({}, state, {
                appointments: state.appointments.map((appointment, index) => {
                    if (index === action.index) {
                        return Object.assign({}, appointment, {
                            scheduled: !appointment.scheduled
                        })
                    }
                    return appointment
                })
            });
        default:
            return state;
    }
}

export default appointmentsApp;