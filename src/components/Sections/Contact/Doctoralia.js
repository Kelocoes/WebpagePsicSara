import React, { useEffect } from 'react';
import { Paper } from '@mui/material';

const DoctoraliaWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//platform.docplanner.com/js/widget.js';
        script.id = 'zl-widget-s';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Paper
            dangerouslySetInnerHTML={{
                __html: `
                    <a id="zl-url" class="zl-url" href="https://www.doctoralia.co/sara-elizabeth-plaza-plaza/psicologo/palmira" 
                        rel="nofollow" data-zlw-doctor="sara-elizabeth-plaza-plaza" 
                        data-zlw-type="big_with_calendar" data-zlw-opinion="false" 
                        data-zlw-hide-branding="true" data-zlw-saas-only="true">
                        Sara Elizabeth Plaza Plaza - Doctoralia.co
                    </a>
                    `
            }}
            elevation={10}
            sx={{ my: 2, borderRadius: 5, padding: 1 }}
        />
    );
};

export default DoctoraliaWidget;
