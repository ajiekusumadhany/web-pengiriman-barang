import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 10px 40px;
  border-radius: ${(props) => props.borderRadius || "10px"};
  background: ${(props) => props.background || "#01aa5a"};
  font-weight: ${(props) => props.fontWeight || "600"};
  border: ${(props) => props.border || "none"};
  color: ${(props) => props.color || "#fff"};
  cursor: ${(props) => props.cursor || "pointer"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  gap: ${(props) => props.gap || "20px"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  transition: background 0.3s, color 0.3s, font-weight 0.3s;

  &:hover {
    background: ${(props) => props.hoverBackground || "#01aa5ae6"};
    color: ${(props) => props.hoverColor || "#fff"};
    font-weight: ${(props) => props.hoverFontWeight || "bold"};
  }
`;

export const WhiteButton = styled.button`
  padding: 10px 40px;
  border-radius: ${(props) => props.borderRadius || "10px"};
  background: ${(props) => props.background || "#fff"};
  font-weight: ${(props) => props.fontWeight || "600"};
  border: ${(props) => props.border || "2px solid #01aa5a"}; 
  color: ${(props) => props.color || "#01aa5a"};
  cursor: ${(props) => props.cursor || "pointer"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  gap: ${(props) => props.gap || "20px"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  &:hover {
    background: #fff;
    color: #01aa5ae6;
    font-weight: bold;
  }
`;

