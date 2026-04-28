import { Litter } from "@/lib/types";

export const litters: Litter[] = [
  {
    id: "leglo-2026-a",
    slug: "leglo-2026-a",
    motherId: "luna",
    fatherId: "max",
    birthDate: "2026-03-10",
    status: "born",
    expectedColors: ["Zlatna", "Crna sa paležom", "Braon"],
    expectedPickupDate: "2026-05-10",
    waitlistOpen: false,
    description: "Prelepo leglo od naše najcenjenije combinacije. Luna i Max su porodili 7 zdravih štenaca sa odličnim temperamentom.",
  },
  {
    id: "leglo-2026-b",
    slug: "leglo-2026-b",
    motherId: "bella",
    fatherId: "rex",
    birthDate: null,
    status: "planned",
    expectedColors: ["Krem bela", "Zlatna", "Braon"],
    expectedPickupDate: "2026-10-01",
    waitlistOpen: true,
    description: "Planirano elitno leglo od dva naša šampiona. Očekujemo štenada sa izvanrednim karakterom i izložbenim potencijalom.",
  },
];

