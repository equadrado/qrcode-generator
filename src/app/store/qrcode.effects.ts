import { Injectable } from "@angular/core";
import { QrcodeService } from "../home/services/qrcode.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as QrcodeGeneratorStore from './qrcode.reducer';
import { Store } from "@ngrx/store";
import { createNewId, setError, updateQRId, updateQRdata } from "./qrcode.actions";
import { catchError, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { selectQrId } from "./qrcode.selectors";

@Injectable()
export class QRCodeEffects {
   qrId$ = this.store.select(selectQrId);

   constructor(
      private actions$: Actions,
      private store: Store<QrcodeGeneratorStore.State>,
      private qrcodeService: QrcodeService,
   ) {}

   createNewId$ = createEffect(() => 
      this.actions$.pipe(
         ofType(createNewId),
         mergeMap(() => 
            this.qrcodeService.generateQRCodeId().pipe(
               tap((response) => console.log(response)),
               switchMap((response: { name: string }) => [
                  updateQRId({qrId: response.name}),
               ]),
               catchError((err) => of(setError({ error: err })))
            )
         )
      )
   )

   updateQRId$ = createEffect(() => 
      this.actions$.pipe(
         ofType(updateQRId),
         withLatestFrom(this.qrId$),
         switchMap(([, qrId]) => [
            updateQRdata({ qrdata: this.qrcodeService.generateQRCodeData(qrId) })
         ])
      )
   )

}