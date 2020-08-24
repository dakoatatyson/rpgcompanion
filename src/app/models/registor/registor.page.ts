import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.page.html',
  styleUrls: ['./registor.page.scss'],
})
export class RegistorPage implements OnInit {
  user: any = {}

  constructor(private userService: UserService, private modalController: ModalController) { }

  ngOnInit() {
  }

  logForm(form) {
    let user = {
      email: form.value.email,
      password: form.value.password
    }

    this.userService.registor(user);
    this.close();
  }

  async close(){
    await this.modalController.dismiss();
  }
}
