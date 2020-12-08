import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];
  myPerson: any = {
    id: "",
    nom: "",
    prenom: "",
    numero: "",
    rue: "",
    cp: "",
     
  }
  constructor(private service: StudentServiceService) { }

  ngOnInit(): void {

    this.service.getAll().subscribe(data =>{
      this.persons = data; 
      console.log(data);
    })

  }

  onDelete(id:number){
    this.service.delete(id).subscribe(()=>{
      this.persons = this.persons.filter(person => person.id != id)
    })
  }

  //Methode Update

  editPerson(person: any){
    this.myPerson = person;
  }

}
