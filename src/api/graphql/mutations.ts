/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrack = /* GraphQL */ `
  mutation CreateTrack(
    $input: CreateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    createTrack(input: $input, condition: $condition) {
      id
      name
      settings {
        bpm
        volume
      }
      drumBanks {
        nextToken
      }
      currentDrumBank
      sequencer {
        kick
        sub
        snare
        clap
        hiHat
        openHiHat
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTrack = /* GraphQL */ `
  mutation UpdateTrack(
    $input: UpdateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    updateTrack(input: $input, condition: $condition) {
      id
      name
      settings {
        bpm
        volume
      }
      drumBanks {
        nextToken
      }
      currentDrumBank
      sequencer {
        kick
        sub
        snare
        clap
        hiHat
        openHiHat
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTrack = /* GraphQL */ `
  mutation DeleteTrack(
    $input: DeleteTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    deleteTrack(input: $input, condition: $condition) {
      id
      name
      settings {
        bpm
        volume
      }
      drumBanks {
        nextToken
      }
      currentDrumBank
      sequencer {
        kick
        sub
        snare
        clap
        hiHat
        openHiHat
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDrumBank = /* GraphQL */ `
  mutation CreateDrumBank(
    $input: CreateDrumBankInput!
    $condition: ModelDrumBankConditionInput
  ) {
    createDrumBank(input: $input, condition: $condition) {
      id
      trackID
      name
      drums {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDrumBank = /* GraphQL */ `
  mutation UpdateDrumBank(
    $input: UpdateDrumBankInput!
    $condition: ModelDrumBankConditionInput
  ) {
    updateDrumBank(input: $input, condition: $condition) {
      id
      trackID
      name
      drums {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDrumBank = /* GraphQL */ `
  mutation DeleteDrumBank(
    $input: DeleteDrumBankInput!
    $condition: ModelDrumBankConditionInput
  ) {
    deleteDrumBank(input: $input, condition: $condition) {
      id
      trackID
      name
      drums {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDrum = /* GraphQL */ `
  mutation CreateDrum(
    $input: CreateDrumInput!
    $condition: ModelDrumConditionInput
  ) {
    createDrum(input: $input, condition: $condition) {
      id
      drumBankID
      name
      type
      source
      createdAt
      updatedAt
    }
  }
`;
export const updateDrum = /* GraphQL */ `
  mutation UpdateDrum(
    $input: UpdateDrumInput!
    $condition: ModelDrumConditionInput
  ) {
    updateDrum(input: $input, condition: $condition) {
      id
      drumBankID
      name
      type
      source
      createdAt
      updatedAt
    }
  }
`;
export const deleteDrum = /* GraphQL */ `
  mutation DeleteDrum(
    $input: DeleteDrumInput!
    $condition: ModelDrumConditionInput
  ) {
    deleteDrum(input: $input, condition: $condition) {
      id
      drumBankID
      name
      type
      source
      createdAt
      updatedAt
    }
  }
`;
