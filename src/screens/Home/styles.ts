import styled, { css } from "styled-components/native";
import { Platform, FlatList, FlatListProps } from "react-native";
import { DoctorDataProps } from "../../components/Doctor";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 35px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.TEXT_SECONDARY};
  `}
`;

export const CustomFlatList = styled(
  FlatList as new (
    Props: FlatListProps<DoctorDataProps>
  ) => FlatList<DoctorDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: Platform.OS === "ios" ? 60 : 0,
  },
})``;

export const TitleFlat = styled.Text`
  font-size: 13px;
  color: #000;
`;
