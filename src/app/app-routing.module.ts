import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AcquireImageComponent } from './acquire-image/acquire-image.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
      { path: 'acquire-image', component: AcquireImageComponent },
      { path: 'image-editor', component: ImageEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
