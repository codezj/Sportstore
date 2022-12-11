import { NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { ProductTableComponent } from "./productTable.component";
import { ProductEditorComponent } from "./productEditor.component";
import { OrderTableComponent } from "./orderTable.component";




let routing = RouterModule.forChild([
    {path: "auth", component: AuthComponent},
    {path: "main", component: AdminComponent,

    children: [
        {path: "products/:mode/:id", component: ProductEditorComponent},
        {path: "products/:mode", component: ProductEditorComponent},
        {path: "products", component: ProductTableComponent},
        {path: "orders", component: OrderTableComponent},
        {path: "**", redirectTo: "auth"},
        
    ]
},
    {path: "**", redirectTo: "auth"},
]);

@NgModule({
    imports: [CommonModule,FormsModule,routing],
    declarations: [AuthComponent, AdminComponent,
        ProductTableComponent,
        ProductEditorComponent,
        OrderTableComponent]

})

export class AdminModule {}