import { demoCases } from "./demoCases";

const DEMO_QUESTS_KEY = "demoQuests";

export function getDemoQuests() {
  return JSON.parse(localStorage.getItem(DEMO_QUESTS_KEY)) || [];
}

export function saveDemoQuests(quests) {
  localStorage.setItem(DEMO_QUESTS_KEY, JSON.stringify(quests));
}

export function acceptDemoQuest(caseId) {
  const quests = getDemoQuests();

  const alreadyAccepted = quests.find(
    (q) => q.caseId === Number(caseId)
  );

  if (alreadyAccepted) {
    return alreadyAccepted;
  }

  const newQuest = {
    id: Date.now(),
    caseId: Number(caseId),
    status: "Accepted",
    result: "None",
    accusedSuspectIndex: null
  };

  const updatedQuests = [...quests, newQuest];
  saveDemoQuests(updatedQuests);

  return newQuest;
}

export function accuseDemoQuest(questId, suspectIndex) {
  const quests = getDemoQuests();

  const quest = quests.find((q) => q.id === Number(questId));
  const murderCase = demoCases.find((c) => c.id === quest.caseId);

  const isCorrect =
    murderCase.correctSuspectIndex === Number(suspectIndex);

  quest.status = "Completed";
  quest.result = isCorrect ? "Solved" : "Failed";
  quest.accusedSuspectIndex = Number(suspectIndex);

  saveDemoQuests(quests);

  return {
    isCorrect,
    resultMessage: isCorrect
      ? "Scotland Yard godkänner din slutsats."
      : "Scotland Yard avvisar din slutsats.",
    theEndText: murderCase.solutionText,
    clueText: murderCase.solutionClues
  };
}