import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceParams, ResourceRequestBodyType, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Validar } from '../models/validar';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: ` ${environment.apiUrl}/` 
})
export class UsuariosResourceService extends Resource {
  
  @ResourceAction({
    method: ResourceRequestMethod.Post,
    requestBodyTypes: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Text
  })
  validar!: IResourceMethodObservable<Validar, string>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  getUsuario!: IResourceMethodObservable<string,Usuario>;
}
