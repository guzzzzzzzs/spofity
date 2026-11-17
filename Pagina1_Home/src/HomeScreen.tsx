import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const categorias = ['Tudo', 'Música', 'Seguindo', 'Podcasts', 'Audiobooks'];
const playlists = [
  'Músicas curtidas',
  'Álbum recente',
  'Playlist aleatória 1',
  'Playlist aleatória 2',
];
const mixes = ['Mix 1', 'Mix 2', 'Mix 3', 'Mix 4'];
const artistas = ['Artista A', 'Artista B', 'Artista C', 'Artista D'];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Barra superior */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topBar}
        >
          <View style={styles.smile}>
            <Text style={styles.smileText}>☺</Text>
          </View>
          {categorias.map((item, index) => (
            <View key={item} style={[styles.chip, index === 0 && styles.chipActive]}>
              <Text style={[styles.chipText, index === 0 && styles.chipTextActive]}>
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Playlists */}
        <View style={styles.grid}>
          {playlists.map((item) => (
            <View key={item} style={styles.playlistCard}>
              <View style={styles.playlistCover} />
              <Text style={styles.playlistText} numberOfLines={2}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/* Mixes */}
        <Text style={styles.sectionTitle}>Seus mixes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mixes.map((item) => (
            <View key={item} style={styles.mixCard}>
              <View style={styles.mixCover}>
                <Text style={styles.coverIcon}>♪</Text>
              </View>
              <Text style={styles.cardLabel}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Artistas mais curtidos */}
        <Text style={styles.sectionTitle}>Artistas mais curtidos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {artistas.map((item) => (
            <View key={item} style={styles.artistCard}>
              <View style={styles.artistCover}>
                <Text style={styles.coverIcon}>☻</Text>
              </View>
              <Text style={styles.cardLabel}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Barra de reprodução */}
      <View style={styles.playerBar}>
        <View style={styles.playerCover} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerTitle}>Nome da música</Text>
          <Text style={styles.playerArtist}>Nome do artista</Text>
        </View>
        <Text style={styles.playerButton}>▶</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', paddingTop: 48 },
  content: { paddingHorizontal: 16, paddingBottom: 110 },
  topBar: { alignItems: 'center', paddingBottom: 16 },
  smile: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3a3a3a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  smileText: { color: '#ffffff', fontSize: 20 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    marginRight: 8,
  },
  chipActive: { backgroundColor: '#ffffff' },
  chipText: { color: '#ffffff', fontSize: 14 },
  chipTextActive: { color: '#000000' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  playlistCard: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  playlistCover: { width: 56, height: 56, backgroundColor: '#555555' },
  playlistText: { color: '#ffffff', fontSize: 13, flex: 1, marginHorizontal: 8 },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
  },
  mixCard: { marginRight: 12, width: 130 },
  mixCover: {
    width: 130,
    height: 130,
    borderRadius: 8,
    backgroundColor: '#3a3a3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistCard: { marginRight: 12, width: 110, alignItems: 'center' },
  artistCover: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#3a3a3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverIcon: { color: '#bbbbbb', fontSize: 36 },
  cardLabel: { color: '#cccccc', fontSize: 13, marginTop: 8 },
  playerBar: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 16,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2e2e2e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  playerCover: { width: 44, height: 44, borderRadius: 6, backgroundColor: '#555555' },
  playerInfo: { flex: 1, marginLeft: 10 },
  playerTitle: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },
  playerArtist: { color: '#aaaaaa', fontSize: 12 },
  playerButton: { color: '#ffffff', fontSize: 22, marginRight: 8 },
});
