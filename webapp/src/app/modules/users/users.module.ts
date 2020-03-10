import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { I18nModule } from 'src/app/i18n/i18n.module';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    I18nModule,
    ClarityModule,
    FormsModule
  ]
})
export class UsersModule { }
