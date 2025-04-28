import { createSlice } from "@reduxjs/toolkit";

interface ModelState {
    isOpen: boolean;
}

const initialState: ModelState = {
    isOpen: false,
}

const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { toggleModal } = modelSlice.actions
export default modelSlice.reducer