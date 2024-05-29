import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodePage } from './qr-code/qr-code.component';
import { StoreModule } from '@ngrx/store';
import * as QrcodeGeneratorStore from '../store/qrcode.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QRCodeEffects } from '../store/qrcode.effects';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    QRCodeModule,
    StoreModule.forFeature(QrcodeGeneratorStore.qrcodeGeneratorKey, QrcodeGeneratorStore.reducer),
    EffectsModule.forFeature([QRCodeEffects])
  ],
  declarations: [HomePage,QrCodePage]
})
export class HomePageModule {}
