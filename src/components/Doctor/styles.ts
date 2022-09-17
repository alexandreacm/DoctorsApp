import styled, { css } from "styled-components/native";

export type DoctorProps = {
  type: "primary" | "secondary";
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<DoctorProps>`
  width: 170px;
  border-radius: 8px;
  padding: 22px;
  border-width: 3px;
  justify-content: center;
  align-items: center;
  margin: 7px;
  ${({ theme, type }) => css`
    background-color: ${type === "primary" ? theme.COLORS.INFO : "red"};
    border-color: ${type === "primary" && theme.COLORS.TEXT_PRIMARY_BORDER};
  `};
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  ${({ theme }) => css`
    color: ${theme.COLORS.TEXT_PRIMARY};
  `};
`;

export const Specialist = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-top: 6px;
  ${({ theme }) => css`
    color: ${theme.COLORS.TEXT_PRIMARY};
  `};
`;
