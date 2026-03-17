import { create } from "zustand";
import { ViewMode } from "@/lib/types";

type NetworkType = "singers" | "albums";

interface FilterState {
  activeDecades: (1990 | 2000 | 2010 | 2020)[];
  activeLanguages: string[];
  energyRange: [number, number];
}

interface UniverseStore {
  /* 3D VIEW MODE */
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;

  /* SELECTED ENTITIES */
  selectedSongId: string | null;
  selectedSingerId: string | null;
  selectedAlbumId: string | null;

  selectSong: (id: string | null) => void;
  selectSinger: (id: string | null) => void;
  selectAlbum: (id: string | null) => void;

  /* PANEL STATE */
  isPanelOpen: boolean;
  closePanel: () => void;

  /* SEARCH */
  isSearchOpen: boolean;
  toggleSearch: () => void;

  /* NETWORK GRAPH */
  networkType: NetworkType;
  setNetworkType: (type: NetworkType) => void;

  minEdgeWeight: number;
  setMinEdgeWeight: (weight: number) => void;

  /* FILTERS */
  activeDecades: (1990 | 2000 | 2010 | 2020)[];
  activeLanguages: string[];
  energyRange: [number, number];

  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;

  /* DATA STATE */
  isDataLoaded: boolean;
  setDataLoaded: (v: boolean) => void;
}

export const useUniverseStore = create<UniverseStore>((set) => ({
  /* 3D VIEW MODE */
  mode: "galaxy",
  setMode: (mode) => set({ mode, selectedSongId: null }),

  /* SELECTED ENTITIES */
  selectedSongId: null,
  selectedSingerId: null,
  selectedAlbumId: null,

  selectSong: (id) => set({ selectedSongId: id, isPanelOpen: id !== null }),
  selectSinger: (id) => set({ selectedSingerId: id, isPanelOpen: id !== null }),
  selectAlbum: (id) => set({ selectedAlbumId: id, isPanelOpen: id !== null }),

  /* PANEL STATE */
  isPanelOpen: false,
  closePanel: () =>
    set({
      isPanelOpen: false,
      selectedSongId: null,
      selectedSingerId: null,
      selectedAlbumId: null,
    }),

  /* SEARCH */
  isSearchOpen: false,
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  /* NETWORK GRAPH */
  networkType: "singers",
  setNetworkType: (type) => set({ networkType: type }),

  minEdgeWeight: 1,
  setMinEdgeWeight: (weight) => set({ minEdgeWeight: weight }),

  /* FILTERS */
  activeDecades: [1990, 2000, 2010, 2020],
  activeLanguages: [],
  energyRange: [0, 1],

  setFilter: (key, value) => set({ [key]: value }),
  resetFilters: () =>
    set({
      activeDecades: [1990, 2000, 2010, 2020],
      activeLanguages: [],
      energyRange: [0, 1],
    }),

  /* DATA STATE */
  isDataLoaded: false,
  setDataLoaded: (v) => set({ isDataLoaded: v }),
}));
