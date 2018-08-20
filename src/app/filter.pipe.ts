import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchTex:string ): any[] {
    console.log("filter")
    if(!items)return[];
    if (!searchTex) return items;
    

    searchTex =searchTex.toLowerCase();
    return items.filter(it =>{
      console.log(it.name+' '+it.shopname);

      return(it.name.toLowerCase().includes(searchTex))||(it.shopName
        .toLowerCase().includes(searchTex));
    });
      
    
  }

}
