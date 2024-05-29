import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, qrcodeGeneratorKey } from './qrcode.reducer';
import { state } from '@angular/animations';

export const getState = createFeatureSelector<State>(qrcodeGeneratorKey);

export const selectQrId = createSelector(
   getState,
   (state: State) => state.qrId
)

export const selectQrData = createSelector(
   getState,
   (state: State) => state.qrdata
)