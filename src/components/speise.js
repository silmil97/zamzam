

export const Gerichte = [

    {
        Art: "Vorspeisen",
        Info:"Alle vorspeisen werden mit brot serviert",
        Gerichte: [
            {
                Gericht: "Linsensuppe",
                Zusatz: "vegan",
                Zutaten: ["rote Linsen", "Karotten", "Kartoffeln", "Kurkuma", "Ingwer"],
                Beschreibung: ["Hausgemachte Suppe aus Linsen und diversem Gemüse"],
                Preis: ["5 €"],
                Allergene: [""]
            },
            {
                Gericht: "Hummus",
                Zusatz: "vegan",
                Zutaten: ["Kichererbsen", "Sesampaste", "Olivenöl", "Zitrone" , "Kümmel"],
                Beschreibung: ["frisch zubereiteter Hummus"],
                Preis: ["6,30 €"],
                Allergene: ["K"]
            },
            {
                Gericht: "Babagannuj ",
                Zusatz: "vegetarisch",
                Zutaten: ["Auberginen", "Sesampaste", "Knoblauch", "Zitronensaft", "Olivenöl"],
                Beschreibung: ["Paste aus geräucherten Auberginen"],
                Preis: ["6,30 €"],
                Allergene: ["G", "K", "2"]
            },
            {
                Gericht: "Mutabbala",
                Zusatz: "vegan",
                Scharf: true,
                Zutaten: ["geräucherte Aubergine", "Sesampaste", "Joghurt", "Knoblauch", "Olivenöl", "Zitrone"],
                Beschreibung: ["Scharfe Paste aus einer Mischung von gebratenen und gerräucherten Auberginen, mit Mangostücken und Bockhornklee"],
                Preis: ["6,30 €"],
                Allergene: ["G", "K", "H", "14", "2"]
            },
            {
                Gericht: "Muhammara ",
                Zusatz: "vegan",
                Scharf: true,
                Zutaten: ["scharfer Peperoni-Dip", "Paprika", "gemahlene Walnüsse", "Knoblauch", "Zitronensaft", "Granatapfelmelasse", "Olivenöl"],
                Beschreibung: ["Scharfe Paprikapaste mit Walnüssen und Sesampaste"],
                Preis: ["6,30 €"],
                Allergene: ["A", "H", "K", "14"]
            },
            {
                Gericht: "Zamzam Vorspeiseplatte für 2 Personen  ",
                Zusatz: "vegetarisch",
                Scharf: true,
                Zutaten: ["gefüllte Kirschpaprika mit Frischkäse", "gefüllte Peperoni mit Frischkäse", "in Kräuter eingelegte Tomaten", "Frischkäse Aubergine kurkuma Kräuterknoblauch", "Frischkäse mit Kräuterknoblauch", "Frischkäse mit Chilli und Kräuterknoblauch", "Frischkäse mit eingelegte Tomaten, Bockhornklee und Mangostücke"],
                Beschreibung: ["Verschiedene mit Frischkäse gefüllte Gerichte zusammen mit unterschiedlichen Frischkäse Sorten und eingelegtes Gemüse"],
                Preis: ["12 €"],
                Allergene: ["G" ,"14", "6"]
            },
        ]
    },
    {
        Art: "Salat",
        Gerichte: [
            {
                Gericht: "Fattusch",
                Zusatz: "vegan",
                Zutaten: ["frittierte Fladenbrot Stücke", "Tomaten", "Gurken", "Petersilie", "Salatdressing"],
                Beschreibung: ["Ein gemischter orientalischer Salat mit frittierten arabischen Brot"],
                Preis: ["7€"],
                Allergene: ["A"]
            },
            {
                Gericht: "Tabboula", //schreibweise
                Zusatz: "vegan",
                Zutaten: ["Burgul", "Minze", "Kopfsalat", "Tomaten", "Petersilie", "Salatdressing"],
                Beschreibung: ["Ein Salat aus Burgul und sehr viel Petersilie"],
                Preis: ["6,50€"],
                Allergene: ["A"]
            },
            {
                Gericht: "Grüner Salat ",
                Zusatz: "vegetarisch",
                Zutaten: ["Verschiedenes Gemüse", "Kopfsalat", "Weißkohl", "Petersilie", "Schafskäse", "Salatdressing"],
                Beschreibung: ["Ein gemischter Salat mit Schafskäse"],
                Preis: ["7€"],
                Allergene: ["8", "G"]
            },
            {
                Gericht: "Kouskous Salat",
                Zusatz: "vegan",
                Scharf: true,
                Zutaten: ["Kouskous", "Paprikapaste", "Tomaten", "Petersilie", "Salatdressing"],
                Beschreibung: ["Ein gemischter Salat mit Kouskous und scharfer Paste"],
                Preis: ["6,50€"],
                Allergene: ["A", "14"]
            },
            {
                Gericht: "Linsen Salat",
                Zusatz: "vegan",
                Zutaten: ["Linsen", "Tomaten", "Gurken", "Petersilie"],
                Beschreibung: ["Ein Salat aus gekochten Linsen und anderem Gemüse, serviert mit Kumin und Olivenöl"],
                Preis: ["7€"],
                Allergene: ["8", "G"]
            }
        ]
    },
    {
        Art: "Hauptgericht",
        Gerichte: [
            {
                Gericht: "Chicken Mandi",
                Zutaten: ["orientalischer geräucherter Reis", " Hähnchen"],
                Beschreibung: ["Ein Reisgericht mit halben Hähnchen und Spezial Soße"],
                Preis: ["12€"],
                Allergene: ["1", "14"]
            },
            {
                Gericht: "Chicken Mandi mit Hähnschenschenkel",
                Zutaten: ["orientalischer geräucherter Reis", " Hähnchen"],
                Beschreibung: ["Ein Reisgericht mit halben Hähnchen und Spezial Soße"],
                Preis: ["7,90€"],
                Allergene: ["1", "14"]
            },
            {
                Gericht: "Musaka mit Reis oder Brot",
                Zusatz: "vegan",
                Zutaten: ["Aubergine","Reis", "Karotten", "Rosinen", "Erbsen", "Nüssen"],
                Beschreibung: ["Gebratene Auberginen mit kartoffeln und gemischter Paprika"],
                Preis: ["10€"],
                Allergene: ["2", "14"]
            },
            {
                Gericht: "Alicha",
                Zusatz: "vegan",
                Zutaten: ["Gemüsepfanne serviert mit Injera"],
                Beschreibung: ["Eritreische Gemüsepfanne mit Tomatensoße mit Injera*, Reis oder Brot"],
                Preis: ["10€"],
                Allergene: ["A"]
            },
            {
                Gericht: "Zigni mit Rindfleisch",
                Scharf: true,
                Zutaten: ["Scharfe Soße auf Tomatenbasis serviert mit Injera"],
                Beschreibung: ["Scharfer Rindergulasch nach eritreeischer Art serviert mit Injera"],
                Preis: ["11,90€"],
                Allergene: ["14", "2", "Y"]
            },
            {
                Gericht: "Hamli", /*Salat mit grünem Thymian,Käse,Zwiebeln und Orientalischer Spinateintopf mit scharfer Tomatensoße.Wirdmit Injeraserviert.  */
                Zusatz: "vegan",
                Zutaten: [""],
                Beschreibung: ["scharfer Spinateintopf serviert mit Injera"],
                Preis: ["10€"],
                Allergene: ["14", "1"]
            },
            {
                Gericht: "Köfte mit Reis oder Brot",
                Zutaten: ["Rinderhackfleischbällchen mit Tomatensoße"],
                Beschreibung: ["Hackfleischbuletten in Tomatensoße mit Fleisch oder Brot"],
                Preis: ["11,90€"],
                Allergene: ["1", "H"]
            } /* Injera erklärung */
        ]
    },
    {
        Art: "Grill - Alle Gerichte mit 3 Beilagen nach Wahl",
        Gerichte: [
            {
                Gericht: "Kebab mit 3 Beilagen",
                Scharf: true,
                Zutaten: ["Hackfleischspieße scharf gewürzt"],
                Beschreibung: ["Rinderhackfleisch scharf gewürzt"],
                Preis: ["13,50€"],
                Allergene: ["14"] //
            },
            {
                Gericht: "Shish Taouk mit 3 Beilagen",
                Scharf: true,
                Zutaten: ["Hähnschenspieße in Joghurtmarinade frisch vom Grill"],
                Beschreibung: ["Hähnschenspieße in Joghurtmarinade frisch vom Grill"],
                Preis: ["13,50€"],
                Allergene: ["G", "14"] //milchprodukte 
            },
            {
                Gericht: "Halbes Hähnschen mit 3 Beilagen",
                Zutaten: [""],
                Beschreibung: ["Halbes Hähnschen"],
                Preis: ["13,50€"],
                Allergene: [""]
            },
            {
                Gericht: "Ganzes Hähnchen mit 3 Beilagen",
                Zutaten: [""],
                Beschreibung: [""],
                Preis: ["22,00€"],
                Allergene: [""]
            },
            {
                Liste: "Beilagen",
                Zutaten: [
                    "Hummus", // sesam
                    "Reis", 
                    "Babagannuj", // Milchprodukte sesam
                    "Mutabbala", // erdnusse sesam
                    "Muhammara", // hülsenfrüchte sesam
                    "gefüllte Peperoni", "gefüllte Kirschpaprika", // milch
                    "Pommes", //
                    "Brot", // gluten
                    "Antipasti", // milchprodukte
                    "Brotaufstriche" // milchprodukte
                ],
                Beschreibung: [""],
                Allergene: [""]
            }
        ]
    },
    {
        Art: "Imbiss Menü",
        Gerichte: [
            {
                Gericht: "Falafelrolle",
                Zusatz: "vegan",
                Zutaten: ["Hausgemachte Falafel", "frisches Gemüse", "Soße"],
                Beschreibung: [""],
                Preis: ["5€"],
                Allergene: ["A", "H"] // Sesam
            },
            {
                Gericht: "Falafelteller",
                Zusatz: "vegan",
                Zutaten: ["Hausgemachte Falafel", "frisches Gemüse", "Soße"],
                Beschreibung: [""],
                Preis: ["7,50€"],
                Allergene: ["A", "H"] // sesam
            },
            {
                Gericht: "Shawarma Sandwich",
                Scharf: true,
                Zutaten: ["Hähnchen Spieß"],
                Beschreibung: [""],
                Preis: ["6,50€"],
                Allergene: [""] // milchprodukte
            },
            {
                Gericht: "Shawarma Teller",
                Scharf: true,
                Zutaten: ["Hähnchen Spieß"],
                Beschreibung: [""],
                Preis: ["10€"],
                Allergene: [""] // milchprodukte
            }
        ]
    },
    {
        Art: "Nachspeisen",
        Gerichte: [
            {
                Gericht: "Baklawa",
                Zutaten: [""],
                Beschreibung: [""],
                Preis: ["1,50€"],
                Allergene: ["A", "H"]
            }
        ]
    }
]