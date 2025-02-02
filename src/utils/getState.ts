import { DelegationState } from "@/app/types/delegationState";

// Convert state to human readable format
export const getState = (state: string) => {
  switch (state) {
    case DelegationState.ACTIVE:
      return "Active";
    case DelegationState.UNBONDING_REQUESTED:
      return "Unbonding Requested";
    case DelegationState.UNBONDING:
      return "Unbonding";
    case DelegationState.UNBONDED:
      return "Unbonded";
    case DelegationState.WITHDRAWN:
      return "Withdrawn";
    case DelegationState.PENDING:
      return "Pending";
    case DelegationState.OVERFLOW:
      return "Overflow";
    case DelegationState.EXPIRED:
      return "Expired";
    // Intermediate local storage states
    case DelegationState.INTERMEDIATE_UNBONDING:
      return "Unbonding";
    case DelegationState.INTERMEDIATE_WITHDRAWAL:
      return "Withdrawing";
    default:
      return "Unknown";
  }
};

// Create state tooltips for the additional information
export const getStateTooltip = (state: string) => {
  switch (state) {
    case DelegationState.ACTIVE:
      return "Stake is active";
    case DelegationState.UNBONDING_REQUESTED:
      return "Unbonding requested";
    case DelegationState.UNBONDING:
      return "Unbonding process of 10 days has started";
    case DelegationState.UNBONDED:
      return "Stake has been unbonded";
    case DelegationState.WITHDRAWN:
      return "Stake has been withdrawn";
    // TODO  Add the x/6 that we had before?
    case DelegationState.PENDING:
      return "Stake has not received sufficient confirmations";
    case DelegationState.OVERFLOW:
      return "Stake is over the staking cap";
    case DelegationState.EXPIRED:
      return "Stake timelock has expired";
    // Intermediate local storage states
    case DelegationState.INTERMEDIATE_UNBONDING:
      return "Stake is unbonding";
    case DelegationState.INTERMEDIATE_WITHDRAWAL:
      return "Stake is withdrawing";
    default:
      return "Unknown";
  }
};
