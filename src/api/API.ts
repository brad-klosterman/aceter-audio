/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTrackInput = {
  id?: string | null,
  name: string,
  settings?: TrackSettingsInput | null,
  currentDrumBank?: string | null,
  sequencer?: MatrixInput | null,
};

export type TrackSettingsInput = {
  bpm: number,
  volume: number,
};

export type MatrixInput = {
  kick?: Array< boolean | null > | null,
  sub?: Array< boolean | null > | null,
  snare?: Array< boolean | null > | null,
  clap?: Array< boolean | null > | null,
  hiHat?: Array< boolean | null > | null,
  openHiHat?: Array< boolean | null > | null,
};

export type ModelTrackConditionInput = {
  name?: ModelStringInput | null,
  currentDrumBank?: ModelIDInput | null,
  and?: Array< ModelTrackConditionInput | null > | null,
  or?: Array< ModelTrackConditionInput | null > | null,
  not?: ModelTrackConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Track = {
  __typename: "Track",
  id?: string,
  name?: string,
  settings?: TrackSettings,
  drumBanks?: ModelDrumBankConnection,
  currentDrumBank?: string | null,
  sequencer?: Matrix,
  createdAt?: string,
  updatedAt?: string,
};

export type TrackSettings = {
  __typename: "TrackSettings",
  bpm?: number,
  volume?: number,
};

export type ModelDrumBankConnection = {
  __typename: "ModelDrumBankConnection",
  items?:  Array<DrumBank | null > | null,
  nextToken?: string | null,
};

export type DrumBank = {
  __typename: "DrumBank",
  id?: string,
  trackID?: string,
  name?: string | null,
  drums?: ModelDrumConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelDrumConnection = {
  __typename: "ModelDrumConnection",
  items?:  Array<Drum | null > | null,
  nextToken?: string | null,
};

export type Drum = {
  __typename: "Drum",
  id?: string,
  drumBankID?: string,
  name?: string | null,
  type?: DrumType,
  source?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export enum DrumType {
  oscillator = "oscillator",
  sample = "sample",
}


export type Matrix = {
  __typename: "Matrix",
  kick?: Array< boolean | null > | null,
  sub?: Array< boolean | null > | null,
  snare?: Array< boolean | null > | null,
  clap?: Array< boolean | null > | null,
  hiHat?: Array< boolean | null > | null,
  openHiHat?: Array< boolean | null > | null,
};

export type UpdateTrackInput = {
  id: string,
  name?: string | null,
  settings?: TrackSettingsInput | null,
  currentDrumBank?: string | null,
  sequencer?: MatrixInput | null,
};

export type DeleteTrackInput = {
  id?: string | null,
};

export type CreateDrumBankInput = {
  id?: string | null,
  trackID: string,
  name?: string | null,
};

export type ModelDrumBankConditionInput = {
  trackID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDrumBankConditionInput | null > | null,
  or?: Array< ModelDrumBankConditionInput | null > | null,
  not?: ModelDrumBankConditionInput | null,
};

export type UpdateDrumBankInput = {
  id: string,
  trackID?: string | null,
  name?: string | null,
};

export type DeleteDrumBankInput = {
  id?: string | null,
};

export type CreateDrumInput = {
  id?: string | null,
  drumBankID: string,
  name?: string | null,
  type: DrumType,
  source?: string | null,
};

export type ModelDrumConditionInput = {
  drumBankID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelDrumTypeInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelDrumConditionInput | null > | null,
  or?: Array< ModelDrumConditionInput | null > | null,
  not?: ModelDrumConditionInput | null,
};

export type ModelDrumTypeInput = {
  eq?: DrumType | null,
  ne?: DrumType | null,
};

export type UpdateDrumInput = {
  id: string,
  drumBankID?: string | null,
  name?: string | null,
  type?: DrumType | null,
  source?: string | null,
};

export type DeleteDrumInput = {
  id?: string | null,
};

export type ModelTrackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  currentDrumBank?: ModelIDInput | null,
  and?: Array< ModelTrackFilterInput | null > | null,
  or?: Array< ModelTrackFilterInput | null > | null,
  not?: ModelTrackFilterInput | null,
};

export type ModelTrackConnection = {
  __typename: "ModelTrackConnection",
  items?:  Array<Track | null > | null,
  nextToken?: string | null,
};

export type ModelDrumBankFilterInput = {
  id?: ModelIDInput | null,
  trackID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDrumBankFilterInput | null > | null,
  or?: Array< ModelDrumBankFilterInput | null > | null,
  not?: ModelDrumBankFilterInput | null,
};

export type ModelDrumFilterInput = {
  id?: ModelIDInput | null,
  drumBankID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelDrumTypeInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelDrumFilterInput | null > | null,
  or?: Array< ModelDrumFilterInput | null > | null,
  not?: ModelDrumFilterInput | null,
};

export type CreateTrackMutationVariables = {
  input?: CreateTrackInput,
  condition?: ModelTrackConditionInput | null,
};

export type CreateTrackMutation = {
  createTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTrackMutationVariables = {
  input?: UpdateTrackInput,
  condition?: ModelTrackConditionInput | null,
};

export type UpdateTrackMutation = {
  updateTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTrackMutationVariables = {
  input?: DeleteTrackInput,
  condition?: ModelTrackConditionInput | null,
};

export type DeleteTrackMutation = {
  deleteTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDrumBankMutationVariables = {
  input?: CreateDrumBankInput,
  condition?: ModelDrumBankConditionInput | null,
};

export type CreateDrumBankMutation = {
  createDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDrumBankMutationVariables = {
  input?: UpdateDrumBankInput,
  condition?: ModelDrumBankConditionInput | null,
};

export type UpdateDrumBankMutation = {
  updateDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDrumBankMutationVariables = {
  input?: DeleteDrumBankInput,
  condition?: ModelDrumBankConditionInput | null,
};

export type DeleteDrumBankMutation = {
  deleteDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDrumMutationVariables = {
  input?: CreateDrumInput,
  condition?: ModelDrumConditionInput | null,
};

export type CreateDrumMutation = {
  createDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDrumMutationVariables = {
  input?: UpdateDrumInput,
  condition?: ModelDrumConditionInput | null,
};

export type UpdateDrumMutation = {
  updateDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDrumMutationVariables = {
  input?: DeleteDrumInput,
  condition?: ModelDrumConditionInput | null,
};

export type DeleteDrumMutation = {
  deleteDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTrackQueryVariables = {
  id?: string,
};

export type GetTrackQuery = {
  getTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTracksQueryVariables = {
  filter?: ModelTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTracksQuery = {
  listTracks?:  {
    __typename: "ModelTrackConnection",
    items?:  Array< {
      __typename: "Track",
      id: string,
      name: string,
      currentDrumBank?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDrumBankQueryVariables = {
  id?: string,
};

export type GetDrumBankQuery = {
  getDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDrumBanksQueryVariables = {
  filter?: ModelDrumBankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDrumBanksQuery = {
  listDrumBanks?:  {
    __typename: "ModelDrumBankConnection",
    items?:  Array< {
      __typename: "DrumBank",
      id: string,
      trackID: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDrumQueryVariables = {
  id?: string,
};

export type GetDrumQuery = {
  getDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDrumsQueryVariables = {
  filter?: ModelDrumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDrumsQuery = {
  listDrums?:  {
    __typename: "ModelDrumConnection",
    items?:  Array< {
      __typename: "Drum",
      id: string,
      drumBankID: string,
      name?: string | null,
      type: DrumType,
      source?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnUpdateTrackIDSubscriptionVariables = {
  id?: string,
};

export type OnUpdateTrackIDSubscription = {
  onUpdateTrackID?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTrackSubscription = {
  onCreateTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTrackSubscription = {
  onUpdateTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTrackSubscription = {
  onDeleteTrack?:  {
    __typename: "Track",
    id: string,
    name: string,
    settings?:  {
      __typename: "TrackSettings",
      bpm: number,
      volume: number,
    } | null,
    drumBanks?:  {
      __typename: "ModelDrumBankConnection",
      nextToken?: string | null,
    } | null,
    currentDrumBank?: string | null,
    sequencer?:  {
      __typename: "Matrix",
      kick?: Array< boolean | null > | null,
      sub?: Array< boolean | null > | null,
      snare?: Array< boolean | null > | null,
      clap?: Array< boolean | null > | null,
      hiHat?: Array< boolean | null > | null,
      openHiHat?: Array< boolean | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDrumBankSubscription = {
  onCreateDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDrumBankSubscription = {
  onUpdateDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDrumBankSubscription = {
  onDeleteDrumBank?:  {
    __typename: "DrumBank",
    id: string,
    trackID: string,
    name?: string | null,
    drums?:  {
      __typename: "ModelDrumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDrumSubscription = {
  onCreateDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDrumSubscription = {
  onUpdateDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDrumSubscription = {
  onDeleteDrum?:  {
    __typename: "Drum",
    id: string,
    drumBankID: string,
    name?: string | null,
    type: DrumType,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
