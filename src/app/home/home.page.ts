import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, of } from 'rxjs';
import { QRCodeErrorCorrectionLevel, QRCodeElementType } from 'angularx-qrcode';

import * as QrcodeGeneratorStore from '../store/qrcode.reducer';
import { createNewId } from '../store/qrcode.actions';
import { selectQrId } from '../store/qrcode.selectors';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrId$: Observable<string> = this.store.select(selectQrId);

  constructor(
    private store: Store<QrcodeGeneratorStore.State>
  ) {}

  updateQRCode() {
    this.store.dispatch(createNewId());
  }

}
