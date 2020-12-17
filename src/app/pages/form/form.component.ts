import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';
import { Person } from 'src/app/model/person';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 userProfile: FormGroup;

 persons: Person[]=[];

  myPerson: any = {
    id: "",
    nom: "",
    prenom: "",
    numero: "",
    rue: "",
    cp: "",
     
  }
  myCondition = false;


  constructor(private fb: FormBuilder,private service: StudentServiceService) {

    this.userProfile = this.fb.group({
      nom: [''],
      prenom: [''],
      adresse: this.fb.group({
        numero: [''],
        rue: [''],
        cp: ['']
      })
    });

   }

  ngOnInit(): void {

    this.service.getAll().subscribe(data =>{
      this.persons = data; 
      console.log(data);
    })
  }

  
  onSubmit(): void {
    /* console.log(this.userProfile.value); */
    let info = (this.userProfile.value);
    return info;
  }

  
    //Methode post

    addPersons(){
      this.service.postPerson(this.myPerson)
      .subscribe( (persons) =>{
        this.persons = [...this.persons]
        /* mise à jour */
        this.ngOnInit();
       this.emptyInput(); 
      })
    }

    //Methode Update

  editPerson(person: any){
    this.myPerson = person;
    this.myCondition = true;
  }
  //Methode Update ( qui provient du service)
  updateMyPerson(){
    this.service.updatePerson(this.myPerson)
    .subscribe( students =>{
      this.myCondition = false;
      this.emptyInput();
    })
  }


  //Methode onDelete

  onDelete(id:number){
    this.service.delete(id).subscribe(()=>{
      this.persons = this.persons.filter(person => person.id != id)
    })
  }
  
  //vider les inputs

   emptyInput(){
     this.myPerson = { 
      id: "",
      nom: "",
      prenom: "",
      numero: "",
      rue: "",
      cp: "",
     }
   }

}
