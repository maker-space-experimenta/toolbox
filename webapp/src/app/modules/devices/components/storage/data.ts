

const data = [
  {
    id: "01",
    name: "Digitalwerkstatt",
    description: "Werkstatt mit computergestützen Maschinen für Rapid Prototyping",
    children: [
      {
        id: "01.001",
        name: "Oberschrank",
        description: "Lagerraum für Styropor und Styrodur",
        children: [

        ],
        items: [
          {
            id: "",
            name: "billo Lötstation",
            category: "Lötstation",
            tags: ["solder",]
          }
        ]
      }
    ]
  },
  {
    id: "02",
    name: "Elektronikwerkstatt",
    description: "Werkstatt mit Lötarbeitsplätzen",
    children: [
      {
        id: "02.001",
        name: "Oberschrank",
        description: "Lagerraum für Messgeräte, Labornetzteile, Lötgeräte",
        children: [],
        items: [
          {
            id: "",
            name: "Lötstation LS-450 DIGI",
            category: "Lötstation",
            count: 4,
            tags: ["solder"]
          },
          {
            id: "",
            name: "HAMEG HM-400",
            category: "Oszilloskop",
            tags: ["oszi"]
          },
          {
            id: "",
            name: "Schaltnetzteil 12V",
            category: "Verbrauchsmaterial > Netzteile",
            tags: ["Verbrauchsmaterial"]
          },
          {
            id: "",
            name: "Schaltnetzteil 5V",
            category: "Verbrauchsmaterial > Netzteile",
            tags: ["Verbrauchsmaterial"]
          }
        ]
      },
      {
        id: "02.002",
        name: "Oberschrank",
        description: "joni privat",
        children: [],
        items: []
      },
      {
        id: "02.003",
        name: "Oberschrank",
        description: "Nachschub Kleinteile",
        children: [],
        items: [
          {
            id: "",
            name: "Arduino Nano",
            category: "Verbrauchsmaterial > Arduino Nano",
            count: 30,
            tags: ["Arduino", "Microcontroller", "Programmieren"]
          }
        ]
      },
      {
        id: "02.004",
        name: "Oberschrank",
        description: "Besucherprojekte",
        children: [],
        items: []
      },
      {
        id: "02.005",
        name: "Unterbau",
        description: "",
        children: [
          {
            id: "02.005.001",
            name: "Schublade",
            description: "Multimeter",
            children: [],
            items: [
              {
                id: "",
                name: "UNI T Multimeter",
                category: "Multimeter",
                count: 4,
                tags: ["Multimeter", "Voltmeter", "Durchgangsprüfer"]
              }
            ]
          },
          {
            id: "02.005.002",
            name: "Schublade",
            description: "Feinmechanik, Messschieber",
            children: [],
            items: [
              {
                id: "",
                name: "IFixit Set",
                category: "Feinmechanik",
                count: 2,
                tags: ["Schraubenzieher", "Feinmechanik"]
              },
              {
                id: "",
                name: "WERA Feinschraubenzieher",
                category: "Feinmechanik",
                count: 2,
                tags: ["Schraubenzieher", "Feinmechanik"]
              },
              {
                id: "",
                name: "Messschieber",
                category: "Feinmechanik",
                count: 6,
                tags: ["Messschieber"]
              }
            ]
          },
          {
            id: "02.005.003",
            name: "Schublade",
            description: "Alte Batterien",
            children: [],
            items: []
          },
          {
            id: "02.005.004",
            name: "Schublade",
            description: "Kaltgerätekabel",
            children: [],
            items: []
          }
        ],
        items: []
      },
      {
        id: "02.006",
        name: "Unterbau",
        description: "joni privat",
        children: [
          {
            id: "02.006.001",
            name: "Schublade",
            description: "Steckbretter und Jumper",
            children: [],
            items: [
              {
                id: "",
                name: "Steckbretter",
                category: "Steckbretter",
                count: 1,
                tags: ["Breadboard"]
              }
            ]
          },
          {
            id: "02.006.002",
            name: "Schublade",
            description: "Litze und Isolierband",
            children: [],
            items: [
              {
                id: "",
                name: "Litze",
                category: "Verbrauchsmaterial > Litze",
                count: 1,
                tags: ["Kabel"]
              }
            ]
          },
          {
            id: "02.006.003",
            name: "Schublade",
            description: "USB Kabel und Netzteile",
            children: [],
            items: [
              {
                id: "",
                name: "USB A auf USB Micro",
                category: "USB Kabel",
                count: 1,
                tags: ["USB"]
              }
            ]
          },
          {
            id: "02.006.004",
            name: "Schublade",
            description: "Kabelreste",
            children: [],
            items: [
            ]
          },
        ],
        items: []
      },
      {
        id: "02.007",
        name: "Kleinteilemagazin",
        description: "Blaue Kästen an der Wand",
        children: [],
        items: []
      },
      {
        id: "02.008",
        name: "Board",
        description: "Board über der Arbeitsfläche",
        children: [],
        items: []
      },
      {
        id: "02.009",
        name: "Lochrasterwand",
        description: "Werkzeugwand",
        children: [],
        items: []
      },
    ]
  }
];

export { data };