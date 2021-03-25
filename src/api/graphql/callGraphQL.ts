import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

export interface GraphQLOptions {
    id?: string;
    input?: Record<string, unknown>;
    filter?: Record<string, unknown>;
    sort?: Record<string, unknown>;
    limit?: number;
    variables?: Record<string, unknown>;
    authMode?: GRAPHQL_AUTH_MODE;
}

async function callGraphQL<T>(
    query: any,
    options?: GraphQLOptions,
): Promise<GraphQLResult<T>> {
    return (await API.graphql(
        graphqlOperation(query, options),
    )) as GraphQLResult<T>;
}

export default callGraphQL;
