import * as types from '../ActionTypes'

export const exampleRequested = () => ({
    type: types.EXAMPLE_REQUESTED
});
export const exampleSucceeded = (data: any) => ({
    type: types.EXAMPLE_SUCCEEDED,
    payload: data
});
export const exampleFailed = (error: any) => ({
    type: types.EXAMPLE_FAILED,
    payload: error
});