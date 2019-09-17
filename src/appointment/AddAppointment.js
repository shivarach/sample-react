import React from 'react'
import { createAppointment } from '../redux/actions'
import { connect } from 'react-redux'

const AddAppointment = ( { dispatch }) => {
    let input;
    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                dispatch(createAppointment(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Create Appointment
                </button>
            </form>
        </div>
    )
}

export default connect()(AddAppointment);

