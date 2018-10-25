import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'toast-example',
  templateUrl: 'toast.html'
})
export class Toaster {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async dismissToast() {
    this.toastController.dismiss();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }

}