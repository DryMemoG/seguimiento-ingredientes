import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { TipoCantidadComponent } from './tipo-cantidad/tipo-cantidad.component';
import { ConsumosComponent } from './consumos/consumos.component';
import { RecetasComponent } from './recetas/recetas.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent},
    { path: "ingredientes", component: IngredientesComponent},
    { path: "tipo-cantidad", component: TipoCantidadComponent},
    { path: "consumos", component: ConsumosComponent}, 
    { path: "recetas", component: RecetasComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}