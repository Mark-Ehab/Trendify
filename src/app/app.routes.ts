import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home,title:"Home"},
    {path:"services",loadComponent:()=>import("./components/services/services").then((component)=>component.Services),title:"Services"},
    {path:"shows",loadComponent:()=>import("./components/shows/shows").then((component)=>component.Shows),title:"Shows"},
    {path:"products",loadComponent:()=>import("./components/products/products").then((component)=>component.Products),title:"Products"},
    {path:"aboutus",loadComponent:()=>import("./components/aboutus/aboutus").then((component)=>component.Aboutus),title:"About Us"},
    {path:"contactus",loadComponent:()=>import("./components/contactus/contactus").then((component)=>component.Contactus),title:"Contact Us"},
    {path:"**",loadComponent:()=>import("./components/pagenotfound/pagenotfound").then((component)=>component.Pagenotfound),title:"404 - Page Not Found"}
];
