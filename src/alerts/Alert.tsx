import React from 'react';
import { Alert as MaterialUiAlert } from '@material-ui/lab';
import { Icon } from '@material-ui/core';

type Severity = 'success' | 'warning' | 'error'

interface AlertProps {
    severity: Severity
    onClose?: () => void
}

const iconBySeverity = (severity: Severity) => {
    switch (severity) {
        case 'warning':
            return 'warning'
        case 'success':
            return 'task_alt'
        case 'error':
            return 'online_prediction'
    }
}

const Alert: React.FC<AlertProps> = ({ severity, onClose, children }) => {
    return (
        <MaterialUiAlert
            variant='filled'
            icon={<Icon>{iconBySeverity(severity)}</Icon>}
            severity={severity}
            onClose={onClose}
        >
            {children}
        </MaterialUiAlert>

    );
}

export type { AlertProps };
export default Alert

