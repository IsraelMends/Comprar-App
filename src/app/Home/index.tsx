/* 
    @author: Israel de Oliveira Mendes
    @description: Tela inicial do app
    @date: 2025-08-29
*/

import { Image, View, TouchableOpacity, Text } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar ?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <view style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
        </view>

        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearText}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
