export const demoCases = [
  {
    id: 1,

    level: "Medel",

    title: "Mordet i biblioteket på Kensington Row",

    shortSummary:
      "Den förmögne affärsmannen Lord Cedric Blackwood hittas död på golvet i sitt privata bibliotek.",

    victim: "Sir Cedric Blackwood",
    victimAge: "69 år",
    victimJob: "Framgångsrik affärsman",
    victimLifeSituation:
      "Levde i stor herrgård tillsammans med tjänstefolk och sin brorson. Mycket förmögen. Ogift och utan barn. Enda kvarvarande familj är hans brorson.",

    victimImg: "LibraryMurder-VictimImg.png",
    crimeSceneImg: "LibraryMurder-CrimeSceneImg.png",
    crimeSceneImgText: "Brottsplatsfotografi – Biblioteket",

    clueImg: "LibraryMurder-ClueOneImg.png",
    clueImgText: "Planlösning över fastigheten",

    secondClueImg: "LibraryMurder-ClueTwoImg.png",
    secondClueImgText: "Självmordsbrevet som hittades på brottsplatsen",

    causeOfDeath:
      "En skottskada mot sidan av huvudet. Offret avled omedelbart.",

    weapon:
      "Revolver som återfinns på brottsplatsen intill offret",

    place:
      "Brottet begicks i offrets egen bostad, närmare bestämt i biblioteket.",

    crimeSceneDescription: `Lord Cedric Blackwood påträffades död i sitt privata bibliotek av husets butler omkring halv nio på aftonen. Polisen anlände till herrgården kort därefter.

Den avlidne låg livlös vid sitt skrivbord med en skottskada mot huvudet. Intill offrets högra hand återfanns en revolver, senare identifierad som tillhörande Sir Blackwood själv.

Vapnets hölster återfanns i den översta skrivbordslådan i biblioteket, vilket antyder att revolvern nyligen tagits fram.

Biblioteket uppvisade inga tydliga tecken på strid, inbrott eller annan våldsam oordning. Detsamma gällde övriga delar av bostaden.

På golvet bakom skrivbordet återfanns dessutom ett handskrivet brev, vilket vid första anblick förefaller vara ett självmordsbrev. (Se fotografi — bevismaterial.)

Trots detta framstår flera detaljer på brottsplatsen som märkligt arrangerade, vilket väcker misstanke om att dödsfallet inte är fullt så enkelt som det först verkar.`,

    solutionText: `Sir Cedric Blackwood mördades av sin brorson Edmund Blackwood, som under en längre tid dragit på sig betydande skulder och såg sin farbror som sin sista möjlighet till ekonomisk räddning.

Utredningen tog en avgörande vändning när det framkom att Sir Blackwood var vänsterhänt. På både skrivbordet och i övriga delar av biblioteket återfanns personliga föremål konsekvent placerade till vänster om honom.

Trots detta återfanns revolvern intill offrets högra hand, och skottskadan tydde på att vapnet avfyrats från höger sida.

Det handskrivna självmordsbrevet visade dessutom tydliga tecken på att ha skrivits av någon som använt höger hand.

De övriga misstänkta hade alla arbetat eller levt nära Lord Blackwood under många års tid och kände väl till hans vänsterhänthet. Edmund däremot hade endast vistats i huset under en kortare period.

Sammantaget pekar bevisningen mot att brottsplatsen medvetet arrangerats för att efterlikna ett självmord.`,

    solutionClues: `• På flera fotografier syns att Sir Blackwood konsekvent använde vänster hand vid skrivande och tedrickande.

• På brottsplatsfotografiet återfanns revolvern placerad nära offrets högra hand trots att offret var vänsterhänt.

• Självmordsbrevet uppvisar tydliga drag av att ha skrivits av en högerhänt person.

• De övriga misstänkta hade känt Sir Blackwood i många år och var väl medvetna om hans vänsterhänthet.

• Edmund Blackwood hade endast vistats i huset under en kortare tid och saknade samma kännedom om offrets vanor.

• Som ända levade släktning, ärvde Edmund Blackwood naturligt sin farbrors förmögenhet.`,

    correctSuspectIndex: 1,

    suspects: [
      {
        id: 1,
        name: "Mr. Harry Hargreaves",
        age: "52 år",
        job: "Arbetat som butler för Cedric Blackwood i över tjugio år.",
        lifeSituation:
          "Aldrig gift, inga barn och bor i ett litet rum på nedre botten. Enda familjen är en sjuk syster i Brighton.",
        role: "Offrets butler",
        suspectImg: "LibraryMurder-SuspectOneImg.png",

        statement: `Jag befann mig i mitt rum större delen av aftonen, sir. På fredagar brukar jag erhålla några timmars ledighet.

I vanliga fall hade jag gått till den lokala puben, men sedan min syster insjuknade går större delen av min lön till hennes uppehälle.

Kriget har tagit både hennes son och make och nu är hon mycket sjuk.

Jag hade önskat flytta ned till Brighton för att finna arbete där och ta hand om henne, men sir Blackwood vägrar låta mig lämna min tjänst.

Utan ett ordentligt rekommendationsbrev från min arbetsgivare lär ingen vilja anställa mig.

Ja, det var jag som fann honom. Eftersom jag stannade inne, gick jag upp till biblioteket med en kopp te vid halv åtta.

Och där låg han redan död. Jag har inte hört något skott, men radion stod på större delen av eftermiddagen.`,

        inInvestigatorsNotes:
          "Mr. Hargreaves verkar skakad, men blir märkbart upprörd när samtalet kommer in på hans syster."
      },

      {
        id: 2,
        name: "Edmund Blackwood",
        age: "26 år",
        job: "Arbetslös",
        lifeSituation:
          "Rest och ägnat sig åt små försök till företag som inte lyckats. Bott hos sir Blackwood i tre veckor.",
        role: "Offrets brorson",
        suspectImg: "LibraryMurder-SuspectTwoImg.png",

        statement: `Jag tillbringade större delen av aftonen ute i staden. Jag kom till London för att undersöka några affärsmöjligheter och träffade därför ett par bekanta.

Farbror Cedric har varit vänlig nog att låta mig bo hos honom medan jag försöker etablera mig här.

Det som hänt är så tragiskt. Vi stod kanske inte varandra särskilt nära, men jag hade hoppats få lära känna honom bättre.

Farbror var trots allt en äldre man. Hans hälsa hade försämrats den senaste tiden och arbetet verkade vara det enda han levde för.

Som jag förstått det hade han blivit alltmer tillbakadragen under de senaste månaderna.

Som sagt var jag inte hemma när det hände. Jag befann mig på andra sidan London tillsammans med några vänner.

Personligen har jag svårt att tro att någon skulle vilja honom illa. Om ni frågar mig låter det hela mer som en tragisk olycka eller något han själv valt.`,

        inInvestigatorsNotes:
          "Edmund framstå som lugn och hjälpsam men svarar undvikande på frågor om vad för affärsmöjligheter han ville undersöka."
      },

      {
        id: 3,
        name: "Mrs. Beatrice Bloom",
        age: "61 år",
        job: "Arbetat som hushållerska hos sir Cedric Blackwood i över femtion år.",
        lifeSituation:
          "Änka, en vuxen dotter. Bosatt i en liten etta ett stenkast från brottsplatsen.",
        role: "Offrets hushållerska",
        suspectImg: "LibraryMurder-SuspectThreeImg.png",

        statement: `Jag förstår fortfarande inte varför jag behövde föras hit till polisstationen! Folk kommer börja tala, det är jag övertygad om.

Ja, Sir Cedric kunde stundtals vara en besvärlig herre att arbeta för, men det betyder inte att jag önskade livet ur honom.

Självmord? hm... det vet jag inget om. Men det måste ha varit så. Ingen ville honom illa.

Något skott hörde jag inte, nej. Men jag får medge att jag inte befann mig i huset under hela aftonen.

Vid halv sju höll jag på att förbereda kvällsmaten när jag råkade välta en hel kanna lingondricka över mina kläder.

Så mellan halv sju och åtta befann jag mig hemma för att byta om. Något jag skäms en aning över att behöva erkänna.`,

        inInvestigatorsNotes:
          "Mrs Bloom verkar mest irriterad och arg över att ha behövt komma ner till stationen."
      },

      {
        id: 4,
        name: "Sir Victor Hawthorne",
        age: "61 år",
        job: "Framstående affärsman",
        lifeSituation:
          "Boende i stor herrgård tillsammans med sin hustru och tjänstefolk. Flera vuxna barn och en handfull barnbarn.",
        role: "Offrets affärspartner",
        suspectImg: "LibraryMurder-Suspect-FourImg.png",

        statement: `Ja, det stämmer, konstapeln. Jag besökte Cedric tidigare under kvällen. Jag tittade förbi på väg hem från arbetet.

Ja, vi var i något av en konflikt. Cedric ville att vi skulle erbjuda arbete åt hans förbaskade brorson, och det hade jag inga som helst intentioner att gå med på.

Inte nog med att jag tvivlar starkt på att unge Edward någonsin utfört en ärlig dags arbete i hela sitt liv — det hade dessutom skapat problem inom firman.

Jag har nio barn, konstapeln. Tjugotvå barnbarn, varav åtminstone femton är i arbetsför ålder. Hur hade det sett ut om jag började dela ut tjänster enbart på grund av släktskap?

Firman hade gått under innan året var slut, och det sade jag också till Cedric.

Det var något som tyngde honom, men han insåg att jag hade rätt innan jag gick.`,

        inInvestigatorsNotes:
          "Affärspartnern framstår som samlad men mycket upprörd över sin kambrats plötsliga död."
      }
    ]
  }
,
{
  id: 2,

  level: "Svår",

  title: "Familjemiddagsmordet på Ravenshire Manor",

  shortSummary:
    "Under en till synes stillsam familjemiddag faller den yngsta dottern plötsligt död ner efter att ha druckit ur sitt vinglas.",

  victim: "Charlotte Ashbourne",

  victimAge: "23 år",

  victimJob: "Överklassdam",

  victimLifeSituation:
    "Yngsta dottern i familjen Ashbourne. Levde ett skyddat liv på Ravenshire Manor",

  victimImg: "FamilyDinnerMurder-VictimImg.png",

  place: "Offrets familjebostad - Ravenshire Manor.",

  causeOfDeath:
    "Akut arsenikförgiftning, stor dos som lätt till omedelbar död.",

  weapon:
    "Arsenik, rester av giftet återfinns i vinglaset.",

  crimeSceneImg: "FamilyDinnerMurder-CrimeScenImg.png",

  crimeSceneImgText:
    "Brottsplatsfotografi – Middagsbordet efter dödsfallet",

  clueImg: "FamilyDinnerMurder-FirstClueImg.png",

  clueImgText:
    "Fotografi från Charlottes sovrum",

  secondClueImg: "FamilyDinnerMurder-SecondClueImg.png",

  secondClueImgText:
    "Kravbrev hittat i brodern Jonathan Ashbournes tillhörigheter",

  crimeSceneDescription: `Den traditionella söndagsmiddagen hölls i den stora matsalen på Ravenshire Manor.

När huvudrätten serverades tog Charlotte Ashbourne några klunkar ur sitt vinglas innan hon plötsligt började hosta våldsamt och föll ihop över bordet.

Familjens läkare anlände kort därefter och kunde endast konstatera att den unga kvinnan redan var avliden.

Vid senare undersökning återfanns tydliga spår av arsenik i offrets vinglas. Inga övriga glas eller maträtter visade däremot tecken på förgiftning.

Vid middagsbordet befann sig offrets föräldrar, hennes två systrar, brodern Jonathan Ashbourne, Charlottes fästman Thomas Fairford samt systern Helenas fästman Julian Pembroke, som anlände sent till middagen.

Trots familjens försök att beskriva relationerna som goda framkommer det snabbt under förhören att flera familjemedlemmar hyst stark bitterhet gentemot Charlotte under en längre tid.`,

  solutionText: `Charlotte Ashbourne mördades av sin syster Helena Ashbourne.

Under större delen av sitt liv hade Helena levt i skuggan av sin yngre syster, som ständigt behandlades som familjens favorit.

När Charlotte dessutom planerade att lämna Ravenshire Manor med Helenas fästman, stod hon inte ut längre.

Det visade sig att Helena tillförskaffat sig Arsenik nere i staden några veckor tidigare.

Pulvret gömdes i hennes ring och kunde enkelt släppas ner i systerns glas utan att någon märkte de när hon gick förbi.

Under det avslutande förhöret bröt Helena slutligen samman och erkände mordet.`,

  solutionClues: `• Ett fotografi på Charlottes sovrum sängbord föreställer en mörkhårig man, men hennes fästman var tydligt rödhårig

• På samma bild framstår en resväska, offret hade tänkt rymma med sin systers fästman

• Den ända som gick upp under middagen var Helena.

• På Förhörsfotot syns Helena med en större berlockring, där giftet försvarats.

• Brodern hade mycket riktigt skulder, men inget som löstet av sin systers död.`,

  correctSuspectIndex: 1,

  suspects: [
    {
      id: 1,

      name: "Jonathan Ashbourne",

      age: "31 år",

      job: "Arvtagare",

      lifeSituation:
        "Spelberoende och svårt skuldsatt efter flera misslyckade investeringar.",

      role: "Offrets äldre broder",

      suspectImg: "FamilyDinnerMurder-SuspectOneImg.png",

      statement: `Charlotte och jag stod aldrig varandra särskilt nära.

Hon var yngst och kom undan med precis allting.

Mor avgudade henne och far behandlade henne som om hon vore någon sorts prinsessa.

Jag vill inte ens veta hur mycket pengar som lagts på hennes nöjen genom åren.

Men tro inte att det betyder att jag önskade henne död.

Mina föräldrar är gamla och redan svaga. Det här kommer ta livet av dem.

Jag reste mig aldrig från bordet under middagen och jag rörde aldrig hennes glas.

Och ja, jag spelar ibland. Men spelare och mördare är inte samma sak, konstapeln.`,

      inInvestigatorsNotes:
        "Jonathan uppträder arrogant men skakad."
    },

    {
      id: 2,

      name: "Helena Ashbourne",

      age: "27 år",

      job: "Överklassdam",

      lifeSituation:
        "Bor fortfarande kvar på familjens herrgård och lever under sin fars strikta kontroll.",

      role: "Offrets äldre syster",

      suspectImg: "FamilyDinnerMurder-SuspectTwoImg.png",

      statement: `Charlotte hade ett märkligt sätt att få hela världen att kretsa kring henne.

Vi hade våra meningsskiljaktigheter men det fanns ingen anledning för mig att önska henne död.

Vi är båda trolovade och det var bara en tidsfråga innan vi båda gifte oss och flyttade ut.

Ja, jag gick bort mot serveringsbordet under middagen men endast för att hämta mer vin.

Jag gick förbi Charlotte men jag gick förbi halva bordet. Det är så fruktansvärt alltsammans.

Allting gick så fort. Jag drog inte jämt med henne men hon var ändå min syster.`,

      inInvestigatorsNotes:
        "Helena framstår som nedstämd och ledsen. Hon torkar några tårar och snurrar nervöst på sina ringar."
    },

    {
      id: 3,

      name: "Thomas Fairford",

      age: "29 år",

      job: "Banktjänsteman",

      lifeSituation:
        "Förlovad med Charlotte Ashbourne men relationen beskrivs som turbulent av flera familjemedlemmar.",

      role: "Offrets Fästmannen",

      suspectImg: "FamilyDinnerMurder-SuspectThreeImg.png",

      statement: `Charlotte och jag planerade att gifta oss innan årets slut.

Åtminstone var det planen.

Vi har haft våra gräl den senaste tiden men jag älskade henne verkligen.

Jag satt intill henne under hela middagen och jag såg ingen röra hennes glas.

Men sådant är kanske heller inget man lägger märke till under en vanlig familjemiddag.

Jag vet bara att hon plötsligt började hosta och sedan… sedan var hon borta.

Jag skulle aldrig kunna skada Charlotte. Aldrig. Jag har älskat henne så länge jag kan minnas.`,

      inInvestigatorsNotes:
        "Thomas verkar uppriktigt förtvuivvlad, men förklarar hans relation med offret i mycket ljusare syn än alla andra förhörda."
    },

    {
      id: 4,

      name: "Margaret Ashbourne",

      age: "35 år",

      job: "Överklassdam",

      lifeSituation:
        "Äldsta systern i familjen. Ogift och fungerar ofta som medlare mellan familjemedlemmarna.",

      role: "Offrets äldsta syster",

      suspectImg: "FamilyDinnerMurder-SuspectFourImg.png",

      statement: `Jag vill bara att det här skall vara över.

Charlotte kunde vara svår ibland men hon förtjänade inte detta.

Bortskämd? Ja, kanske.

Men det var mer mors och fars fel än hennes.

Jag såg Helena lämna bordet under middagen. Hon sade att hon skulle hämta mer vin eller något av det slaget.

Förstå mig rätt kommisarien, jag älskade min syster så som man skall älska en syster.

Men hon älskade dramatik. Det vardagliga gav henne tristess och hon var mycket ... hennes känslor var på utsidan.

Hon älskade Shakespeare... Det hade inte förvånat mig om hon iscensatt det hela själv.`,

      inInvestigatorsNotes:
        "Margaret verkar nervös men hennes berättelse förblir konsekvent genom hela utredningen."
    }
  ]
}

,
{
  id: 3,

  title: "Mysteriet på nattåget till Edinburgh",

  level: "Lätt",

  shortSummary:
    "En man återfinns död i en tågkupé under nattresan mellan London och Edinburgh.",

  victim: "Arthur Miller",

  victimAge: "43 år",

  victimJob: "Butiksbiträde i bokhandel",

  victimLifeSituation:
    "Levde ensam i en mindre enrummare utanför London. Hade få nära relationer och mycket begränsad ekonomi.",

  victimImg: "NightTrainMurder-VictimImg.png",

  crimeSceneImg: "NightTrainMurder-CrimeScenImg.png",

  crimeSceneImgText:
    "Brottsplatsfotografi – Förstaklasskupén",

  clueImg: "NightTrainMurder-ClueOneImg.png",

  clueImgText:
    "Innehållet i offrets väska",

  secondClueImg: "NightTrainMurder-ClueTwoImg.png",

  secondClueImgText:
    "Medicinsk handling hittas på offrets köksbord",

  place:
    "Brottet ägde rum i förstaklasskupé på ett rörandes nattåg.",

  causeOfDeath:
    "Andningsstillestånd orsakat av en kraftig överdos av morfinbaserat medel.",

  weapon:
    "Injektionsspruta återfunnen på golvet i kupen (se brottsplatsbild).",

  crimeSceneDescription: `Arthur Miller påträffades död strax före gryningen av konduktören under nattågets färd mot Edinburgh.

Kupédörren hade varit låst från insidan större delen av natten och inga vittnen hade sett någon lämna eller beträda kupén efter att tåget lämnat London.

Endast tre andra personer befann sig i förstaklasskupén under resan.

Offret satt tillbakalutad i sin sittplats och såg vid första anblick ut att ha somnat. Först när konduktören försökte väcka mannen upptäcktes att han var avliden.

En mindre injektionsspruta återfanns i samband med detta på golvet. På offrets högra arm kunde dessutom ett mindre stickmärke observeras.

Trots den ovanliga situationen återfanns inga tydliga tecken på kamp eller våld inne i kupén.

Flera passagerare uppgav däremot att offret under kvällen luktat kraftigt av alkohol och verkat ovanligt avslappnad trots sin enkla klädsel och det dyra resesällskapet.`,

  solutionText: `Arthur Miller mördades inte av någon av de övriga passagerarna. Mannen tog sitt eget liv någon gång under natten.

Utredningen tog en avgörande vändning när polisens läkare kunde koppla den återfunna sprutan till ett kraftigt morfinbaserat läkemedel.

Vid vidare undersökning framkom att Arthur Miller endast två veckor tidigare diagnostiserats med en dödlig sjukdom och enligt läkarna hade mycket kort tid kvar att leva.

I offrets bagage återfanns både medicinska dokument och smärtstillande preparat utskrivna i hans eget namn.

Arthur Miller var dessutom känd av sin arbetsgivare som en stor beundrare av kriminalromaner och verkliga mordutredningar.

Polisen drog därför slutsatsen att mannen medvetet iscensatt sin egen död som ett till synes omöjligt mord ombord på nattåget.

Efter att de övriga passagerarna somnat injicerade han själv läkemedlet, dolde sprutan under sätet och inväntade därefter döden.`,

  solutionClues: `• En medicinsk spruta återfanns på golvet intill offret.

• Ett läkarintyg återfanns bland offrets tillhörigheter som visade att han led av obotlig cancer.

• Offret reste ensam i en förstaklasskupé trots att han vid första anblick verkade vara en man med mycket begränsade tillgångar.

• På fotografiet av offrets resväska syns endast ett fåtal ägodelar: en dyr flaska whisky, flera kriminalromaner, mediciner samt ett mycket litet antal mynt.

• Väskan var ovanligt sparsamt packad för en längre resa.`,

  correctSuspectIndex: 4,

  suspects: [
    {
      id: 1,

      name: "Lady Eleanor Winchester",

      age: "58 år",

      job: "Överklassdam",

      lifeSituation:
        "Tillhör en gammal aristokratisk familj och reser regelbundet mellan London och Edinburgh för att besöka släktingar.",

      role: "Passagerare i kupén",

      suspectImg: "NightTrainMurder-SuspectOneImg.png",

      statement: `Jag reste till Edinburgh med min jungfru för att besöka min syster. En resa jag gör några gånger om året.

Den döde mannen? Jag har aldrig sätt honom innan. Men det må jag säga, när man köper en förstaklasskupe och får sitta med en alkoliserad slusk!

Jag har då aldrig varit med om maken!

Jag sittades och sova? Nej, konstapeln. Sådant må andra människor ägna sig åt. Jag vilade möjligen ögonen en stund.

Dessutom har jag mycket ont i min rygg och att sitta länge gör det mycket värre.`,

      inInvestigatorsNotes:
        "Lady Eleanor uppträder kyligt och tycks bli mycket arg över att bara tänka på offret."
    },

    {
      id: 2,

      name: "Clara Bennett",

      age: "21 år",

      job: "Jungfru till lady Elenore",

      lifeSituation:
        "Arbetar sedan ett år tillbaka åt Lady Eleanor Whitmore. Kommer ursprungligen från Brighton.",

      role: "Passagerare i kupén",

      suspectImg: "NightTrainMurder-SuspectTwoImg.png",

      statement: `Nej jag har aldrig sett mannen förut. Inte vad jag minst i alla fall. Han luktade väldigt starkt redan när vi klev in i kupen.

Jag talade aldrig med honom, jag hörd Lady Elenore säga något bryskt men hörde inte vad.

Han var full men verkade mycket trött och stälde inte till bekymer.

Lady Eleanor sade åt mig att försöka sova eftersom vi hade en lång resa framför oss. Men jag tror hon somnade förre mig.

Jag gav henne en tablett emot ryggen, och det brukar få henne att dosa av. Vad? Morfin tror jag det heter.`,

      inInvestigatorsNotes:
        "Clara verkar nervös och aningen blyg, men svarar villigt på alla frågor."
    },

    {
      id: 3,

      name: "Harold Finch",

      age: "71 år",

      job: "Pensionerad handelsman",

      lifeSituation:
        "Änkeman och pensionerad köpman. Bor ensam i utkanten av Edinburgh.",

      role: "Passagerare i kupén",

      suspectImg: "NightTrainMurder-SuspectThreeImg.png",

      statement: `Va? Ni får tala högre, konstapeln. Hörseln är inte vad den en gång var.

Jag sov större delen av resan, precis som jag alltid gör på tåg.

Oberörd? Nej då, men när man nått min ålder är det inte mycket som längre förvånar en.

Jag har överlevt två krig och fyrtio års äktenskap. Då lär man sig hålla huvudet kallt.

I London besökte jag en gammal vän från ungdomens dagar. Vi gick i skolan tillsammans.

Nej, jag kände inte den döde mannen och inte någon av de båda kvinnorna heller.`,

      inInvestigatorsNotes:
        "Harold Finch framstår som ovanligt lugn men hans berättelse innehåller inga tydliga motsägelser."
    },

    {
      id: 4,

      name: "Dr. Charles Mortimer",

      age: "34 år",

      job: "Läkare",

      lifeSituation:
        "Gift och far till tre barn. Har praktiserat som läkare i sju år. Känd som ordningsam och har aldrig tidigare varit i kontakt med polisen.",

      role: "Offrets läkare",

      suspectImg: "NightTrainMurder-SuspectFourImg.png",

      statement: `Ja, det stämmer, konstapeln. Jag var Arthur Millers läkare, även om jag inte behandlat honom särskilt länge.

Mr Miller sökte först vård för återkommande buksmärtor. Efter mina inledande undersökningar remitterade jag honom vidare till en specialistklinik i London.

Det visade sig dessvärre att han led av långt framskriden cancer.

Sjukdomen hade redan gått mycket långt och läkarna gav honom endast en kort tid kvar att leva.

Ja, jag skrev ut både smärtstillande tabletter och morfininjektioner för att hjälpa honom hantera smärtorna.

Men jag försäkrar er, konstapeln, att all medicinering skedde helt enligt medicinska rekommendationer för patienter i hans tillstånd.

Det är en fruktansvärd tragedi alltihop.`,

      inInvestigatorsNotes:
        "Dr. Charles Mortimer framstår som uppriktigt förfärad över vad som inträffat. Under förhöret uppträder han nervöst men samarbetsvilligt och inga tydliga motsägelser framkommer."
    }
  ]
}

];