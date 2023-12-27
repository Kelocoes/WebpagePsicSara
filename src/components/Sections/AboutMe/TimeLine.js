import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FoundationIcon from '@mui/icons-material/Foundation';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import Link from '@mui/material/Link';

import './TimeLine.css';

const StyledVerticalTimeline = styled(VerticalTimeline)({
    zIndex: 1
});

export default function TimeLine () {
    const [visible1, setVisible1] = useState(false);
    const [visibleText1, setVisibleText1] = useState(false);
    const [visibleText2, setVisibleText2] = useState(false);
    const [visibleText3, setVisibleText3] = useState(false);
    const [visibleText4, setVisibleText4] = useState(false);
    const [visibleText5, setVisibleText5] = useState(false);

    const handleTextClick1 = () => {
        setVisibleText1(prevState => !prevState);
    };

    const handleTextClick2 = () => {
        setVisibleText2(prevState => !prevState);
    };

    const handleTextClick3 = () => {
        setVisibleText3(prevState => !prevState);
    };

    const handleTextClick4 = () => {
        setVisibleText4(prevState => !prevState);
    };

    const handleTextClick5 = () => {
        setVisibleText5(prevState => !prevState);
    };

    return (
        <Box sx={{ marginX: 3 }}>
            <StyledVerticalTimeline>
                <VerticalTimelineElement
                    style={{ zIndex: 1 }}
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #d88ade' }}
                    dateClassName="date-custom"
                    date="Ene 2023 - Actualidad"
                    iconStyle={{ background: '#d88ade', color: '#fff' }}
                    icon={<PsychologyIcon />}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Psicóloga</Typography>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                    <Typography variant="subtitle1" color="grey">Independiente</Typography>
                    <Typography variant="body1" color="grey" sx={{ textAlign: 'justify' }}>
                        Después de explorar distintos escenarios y dedicar mis tiempos libres a acompañar
                        procesos de psicoterapia, me percaté de cómo cada avance a nivel personal impactaba
                        positivamente la vida de estas personas.&nbsp;
                        {visibleText1 &&
                            <>
                                La motivación que experimenté al presenciar
                                estas transformaciones fue tan intensa que tomé la decisión de entregarme por completo
                                a brindar espacios y compartir las herramientas necesarias. Mi objetivo es que cada
                                individuo mejore su salud mental, generando un impacto positivo en todas las áreas de su vida.&nbsp;
                            </>
                        }
                        <Link
                            component="button"
                            variant="body1"
                            color="inherit"
                            sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                            onClick={handleTextClick1}
                        >
                            {visibleText1 ? 'Menos...' : 'Más...'}
                        </Link>
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    style={{ zIndex: 1 }}
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #e1df73' }}
                    dateClassName="date-custom"
                    date="Ene - Jun 2023"
                    iconStyle={{ background: '#e1df73', color: '#fff' }}
                    icon={<FoundationIcon />}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Psicóloga</Typography>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                    <Typography variant="subtitle1" color="grey">Fundación vida Luz del Sol Palmira</Typography>
                    <Typography variant="body1" color="grey" sx={{ textAlign: 'justify' }}>
                        Uno de los primeros lugares donde comencé a desempeñar mi labor fue en la Fundación
                        Vida La Luz del Sol. Allí, acompañé los procesos psicológicos de adultos con
                        discapacidad cognitiva, implementando talleres y proyectos diseñados para
                        potenciar su integralidad y funcionalidad en la vida diaria.&nbsp;
                        {visibleText2 &&
                            <>
                                Además, brindé capacitaciones a padres de familia, generando conciencia sobre la importancia
                                del desarrollo de sus hijos. Esta experiencia temprana consolidó mi compromiso
                                con la inclusión y el bienestar integral.&nbsp;
                            </>
                        }
                        <Link
                            component="button"
                            variant="body1"
                            color="inherit"
                            sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                            onClick={handleTextClick2}
                        >
                            {visibleText2 ? 'Menos...' : 'Más...'}
                        </Link>
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
                            contentStyle={{ borderTop: '5px solid #8d37de' }}
                            dateClassName="date-custom"
                            date="Ago 2017 - Oct 2022"
                            iconStyle={{ background: '#8d37de', color: '#fff' }}
                            icon={<SchoolIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Psicóloga</Typography>
                            <Divider sx={{ borderBottomWidth: 2 }} />
                            <Typography variant="subtitle1" color="grey">Universidad Pontificia Bolivariana</Typography>
                            <Typography variant="body1" color="grey" sx={{ textAlign: 'justify' }}>
                                Durante mi travesía como estudiante de psicología, descubrí y me enamoré de la
                                fascinante forma en que funciona nuestra mente. Aprendí sobre la poderosa influencia
                                de nuestros pensamientos y emociones en la manera en que nos relacionamos con el mundo
                                y enfrentamos la vida.&nbsp;
                                {
                                    visibleText3 &&
                                    <>
                                        En 2022, al recibir oficialmente mi diploma y convertirme en
                                        psicóloga, hice una promesa: impactar positivamente la vida de las personas enseñándoles
                                        a gestionar sus emociones, reconocer su valía y potencial.&nbsp;
                                    </>
                                }
                                <Link
                                    component="button"
                                    variant="body1"
                                    color="inherit"
                                    sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                                    onClick={handleTextClick3}
                                >
                                    {visibleText3 ? 'Menos...' : 'Más...'}
                                </Link>
                            </Typography>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ borderTop: '5px solid #9a6eda' }}
                            dateClassName="date-custom"
                            date="Feb - Jun 2022"
                            iconStyle={{ background: '#9a6eda', color: '#fff' }}
                            icon={<FamilyRestroomIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Practicante Psicología educativa</Typography>
                            <Divider sx={{ borderBottomWidth: 2 }} />
                            <Typography variant="subtitle1" color="grey">Colegio San José del Ávila</Typography>
                            <Typography variant="body1" color="grey" sx={{ textAlign: 'justify' }}>
                                Durante mi último semestre universitario, fui parte del equipo de psicología
                                en la institución educativa San José del Ávila en Palmira. Esta experiencia me
                                brindó la oportunidad de desarrollar proyectos enfocados en el proyecto de vida
                                y la gestión emocional de jóvenes y niños.&nbsp;
                                {visibleText4 &&
                                    <>
                                        Acompañé procesos de psico orientación y proporcioné capacitaciones a padres,
                                        guiándolos hacia una crianza más positiva. Además, diseñé talleres destinados
                                        a fomentar la salud mental y el cuidado de las emociones en niños y jóvenes de
                                        diferentes edades. Esta etapa no solo enriqueció mi formación, sino que también
                                        fortaleció mi compromiso con el bienestar integral de las nuevas generaciones.&nbsp;
                                    </>
                                }
                                <Link
                                    component="button"
                                    variant="body1"
                                    color="inherit"
                                    sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                                    onClick={handleTextClick4}
                                >
                                    {visibleText4 ? 'Menos...' : 'Más...'}
                                </Link>
                            </Typography>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ borderTop: '5px solid #e16586' }}
                            dateClassName="date-custom"
                            date="Jul - Nov 2021"
                            iconStyle={{ background: '#e16586', color: '#fff' }}
                            icon={<LocalHospitalIcon />}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={grey[700]}>Practicante Psicología clínica</Typography>
                            <Divider sx={{ borderBottomWidth: 2 }} />
                            <Typography variant="subtitle1" color="grey">Gesencro IPS</Typography>
                            <Typography variant="body1" color="grey" sx={{ textAlign: 'justify' }}>
                                Durante mi penúltimo semestre universitario, fui psicóloga clínica en IPS
                                Gesencro en Palmira. En esos 5 meses, trabajé en proyectos y talleres
                                centrados en pacientes con enfermedades crónicas, especialmente diabetes.&nbsp;
                                {visibleText5 &&
                                    <>
                                        Brindé apoyo a familias y usuarios, ayudándolos a manejar los aspectos emocionales
                                        y de salud mental de un diagnóstico. A través de sesiones de psicoeducación,
                                        me enfoqué en ser un apoyo esencial en sus tratamientos. Esta experiencia reforzó
                                        mi compromiso con el bienestar emocional y mental de las personas.&nbsp;
                                    </>
                                }
                                <Link
                                    component="button"
                                    variant="body1"
                                    color="inherit"
                                    sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                                    onClick={handleTextClick5}
                                >
                                    {visibleText5 ? 'Menos...' : 'Más...'}
                                </Link>
                            </Typography>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ zIndex: 1 }}
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', cursor: 'pointer' }}
                            icon={<StarIcon />}
                        />
                    </>
                }
            </StyledVerticalTimeline>
        </Box>
    );
}
