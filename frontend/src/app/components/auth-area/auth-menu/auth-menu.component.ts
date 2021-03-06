import { UserModel } from './../../../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import store from 'src/app/redux/store';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})

export class AuthMenuComponent implements OnInit, OnDestroy {

    public user: UserModel;
    private unsubscribeMe: Unsubscribe;

    ngOnInit(): void {
        this.unsubscribeMe = store.subscribe(() => {
            this.user = store.getState().authState.user;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribeMe();
    }
}
