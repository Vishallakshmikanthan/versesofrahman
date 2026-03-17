/**
 * Audio analysis fields for a song, sourced from Spotify, librosa, or estimation.
 */
export interface AudioFeatures {
  /** Perceived energy intensity of the track, 0.0–1.0 */
  energy: number;
  /** Musical positivity conveyed by the track, 0.0–1.0 */
  valence: number;
  /** Presence of acoustic instruments, 0.0–1.0 */
  acousticness: number;
  /** Complexity of the rhythmic patterns in the track */
  rhythmicComplexity: number;
  /** Degree of microtonal variation present in the track */
  microtonalVariation: number;
  /** Tempo normalized to a 0.0–1.0 scale */
  tempoNormalized: number;
  /** Raw beats per minute */
  bpm: number;
  /** Pitch class of the musical key (0 = C, 1 = C#, …, 11 = B) */
  musicalKey: number;
  /** Modality of the track: 0 = minor, 1 = major */
  musicalMode: number;
  /** Origin of the audio feature data */
  featureSource: "spotify" | "librosa" | "estimated" | "none";
  /** Confidence score for the feature data, 0.0–1.0 */
  featureConfidence: number;
}

/**
 * Represents a song as a 3D particle in the galaxy visualisation.
 */
export interface GalaxyPoint {
  /** Unique identifier for the track */
  id: string;
  /** Display title of the track */
  title: string;
  /** Identifier of the album the track belongs to */
  albumId: string;
  /** Release year of the track */
  year: number;
  /** Language of the track */
  language: string;
  /** X-axis position in 3D space */
  x: number;
  /** Y-axis position in 3D space */
  y: number;
  /** Z-axis position in 3D space */
  z: number;
  /** Perceived energy of the track, used for visual sizing/colouring */
  energy: number;
  /** Decade bucket the track falls into */
  decade: 1990 | 2000 | 2010 | 2020;
}

/**
 * Full song record containing metadata, credits, and audio analysis.
 */
export interface Track {
  /** Unique identifier for the track */
  id: string;
  /** Display title of the track */
  title: string;
  /** Identifier of the album the track belongs to */
  albumId: string;
  /** Display title of the album */
  albumTitle: string;
  /** Release year of the track */
  year: number;
  /** Language of the track */
  language: string;
  /** List of singers who performed the track */
  singers: Singer[];
  /** Names of the lyricists credited on the track */
  lyricists: string[];
  /** URL to a short audio preview, or null if unavailable */
  previewUrl: string | null;
  /** Spotify track identifier, or null if not linked */
  spotifyId: string | null;
  /** Audio feature data for the track, or null if not yet analysed */
  audioFeatures: AudioFeatures | null;
}

/**
 * Singer entity with network positioning and audio fingerprint.
 */
export interface Singer {
  /** Unique identifier for the singer */
  id: string;
  /** Display name of the singer */
  name: string;
  /** Total number of tracks the singer has performed */
  totalTracks: number;
  /** Averaged audio features representing the singer's sonic identity, or null */
  audioFingerprint: AudioFeatures | null;
  /** X-axis position in the 3D network graph */
  networkX: number;
  /** Y-axis position in the 3D network graph */
  networkY: number;
  /** Z-axis position in the 3D network graph */
  networkZ: number;
}

/**
 * Album entity with timeline positioning and averaged audio features.
 */
export interface Album {
  /** Unique identifier for the album */
  id: string;
  /** Display title of the album */
  title: string;
  /** Release year of the album */
  year: number;
  /** Primary language of the album */
  language: string;
  /** Music director / composer credited for the album */
  director: string;
  /** URL to the album cover image, or null if unavailable */
  coverUrl: string | null;
  /** Number of tracks in the album */
  trackCount: number;
  /** X-axis position in the 3D timeline visualisation */
  timelineX: number;
  /** Y-axis position in the 3D timeline visualisation */
  timelineY: number;
  /** Z-axis position in the 3D timeline visualisation */
  timelineZ: number;
  /** Averaged audio features across all tracks in the album, or null */
  avgAudioFeatures: AudioFeatures | null;
}

/**
 * Node in the 3D network graph, representing either a singer or an album.
 */
export interface NetworkNode {
  /** Unique identifier for the node */
  id: string;
  /** Display name of the node */
  name: string;
  /** Entity type the node represents */
  type: "singer" | "album";
  /** Number of tracks associated with this node */
  trackCount: number;
  /** X-axis position in 3D space */
  x: number;
  /** Y-axis position in 3D space */
  y: number;
  /** Z-axis position in 3D space */
  z: number;
}

/**
 * Directed or undirected connection between two nodes in the network graph.
 */
export interface NetworkEdge {
  /** Identifier of the source node */
  sourceId: string;
  /** Identifier of the target node */
  targetId: string;
  /** Strength of the connection (e.g. shared track count) */
  weight: number;
}

/**
 * Complete network graph dataset containing all nodes and edges.
 */
export interface NetworkData {
  /** All nodes in the network */
  nodes: NetworkNode[];
  /** All edges connecting nodes in the network */
  edges: NetworkEdge[];
}

/**
 * Search result entry for use with Fuse.js fuzzy search.
 */
export interface SearchResult {
  /** Unique identifier of the matched entity */
  id: string;
  /** Primary display title of the matched entity */
  title: string;
  /** Category of the matched entity */
  type: "song" | "singer" | "album";
  /** Secondary descriptive text shown beneath the title */
  subtitle: string;
}

/**
 * The active 3D visualisation mode selected by the user.
 */
export type ViewMode = "galaxy" | "network" | "timeline";
