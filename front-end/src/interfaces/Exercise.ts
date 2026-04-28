export interface Exercise {
    id?: string;
    name: string;
    day: number;
    sets: number;
    reps: number;
    rest: number;
    note: string;
}

/* export default class ExerciseItem implements Exercise {
    private _id: string;
    private _name: string;
    private _sets: number;
    private _reps: number;
    private _maxWeight: number;
    private _weight: number;
    private _minWeight: number;
    private _rest: number;
    private _details: string;

    constructor(
        id: string,
        name: string,
        sets: number,
        reps: number,
        maxWeight: number,
        weight: number,
        minWeight: number,
        rest: number,
        details: string
    ) {
        this._id = id;
        this._name = name;
        this._sets = sets;
        this._reps = reps;
        this._maxWeight = maxWeight;
        this._weight = weight;
        this._minWeight = minWeight;
        this._rest = rest;
        this._details = details;
    }

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

    get sets(): number {
        return this._sets;
    }

    set sets(sets: number) {
        this._sets = sets;
    }

    get reps(): number {
        return this._reps;
    }

    set reps(reps: number) {
        this._reps = reps;
    }

    get maxWeight(): number {
        return this._maxWeight;
    }

    set maxWeight(maxWeight: number) {
        this._maxWeight = maxWeight;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    get minWeight(): number {
        return this._minWeight;
    }

    set minWeight(minWeight: number) {
        this._minWeight = minWeight;
    }

    get rest(): number {
        return this._rest;
    }

    set rest(rest: number) {
        this._rest = rest;
    }

    get details(): string {
        return this._details;
    }

    set details(details: string) {
        this._details = details;
    }
} */