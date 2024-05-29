import { Action, createReducer, on } from "@ngrx/store";
import * as QRCodeGeneratorActions from './qrcode.actions';

export const qrcodeGeneratorKey = 'qrcodeGeneratorFeature';

export interface State {
   qrdata: string;
   qrId: string;
   error: any
}

export const initialState: State = {
   qrdata: '',
   qrId: '',
   error: null
}

const qrcodeGeneratorReducer = createReducer(
   initialState,
   on(QRCodeGeneratorActions.updateQRId, (state, { qrId }) => ({
      ...state,
      qrId
   })),
   on(QRCodeGeneratorActions.updateQRdata, (state, { qrdata }) => ({
      ...state,
      qrdata
   }))
)

export const reducer = (state: State | undefined, action: Action) => qrcodeGeneratorReducer(state, action);