import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Membuat komponen styled untuk ikon
export const StyledIcon = styled(FontAwesomeIcon)`
color: ${props => props.color || 'black'};
font-size: ${props => props.size || '0.9em'};
margin-right: 10px;
`;

