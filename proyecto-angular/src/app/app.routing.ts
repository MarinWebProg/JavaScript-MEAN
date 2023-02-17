import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component'
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
  {path: '', component: AboutmeComponent},
  {path: 'Sobre-mi', component: AboutmeComponent},
  {path: 'Proyecto', component: ProjectsComponent},
  {path: 'Crear-proyecto', component: CreateProjectsComponent},
  {path: 'Contacto', component: ContactComponent},
  {path: '404', component:ErrorComponent },
];
