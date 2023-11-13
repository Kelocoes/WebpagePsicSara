import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FoundationIcon from '@mui/icons-material/Foundation';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';

export default function TimeLine () {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <Box sx={{ marginX: 3 }}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    style={{ zIndex: 1 }}
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #d88ade' }}
                    date="Ene 2023 - Actualidad"
                    iconStyle={{ background: '#d88ade', color: '#fff' }}
                    icon={<PsychologyIcon />}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Psicóloga</Typography>
                    <Typography variant="subtitle1" color="grey">Independiente</Typography>
                    <Typography variant="body1" color="grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    style={{ zIndex: 1 }}
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #e1df73' }}
                    date="Ene - Jun 2023"
                    iconStyle={{ background: '#e1df73', color: '#fff' }}
                    icon={<FoundationIcon />}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Psicóloga</Typography>
                    <Typography variant="subtitle1" color="grey">Fundación vida Luz del Sol Palmira</Typography>
                    <Typography variant="body1" color="grey">
                        Acompañamiento en psicológico, remisiones, atención a padres
                        de familia y desarrollo de talleres con población con discapacidad cognitiva.
                    </Typography>
                </VerticalTimelineElement>
                {!visible1 &&
                    <VerticalTimelineElement
                        style={{ zIndex: 1 }}
                        iconOnClick={() => setVisible1(true)}
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', cursor: 'pointer' }}
                        icon={<AddIcon />}
                    />
                }
                {visible1 &&
                    <>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ borderTop: '5px solid #9a6eda' }}
                            date="Feb - Jun 2022"
                            iconStyle={{ background: '#9a6eda', color: '#fff' }}
                            icon={<FamilyRestroomIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Practicante Psicología educativa</Typography>
                            <Typography variant="subtitle1" color="grey">Colegio San José del Ávila</Typography>
                            <Typography variant="body1" color="grey">
                                Acompañamiento en psico-orientación, remisiones, escuela para padres, desarrollo de
                                proyectos y talleres.
                            </Typography>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ borderTop: '5px solid #e16586' }}
                            date="Jul - Nov 2021"
                            iconStyle={{ background: '#e16586', color: '#fff' }}
                            icon={<LocalHospitalIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Practicante Psicología clínica</Typography>
                            <Typography variant="subtitle1" color="grey">Gesencro IPS</Typography>
                            <Typography variant="body1" color="grey">
                                Tele consulta pacientes, psicoeducaciones grupales y en sala, taller y atención presencial a pacientes.
                            </Typography>
                        </VerticalTimelineElement>
                        {!visible2 &&
                            <VerticalTimelineElement
                                style={{ zIndex: 1 }}
                                iconOnClick={() => setVisible2(true)}
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', cursor: 'pointer' }}
                                icon={<AddIcon />}
                            />
                        }
                    </>
                }
                {visible2 &&
                    <>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ borderTop: '5px solid #7dd287' }}
                            date="Jul - Nov 2021"
                            iconStyle={{ background: '#7dd287', color: '#fff' }}
                            icon={<SupportAgentIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]} >Atención al cliente</Typography>
                            <Typography variant="subtitle1" color="grey">Roka comunicación visual</Typography>
                            <Typography variant="body1" color="grey">
                                Manejo de correspondencia y atención al cliente.
                            </Typography>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ borderTop: '5px solid #8d37de' }}
                            date="Ago 2017 - Oct 2022"
                            iconStyle={{ background: '#8d37de', color: '#fff' }}
                            icon={<SchoolIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Psicóloga</Typography>
                            <Typography variant="subtitle1" color="grey">Universidad Pontificia Bolivariana</Typography>
                            <Typography variant="body1" color="grey">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            </Typography>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', cursor: 'pointer' }}
                            icon={<StarIcon />}
                        />
                    </>
                }
            </VerticalTimeline>
        </Box>
    );
}
