import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const itens = [
  { icone: '+', titulo: 'Add Account' },
  { icone: '★', titulo: 'Planos' },
  { icone: '◷', titulo: 'Cápsula do tempo' },
  { icone: '↺', titulo: 'Recentes / Histórico' },
  { icone: '⟳', titulo: 'Atualizações' },
  { icone: '⚙', titulo: 'Configurações / Privacidade' },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Perfil do usuário */}
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <View>
            <Text style={styles.userName}>Nome do usuário</Text>
            <Text style={styles.userSub}>Ver perfil</Text>
          </View>
        </View>

        {/* Opções */}
        {itens.map((item) => (
          <View key={item.titulo} style={styles.item}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>{item.icone}</Text>
            </View>
            <Text style={styles.itemText}>{item.titulo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', paddingTop: 56 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 24,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: { color: '#ffffff', fontSize: 28, fontWeight: 'bold' },
  userName: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
  userSub: { color: '#aaaaaa', fontSize: 14, marginTop: 2 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: { color: '#ffffff', fontSize: 20 },
  itemText: { color: '#ffffff', fontSize: 16 },
});
