export const CREATE_APPOINTMENT = "CREATE_APPOINTMENT";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const CANCEL_APPOINTMENT = "CANCEL_APPOINTMENT";

export function createAppointment(patientName) {
    return {
        type: CREATE_APPOINTMENT,
        patientName
    }
}

export function cancelAppointment(index) {
    return {
        type: CANCEL_APPOINTMENT,
        index
    }
}