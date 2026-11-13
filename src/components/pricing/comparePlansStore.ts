import { useSyncExternalStore } from 'react';

interface CompareState {
  selectedPlanIds: string[];
  maxLimitWarning: boolean;
  attemptedFourthPlanId: string | null;
  showDifferencesOnly: boolean;
}

let state: CompareState = {
  selectedPlanIds: [],
  maxLimitWarning: false,
  attemptedFourthPlanId: null,
  showDifferencesOnly: false,
};

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export function toggleComparePlan(planId: string): boolean {
  const exists = state.selectedPlanIds.includes(planId);
  if (exists) {
    state = {
      ...state,
      selectedPlanIds: state.selectedPlanIds.filter((id) => id !== planId),
      maxLimitWarning: false,
      attemptedFourthPlanId: null,
    };
    emitChange();
    return true;
  }

  if (state.selectedPlanIds.length >= 3) {
    state = {
      ...state,
      maxLimitWarning: true,
      attemptedFourthPlanId: planId,
    };
    emitChange();
    return false;
  }

  state = {
    ...state,
    selectedPlanIds: [...state.selectedPlanIds, planId],
    maxLimitWarning: false,
    attemptedFourthPlanId: null,
  };
  emitChange();
  return true;
}

export function clearComparePlans(): void {
  state = {
    ...state,
    selectedPlanIds: [],
    maxLimitWarning: false,
    attemptedFourthPlanId: null,
  };
  emitChange();
}

export function dismissMaxLimitWarning(): void {
  if (!state.maxLimitWarning) return;
  state = {
    ...state,
    maxLimitWarning: false,
    attemptedFourthPlanId: null,
  };
  emitChange();
}

export function setShowDifferencesOnly(value: boolean): void {
  state = {
    ...state,
    showDifferencesOnly: value,
  };
  emitChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): CompareState {
  return state;
}

export function useComparePlansStore(): CompareState {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
