import { Litter } from "@/lib/types";

export const litters: Litter[] = [
  {
    id: "leglo-2026-a",
    slug: "leglo-2026-a",
    motherId: "luna",
    fatherId: "max",
    birthDate: "2026-03-10",
    status: "born",
      expectedColors: ["Bela sa sivim", "Siva", "Krem bela"],
    expectedPickupDate: "2026-05-10",
    waitlistOpen: false,
      description: "Prekrасno leglo od naše najcenjenije kombinacije. Djinar i Max su porodili 6 zdravih štenaca sa izuzetnim temperamentom i zaštitničkim instinktima. Idealna kombinacija moći i karaktera.",
  },
  {
    id: "leglo-2026-b",
    slug: "leglo-2026-b",
    motherId: "bella",
    fatherId: "rex",
    birthDate: null,
    status: "planned",
      expectedColors: ["Krem bela", "Bela", "Siva"],
    expectedPickupDate: "2026-10-01",
    waitlistOpen: true,
      description: "Planirano elitno leglo od dva naša šampiona Srednjeazijskog ovčara. Očekujemo štenada sa izvanrednim karakterom, zdravljem i zaštitničkim sposobnostima.",
  },
];

