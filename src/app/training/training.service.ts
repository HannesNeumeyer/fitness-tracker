import { Exercise } from "./exercise.model";
import { Subject } from 'rxjs/Subject';
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();
  private availableExercises: Exercise[] = []
  private runningExercise: Exercise;

  constructor(private db: AngularFirestore) {}

  startExercise(selectedId: string){
    // for working with one document instead of a collection:
    // this.db.doc('availableExercises/' + selectedId).update({lastSelected: new Date()})
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({ ...this.runningExercise})
  }

  completeExercise(){
    this.addDataToDatabase({ ...this.runningExercise, date: new Date(), state: 'completed' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number){
    this.addDataToDatabase({ ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories:this.runningExercise.calories * (progress / 100), 
      date: new Date(),
      state: 'cancelled' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise(){
    // returns a copy of this object, like splice of an array
    return { ...this.runningExercise }
  }

  fetchExercises(){
    this.db.collection('availableExercises').snapshotChanges().map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          name: doc.payload.doc.data().name,
          duration: doc.payload.doc.data().duration,
          calories: doc.payload.doc.data().calories
        }
      })
    }).subscribe((exercises: Exercise[]) => {
      this.availableExercises = exercises;
      this.exercisesChanged.next([...this.availableExercises])
      // don't need to unsubscribe here because old subscription is overwritten (only shows up once per console.log)
    })
  }

  fetchCompletedExercises(){
    this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
      this.finishedExercisesChanged.next(exercises)
    })
  }

  private addDataToDatabase(exercise: Exercise){
    this.db.collection('finishedExercises').add(exercise);
  }
}