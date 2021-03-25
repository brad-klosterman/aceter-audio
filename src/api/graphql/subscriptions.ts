/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateTrackID = /* GraphQL */ `
  subscription OnUpdateTrackID($id: ID!) {
    onUpdateTrackID(id: $id) {
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
export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack {
    onCreateTrack {
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
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack {
    onUpdateTrack {
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
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack {
    onDeleteTrack {
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
export const onCreateDrumBank = /* GraphQL */ `
  subscription OnCreateDrumBank {
    onCreateDrumBank {
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
export const onUpdateDrumBank = /* GraphQL */ `
  subscription OnUpdateDrumBank {
    onUpdateDrumBank {
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
export const onDeleteDrumBank = /* GraphQL */ `
  subscription OnDeleteDrumBank {
    onDeleteDrumBank {
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
export const onCreateDrum = /* GraphQL */ `
  subscription OnCreateDrum {
    onCreateDrum {
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
export const onUpdateDrum = /* GraphQL */ `
  subscription OnUpdateDrum {
    onUpdateDrum {
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
export const onDeleteDrum = /* GraphQL */ `
  subscription OnDeleteDrum {
    onDeleteDrum {
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
