import { Component, OnInit, OnDestroy} from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
exercises: Exercise[];
exerciseSubscription: Subscription;
isLoading = true;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => {
      this.isLoading = false;
      this.exercises = exercises
    });
    this.trainingService.fetchExercises();
  }

  onStartTraining(form: NgForm){
    this.trainingService.startExercise(form.value.exercise)
  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe();
  }
}
