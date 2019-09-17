export const CREATE_APPOINTMENT = "CREATE_APPOINTMENT";
export const UPDATE_STATUS = "UPDATE_STATUS";

export function createAppointment(patientName) {
    return {
        type: CREATE_APPOINTMENT,
        patientName
    }
}

export function updateStatus(index) {
    return {
        type: UPDATE_STATUS,
        index
    }
}