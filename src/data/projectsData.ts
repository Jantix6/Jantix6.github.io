
export const projectsData = {
  "lethal-honor": {
    title: "Lethal Honor - Order of the Apocalypse",
    subtitle: "Action Roguelike Game",
    description: "Lethal Honor - Order of the Apocalypse is a challenging hack 'n' slash roguelite featuring demonic creatures, fast-paced melee combat, and powerful abilities. Become part of a secret organization investigating the paranormal and fighting for humanity's survival.",
    longDescription: `
      Currently in development with an estimated launch in 2025, Lethal Honor - Order of the Apocalypse is an intense action roguelike that combines fast-paced hack 'n' slash combat with challenging roguelite mechanics. Players take on the role of operatives in a secret organization dedicated to investigating paranormal activities and fighting for humanity's survival against demonic forces.

      As a developer on this project, I am responsible for implementing core gameplay mechanics, combat systems, enemy AI behavior patterns, and user interface elements. The game features a dynamic combat system where positioning, timing, and ability management are crucial for survival against increasingly challenging demonic enemies.

      The project focuses on creating engaging moment-to-moment gameplay with meaningful progression systems and replayability through procedural elements and character builds.
    `,
    image: "/lovable-uploads/ae1f792a-d1b3-4710-a5bd-911ebd381702.png",
    technologies: ["Unity", "C#", "UI/UX"],
    category: "Action Roguelike",
    year: "2025",
    status: "In Development",
    gallery: [
      "/lovable-uploads/4cc558e9-2d3a-4488-8682-0feaa4422a84.png",
      "/lovable-uploads/b04ad82c-8a5d-404d-8981-a26b2e2ed303.png",
      "/lovable-uploads/007056ee-9a55-4abb-b7d9-5b8a04f6eeb3.png"
    ],
    features: [
      "Fast-paced hack 'n' slash combat system",
      "Challenging roguelite mechanics with procedural elements",
      "Demonic creatures and paranormal enemies",
      "Powerful abilities and character progression",
      "Secret organization narrative and world-building",
      "Replayable gameplay with varied character builds"
    ],
    challenges: [
      "Balancing fast-paced action with strategic depth",
      "Creating engaging enemy AI and combat patterns",
      "Implementing meaningful progression systems",
      "Designing varied and challenging procedural encounters"
    ],
    steamUrl: "https://store.steampowered.com/app/1266060/Lethal_Honor__Order_of_the_Apocalypse/"
  },
  "falling-friends": {
    title: "Falling Friends",
    subtitle: "Local Multiplayer Party Game",
    description: "Falling Friends is a hilarious local multiplayer party game designed for up to 4 players. The goal is simple yet challenging: be the last one standing while avoiding falling into the water and using various abilities against other players.",
    longDescription: `
      Released in 2019, Falling Friends was developed to bring people together for fun local multiplayer sessions. The game features multiple maps and dynamic environmental events that create different gameplay scenarios in each match, ensuring that no two games feel the same.

      As a programmer in a team of 5 (2 programmers, 2 artists, and 1 designer), I focused on implementing the multiplayer systems, player abilities, environmental interactions, and the dynamic event system that makes each match unique. The game emphasizes accessibility and fun, making it perfect for family gatherings and friend sessions.
    `,
    image: "/lovable-uploads/3818d107-d2a8-4612-b336-188661771c2b.png",
    technologies: ["Unity 2D", "C#", "Local Multiplayer", "Game Design", "UI/UX", "Team Development"],
    category: "Party Game",
    year: "2019",
    status: "Released",
    gallery: [
      "/lovable-uploads/36573c5b-ef88-4aa6-a0c1-fd639b5889a8.png",
      "/lovable-uploads/8807f3a9-5255-4b43-afa6-4a50d13673c0.png",
      "/lovable-uploads/29516355-b0cb-402a-88fb-793ade50af67.png"
    ],
    features: [
      "Local multiplayer for up to 4 players",
      "Multiple unique maps with different layouts",
      "Dynamic environmental events affecting gameplay",
      "Various player abilities and power-ups",
      "Easy-to-learn controls suitable for all ages",
      "Competitive last-one-standing gameplay"
    ],
    challenges: [
      "Implementing smooth local multiplayer systems",
      "Balancing different player abilities",
      "Creating engaging environmental events",
      "Ensuring fair and competitive gameplay"
    ],
    itchUrl: "https://team-bug.itch.io/falling-friends"
  },
  "the-magic-journey": {
    title: "The Magic Journey",
    subtitle: "2D Platformer with Puzzle Elements",
    description: "The Magic Journey is a 2D platformer with puzzle elements that combines 3D low poly environments with sprite-based characters and enemies. This unique visual approach creates a distinctive aesthetic that sets it apart from traditional platformers.",
    longDescription: `
      Developed in 2018, this project showcases the perfect blend of 2D and 3D elements in game design. The majority of assets and world environments are crafted in a charming 3D low poly style, while characters and enemies maintain the classic sprite-based approach that gives the game its nostalgic feel.

      Working as a programmer in a team of 4 (1 programmer, 2 artists, and 1 designer), I was responsible for implementing core gameplay mechanics, player controls, puzzle systems, and ensuring smooth integration between 2D sprite animations and 3D environments. The project required careful optimization to maintain performance while handling the mixed rendering pipeline.
    `,
    image: "/lovable-uploads/a8052c80-5478-4a0e-bfd7-20fa2d493a21.png",
    technologies: ["Unity 2D/3D", "C#", "Sprite Animation", "3D Low Poly", "Puzzle Design", "Team Collaboration"],
    category: "2D Platformer",
    year: "2018",
    status: "Released",
    gallery: [
      "/lovable-uploads/54719caa-dae3-4e35-9d5e-dbbab1021cca.png",
      "/lovable-uploads/3ee9c996-bf07-4b16-bb75-2f04dd0c69fa.png",
      "/lovable-uploads/52e9c709-31b2-4649-a3d9-f78314ec09c1.png"
    ],
    features: [
      "Unique blend of 3D low poly environments with 2D sprite characters",
      "Challenging puzzle platformer mechanics",
      "Hand-crafted levels with progressive difficulty",
      "Smooth sprite animation system",
      "Optimized rendering for mixed 2D/3D pipeline",
      "Collaborative development with focused team roles"
    ],
    challenges: [
      "Integrating 2D sprites with 3D environments seamlessly",
      "Optimizing performance for mixed rendering pipeline",
      "Balancing puzzle difficulty with platforming elements",
      "Coordinating art assets between different team members"
    ],
    videoUrl: "https://www.youtube.com/watch?v=IvRVQfojgWg&ab_channel=SergioRodr%C3%ADguezGonz%C3%A1lez"
  }
};

export type Project = typeof projectsData[keyof typeof projectsData];
