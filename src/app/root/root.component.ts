import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService, Person } from '../lista.service';

/**
 * @title Basic checkboxes
 */

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {
  title = 'lista-web-gui';
  id : string;
  public people: Person[] | undefined = undefined;
  constructor(
    private listaService: ListaService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      // this.people = this.listaService.get(params.id);
      this.listaService.get(params.id).subscribe((people: Person[])=>{
        this.people = people;
        this.id = params.id;
      });
    })
  }
  public put(checked: boolean, person: Person) {
    person.checked = checked;
    console.log(person);
    this.listaService.put(this.id, person);
  }
}