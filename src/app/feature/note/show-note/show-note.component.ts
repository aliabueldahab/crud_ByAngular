import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';
import { Note } from 'src/app/shared/sharedinterface';


@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class  ShowNoteComponent implements OnInit {
  note:Note | null = null;
  constructor(private onenoteservice:HomeserviceService , private route:ActivatedRoute){}
  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'))
  this.onenoteservice.showOneNote(id).subscribe((res:Note) => {
    this.note = res
  }, (err) => {
    console.log(err);
    
  })
  }
}
