import React from "react";
import { Container, CustomFlatList } from "./styles";

import Doctor from "../../components/Doctor";
import { dataFlat } from "../..//mock/mock-data";

export function Home() {
  return (
    <Container>
      <CustomFlatList
        data={dataFlat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Doctor type="primary" data={item} />}
        numColumns={2}
      />
    </Container>
  );
}
