import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";

import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = [data: ItemData];

export function Item({}: Props) {
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity activeOpacity={0.8}></TouchableOpacity>
    </View>
  );
}
