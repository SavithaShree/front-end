import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CategoryManagementModule } from './category-management/category-management.module';
import { DepartmentManagementModule } from './department-management/department-management.module';
import { UserManagementModule } from './user-management/user-management.module';
import { SharedModule } from './shared/shared.module';
import { InnerComponent } from './layout';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: InnerComponent,
        children: [
          {
            path: '',
            loadChildren: './category-management/category-management.module#CategoryManagementModule'
          },
          {
            path: '',
            loadChildren: './department-management/department-management.module#DepartmentManagementModule'
          },
          {
            path: '',
            loadChildren: './user-management/user-management.module#UserManagementModule'
          },
          {
            path: '**',
            component: PageNotFoundComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CategoryManagementModule,
    DepartmentManagementModule,
    UserManagementModule,
    SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
