import { GraphQLResult } from '@aws-amplify/api';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Tone from 'tone';

import { callGraphQL } from '../../api';
import { CreateTrackMutation, ListTracksQuery } from '../../api/API';
import { listTracks } from '../../api/graphql/queries';
import { Button } from '../../components';
import Fourier from '../instruments/Fourier';
import { AppContext, Types } from './State';

const Container = styled.div(
    () => `       
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 20px;
        background: rgba(30, 30, 30, 1);
    `,
);

const TracksWrap = styled.div(
    () => `       
      width: 20%;
  `,
);

const TrackRow = styled.div(
    () => `       
      color: white;
      padding: 20px;
      cursor: pointer;
  `,
);

interface ITrack {
    id: string;
    name: string;
}

function mapTracksQuery(
    listTracksQuery: GraphQLResult<ListTracksQuery>,
): ITrack[] {
    return (
        listTracksQuery.data?.listTracks?.items?.map(
            (track) =>
                ({
                    id: track?.id,
                    name: track?.name,
                } as ITrack),
        ) || []
    );
}

const Hub = (): React.ReactElement => {
    const { state, dispatch } = useContext(AppContext);
    const [tracks, setTracks] = useState<ITrack[]>([]);
    const history = useHistory();

    useEffect(() => {
        async function getTracks() {
            try {
                const returnedData = await callGraphQL<ListTracksQuery>(
                    listTracks,
                );
                setTracks(mapTracksQuery(returnedData));
            } catch (error) {
                console.error('Error fetching tracks', error);
            }
        }
        getTracks();
    }, []);

    const createNewTrack = async () => {
        try {
            const returnedData = await callGraphQL<ListTracksQuery>(listTracks);
            setTracks(mapTracksQuery(returnedData));
        } catch (error) {
            console.error('Error fetching todos', error);
        }
    };

const selectTrack = (trackID: string | undefined) => {
      
        dispatch({
          type: Types.Load,
          payload: {
            trackID
          }
        })
        history.push('/track');
        Tone.start();
    };

    return (
        <Container>
            <TracksWrap>
                <Button onClick={createNewTrack} size="large" color="primary">
                    Start New Track
                </Button>
                {tracks.map((track) => (
                    <TrackRow
                        key={track.id}
                        onClick={() => selectTrack(track.id)}
                    >
                        {track.name}
                    </TrackRow>
                ))}
            </TracksWrap>

            <Fourier />
        </Container>
    );
};

export default Hub;
