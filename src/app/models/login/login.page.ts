import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { RegistorPage } from '../registor/registor.page';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = {}

  constructor(private userService: UserService, private modalController: ModalController) { }

  ngOnInit() {
  }

  logForm(form) {
    this.userService.login(form.value.email, form.value.password);
    this.close();
  }

  async close(){
    await this.modalController.dismiss();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RegistorPage,
      cssClass: '../registor/registor.page.scss'
    });
    return await modal.present();
  }
}
