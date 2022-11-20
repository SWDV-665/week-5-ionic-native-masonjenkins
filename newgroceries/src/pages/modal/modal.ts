import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { lifecycle } from '@angular/core/src/render3/instructions';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  numbers = [1,2,3,4,5,6,7,8,9,10]

  passedData = null


  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss()
  }

  saveItem(data) {
    this.view.dismiss(data)
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data')
    console.log(data)
  }

}
