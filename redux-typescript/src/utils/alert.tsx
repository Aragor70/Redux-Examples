import React from 'react';
import { connect } from 'react-redux';

//display the alert on the screen
interface AlertProperties {
    alert: { alerts: { id: string, message: string, type: string }[] }
}

const Alert = ({alert: {alerts} }: AlertProperties): any => alerts !== null && alerts.length > 0 && alerts.map(element => 
        <div key={element.id} className={`alert alert-${element.type}`}>
            {element.message}
        </div>
    )

const mapStateToProps = (state: any) => ({
    alert: state.alert
})
export default connect(mapStateToProps)(Alert)