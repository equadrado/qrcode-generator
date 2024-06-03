import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, qrcodeGeneratorKey } from './qrcode.reducer';

export const getState = createFeatureSelector<State>(qrcodeGeneratorKey);

export const selectQrId = createSelector(
   getState,
   (state: State) => state.qrId
)

export const selectQrData = createSelector(
   getState,
   (state: State) => state.qrdata
)