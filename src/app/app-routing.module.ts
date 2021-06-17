
//En Angular todas son clase
//Utilizo el export porque necesito exportarla de aca

import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { ItemComponent } from "./pages/item/item.component";
import { AboutComponent } from "./pages/about/about.component";

const app_routes: Routes = [

    {path:'home',component:PortafolioComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},
    {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({

    imports: [
        RouterModule.forRoot(app_routes, {useHash:true})
    ],
    exports:[
         RouterModule
    ]
})


export class AppRoutingModule{}

//Tuve que exportar el RouterModule para que router-outlet funcione correctamente