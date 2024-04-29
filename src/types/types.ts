export interface GestureEventType{
    nativeEvent: {translationX: number;translationY: number};
}

export interface Coordinate {
    x: number;
    y: number;
}

export interface IFood{
    fruit: string;
    coords: Coordinate
}

export enum Direction {
    Up,
    Right,
    Down,
    Left
}