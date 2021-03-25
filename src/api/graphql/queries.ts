/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrack = /* GraphQL */ `
  query GetTrack($id: ID!) {
    getTrack(id: $id) {
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
export const listTracks = /* GraphQL */ `
  query ListTracks(
    $filter: ModelTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        currentDrumBank
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDrumBank = /* GraphQL */ `
  query GetDrumBank($id: ID!) {
    getDrumBank(id: $id) {
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
export const listDrumBanks = /* GraphQL */ `
  query ListDrumBanks(
    $filter: ModelDrumBankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrumBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        trackID
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDrum = /* GraphQL */ `
  query GetDrum($id: ID!) {
    getDrum(id: $id) {
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
export const listDrums = /* GraphQL */ `
  query ListDrums(
    $filter: ModelDrumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        drumBankID
        name
        type
        source
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
