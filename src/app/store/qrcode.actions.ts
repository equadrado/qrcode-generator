import { createAction, props } from '@ngrx/store';

const actionName = '[QR CODE GENERATOR]';

export const createNewId =  createAction(`${actionName} Create new ID`);

export const updateQRId =  createAction(`${actionName} Update QR ID`,
   props<{qrId: string}>()
);

export const updateQRdata =  createAction(`${actionName} Update QR data`,
   props<{qrdata: string}>()
);

export const setError =  createAction(`${actionName} Set error`,
   props<{error: any}>()
);
