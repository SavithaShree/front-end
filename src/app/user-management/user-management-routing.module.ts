import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InnerComponent } from '../layout';

const routes: Routes = [
    {
        path: '',
        component: InnerComponent,
        children: [
            {
                path: 'user/create',
                component: UserComponent
            }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class UserManagementRoutingModule { }
