import { demoCases } from "./demoCases";

export function getAllCases() {
  return demoCases;
}

export function getCaseById(id) {
  return demoCases.find(c => c.id === Number(id));
}