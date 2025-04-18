
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';
import { Note } from 'src/app/shared/sharedinterface';
import * as AOS from 'aos';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-all-note',
  templateUrl: './all-note.component.html',
  styleUrls: ['./all-note.component.scss'],
  animations: [
    trigger('noteAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1000px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    trigger('creativeDelete', [
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      state('deleted', style({ opacity: 0, transform: 'translateX(300px) rotate(30deg) scale(0)' })),
      transition('visible => deleted', [
        animate('800ms ease-in', keyframes([
          style({ transform: 'translateX(-5px) rotate(0)', offset: 0.1 }),
          style({ transform: 'translateX(5px) rotate(2deg)', offset: 0.2 }),
          style({ transform: 'translateX(-5px) rotate(-2deg)', offset: 0.3 }),
          style({ transform: 'translateX(0px) rotate(0deg)', offset: 0.4 }),
          style({ transform: 'translateX(100px) rotate(10deg) scale(0.8)', opacity: 0.5, offset: 0.7 }),
          style({ transform: 'translateX(300px) rotate(30deg) scale(0)', opacity: 0, offset: 1 })
        ]))
      ])
    ])
  ]
})


export class AllNoteComponent implements OnInit {
  deleteStates: { [key: number]: 'visible' | 'deleted' } = {};



  test() {
    console.log('Button clicked');
  }
  
   
  notes:Note[]= []
console: any;
  constructor(private allNotesService:HomeserviceService  ,private router:Router ){
  
  }
  ngOnInit() {
    // this.getalldata()
    AOS.init(); 
    AOS.refresh();
  }

  getalldata(){
    this.allNotesService.getall().subscribe((res:Note[])=>{
      this.notes = res
    },(err)=>{
      console.log(err);
      
    })
    

  }


  deletealldata(){
  
   let x =  confirm('are you sure you want to delete all data?')
    if(x  && this.notes.length > 0) {
      this.allNotesService.deleteall().subscribe((res:Note[])=>{
        console.log(res);
        
        this.notes = [];
        alert('data deleted')
      },(err) => {
        console.log(err);
        
      })
    }
  }

  deleteOneNote(note:Note){

    this.deleteStates[note.id] = 'deleted';

    setTimeout(() => {
      this.allNotesService.deletenote(note.id).subscribe(() => {
        this.notes = this.notes.filter(e => e.id !== note.id);
        delete this.deleteStates[note.id]; 
      });
    }, 800);
  }


  goToNote(note:Note): void {
    this.router.navigate(['/note', note.id]);
  }

  

}

