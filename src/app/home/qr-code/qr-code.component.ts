import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as QrcodeGeneratorStore from '../../store/qrcode.reducer';
import { selectQrData } from 'src/app/store/qrcode.selectors';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodePage {
  qrdata$: Observable<string> = this.store.select(selectQrData);

  constructor(
    private store: Store<QrcodeGeneratorStore.State>
  ) {}

}
