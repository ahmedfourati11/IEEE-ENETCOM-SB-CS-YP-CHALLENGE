import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyComponent } from './verify/verify.component';
import { PayComponent } from './pay/pay.component';
import { PremiumComponent } from './premium/premium.component';
import { JdydComponent } from './jdyd/jdyd.component';

export const routes: Routes = [
    {path:"test", component: TestComponent},
    {path:"sign-in", component: SignInComponent},
    {path:"", component: HomeComponent},
    {path:"sign-up", component: SignUpComponent},
    {path:"verify", component: VerifyComponent},
    {path:"pay", component: PayComponent},
    {path:"premium", component: PremiumComponent},
    {path:"jdyd", component: JdydComponent},

];
