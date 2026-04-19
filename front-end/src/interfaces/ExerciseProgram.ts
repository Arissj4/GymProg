import ExerciseItem from "./Exercise"

interface Program {
    id: string;
    name: string;
    exercises: ExerciseItem[];
    details: string;
    save(): void;
    load(): void;
    clearList(): void;
    addExerice(exerciseObj: ExerciseItem): void;
    removeExercise(id: string): void;
    updateExercise(id: string, exerciseObj: ExerciseItem): void;
}

export default class ExerciseProgram implements Program{

    static instance: ExerciseProgram = new ExerciseProgram();

    private constructor (
        private _id: string = '',
        private _name: string = '',
        private _exercises: ExerciseItem[] = [],
        private _details: string = ''
    ) {}

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get details(): string {
        return this._details;
    }
    
    get exercises(): ExerciseItem[] {
        return this._exercises;
    }

    set details(details: string) {
        this._details = details;
    }

    save(): void {
        localStorage.setItem('exerciseprogram', JSON.stringify(this._exercises));
    }

    load(): void {
        const data: string | null = localStorage.getItem('exerciseprogram');
        if (typeof data === 'string') {
            const exercisesList: ExerciseItem[] = JSON.parse(data);
            exercisesList.forEach(exercise => {
                ExerciseProgram.instance.addExerice(exercise);
            });
        } else {
            return
        }
    }

    clearList(): void {
        this._exercises = [];
        localStorage.setItem('exerciseprogram', JSON.stringify(this._exercises));
    }

    addExerice(exerciseObj: ExerciseItem): void {
        this._exercises.push(exerciseObj);
        this.save();
    }
    
    removeExercise(id: string): void {
        this._exercises = this._exercises.filter(exercise => exercise.id !== id);
        this.save();
    }

    updateExercise(id: string, exerciseObj: ExerciseItem): void {
        this._exercises = this._exercises.map(exercise => exercise.id === id ? exerciseObj : exercise);
        this.save();
    }

}