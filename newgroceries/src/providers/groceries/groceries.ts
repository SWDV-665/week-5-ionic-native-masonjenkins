import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the GroceriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesProvider {

  items = []

  constructor(public toastCtrl: ToastController) {
    console.log('Hello GroceriesProvider Provider');
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }

  addItem(item) {
    this.toastCtrl.create({
      message: 'Adding item "' + item.name + '"', 
      duration: 2500
    }).present()
    this.items.push(item)
  }

  editItem(item, index) {
    this.toastCtrl.create({
      message: 'Editing item from "' + this.items[index].name + '" Quantity ' + this.items[index].quantity + ' to "' + item.name + '" Quantity ' + item.quantity, 
      duration: 4000
    }).present()
    this.items[index] = item
  }

  getItems() {
    return this.items
  }


}
