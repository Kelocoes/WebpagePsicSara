import React from 'react';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const mailPublicKey = process.env.REACT_APP_MAIL_PUBLIC_KEY;

const isEnvValid = serviceId && templateId && mailPublicKey;

if (!isEnvValid) {
    throw new Error('Missing environment variables.');
}

const dotenv = {
    serviceId,
    templateId,
    mailPublicKey
};

export const EnvContext = React.createContext(dotenv);

export const useEnv = () => {
    const context = React.useContext(EnvContext);
    if (!context) {
        throw new Error('useEnv must be used within a EnvProvider');
    }
    return context;
};
