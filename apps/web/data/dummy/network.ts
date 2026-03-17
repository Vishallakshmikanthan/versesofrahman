import { NetworkData } from "@/lib/types";
import { DUMMY_SINGERS } from "./singers";

// Convert the 20 singers into NetworkNode objects, then define ~30 collaboration edges.

export const DUMMY_NETWORK: NetworkData = {
  nodes: DUMMY_SINGERS.map((singer) => ({
    id: singer.id,
    name: singer.name,
    type: "singer" as const,
    trackCount: singer.totalTracks,
    x: singer.networkX,
    y: singer.networkY,
    z: singer.networkZ,
  })),

  edges: [
    // S. P. Balasubrahmanyam ↔ Hariharan
    { sourceId: "singer-001", targetId: "singer-002", weight: 6 },
    // S. P. Balasubrahmanyam ↔ Mano
    { sourceId: "singer-001", targetId: "singer-020", weight: 7 },
    // S. P. Balasubrahmanyam ↔ Kavita Krishnamurthy
    { sourceId: "singer-001", targetId: "singer-004", weight: 4 },
    // S. P. Balasubrahmanyam ↔ Udit Narayan
    { sourceId: "singer-001", targetId: "singer-003", weight: 3 },
    // Hariharan ↔ Kavita Krishnamurthy
    { sourceId: "singer-002", targetId: "singer-004", weight: 5 },
    // Hariharan ↔ Naresh Iyer
    { sourceId: "singer-002", targetId: "singer-013", weight: 4 },
    // Hariharan ↔ Haricharan
    { sourceId: "singer-002", targetId: "singer-015", weight: 3 },
    // Udit Narayan ↔ Alka Yagnik
    { sourceId: "singer-003", targetId: "singer-006", weight: 8 },
    // Udit Narayan ↔ Sadhana Sargam
    { sourceId: "singer-003", targetId: "singer-019", weight: 3 },
    // Udit Narayan ↔ Kavita Krishnamurthy
    { sourceId: "singer-003", targetId: "singer-004", weight: 4 },
    // Kavita Krishnamurthy ↔ Alka Yagnik
    { sourceId: "singer-004", targetId: "singer-006", weight: 5 },
    // Shreya Ghoshal ↔ Arijit Singh
    { sourceId: "singer-005", targetId: "singer-018", weight: 6 },
    // Shreya Ghoshal ↔ Benny Dayal
    { sourceId: "singer-005", targetId: "singer-007", weight: 5 },
    // Shreya Ghoshal ↔ Karthik
    { sourceId: "singer-005", targetId: "singer-012", weight: 4 },
    // Shreya Ghoshal ↔ Jonita Gandhi
    { sourceId: "singer-005", targetId: "singer-017", weight: 3 },
    // Alka Yagnik ↔ Sonu Nigam
    { sourceId: "singer-006", targetId: "singer-011", weight: 6 },
    // Benny Dayal ↔ Vijay Prakash
    { sourceId: "singer-007", targetId: "singer-008", weight: 7 },
    // Benny Dayal ↔ Karthik
    { sourceId: "singer-007", targetId: "singer-012", weight: 4 },
    // Benny Dayal ↔ Haricharan
    { sourceId: "singer-007", targetId: "singer-015", weight: 3 },
    // Vijay Prakash ↔ Haricharan
    { sourceId: "singer-008", targetId: "singer-015", weight: 5 },
    // Vijay Prakash ↔ Naresh Iyer
    { sourceId: "singer-008", targetId: "singer-013", weight: 4 },
    // Chinmayi ↔ Haricharan
    { sourceId: "singer-009", targetId: "singer-015", weight: 4 },
    // Chinmayi ↔ Sid Sriram
    { sourceId: "singer-009", targetId: "singer-016", weight: 3 },
    // Sukhwinder Singh ↔ Shankar Mahadevan
    { sourceId: "singer-010", targetId: "singer-014", weight: 5 },
    // Sukhwinder Singh ↔ Sonu Nigam
    { sourceId: "singer-010", targetId: "singer-011", weight: 3 },
    // Shankar Mahadevan ↔ Sonu Nigam
    { sourceId: "singer-014", targetId: "singer-011", weight: 4 },
    // Karthik ↔ Naresh Iyer
    { sourceId: "singer-012", targetId: "singer-013", weight: 6 },
    // Jonita Gandhi ↔ Sid Sriram
    { sourceId: "singer-017", targetId: "singer-016", weight: 5 },
    // Arijit Singh ↔ Jonita Gandhi
    { sourceId: "singer-018", targetId: "singer-017", weight: 4 },
    // Sadhana Sargam ↔ Sonu Nigam
    { sourceId: "singer-019", targetId: "singer-011", weight: 2 },
  ],
};
