import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { LoginPage } from '../models/login/login.page'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  title = "example@example.com";
  
  constructor(private userService: UserService, private modalController: ModalController) {
    if(userService.user === null){
      this.presentModal(); 
    }
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: '../models/login/login.page.scss'
    });

    return await modal.present();
  }
}
