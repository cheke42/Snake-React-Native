import { Coordinate } from "../types/types";

export const checkEatsFood = (
  head: Coordinate,
  food: Coordinate,
  area: number
): boolean => {
  const distanceBetweenFoodAndSnakeX: number = Math.abs(head.x - food.x);
  const distanceBetweenFoodAndSnakeY: number = Math.abs(head.y - food.y);
  return (
    distanceBetweenFoodAndSnakeX < area && distanceBetweenFoodAndSnakeY < area
  );
};

export const getRandomFruit = () => {
  const fruitEmojis = ["🍎", "🍊", "🍋", "🍇", "🍉", "🍓", "🍑", "🍍"];
    const randomIndex = Math.floor(Math.random() * fruitEmojis.length);
    return fruitEmojis[randomIndex];
}