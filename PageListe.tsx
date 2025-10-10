import React, { useState } from "react";
import { FlatList, View, LayoutChangeEvent } from "react-native";
import Card from "./Card";
import { pages } from "./Data1";

export default function PageList() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const onLayoutCard = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    if (height > maxHeight) setMaxHeight(height);
  };

  return (
    <FlatList
      data={pages}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 8 }}
      renderItem={({ item }) => (
        <View onLayout={onLayoutCard}>
          <Card
            title={item.title}
            content={item.content}
            circle={item.circle}
            progress={item.progress}
            color={item.color}
            fixedHeight={maxHeight > 0 ? maxHeight : undefined}
            onPress={() =>
              setExpandedId(expandedId === item.id ? null : item.id)
            }
            description={expandedId === item.id ? item.description : null}
          />
        </View>
      )}
    />
  );
}
