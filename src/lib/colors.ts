import { Color } from "$types"

const { RED, GREEN, BLUE, YELLOW } = Color

export const colors = [
  YELLOW,
  GREEN,
  BLUE,
  RED
]

export const colorMap = {
  [RED]: {
    class: 'bg-red-600',
    hoverClass: 'bg-red-700',
    bgPrimary: 'bg-red-600',
    bgSecondary: 'bg-red-500',
    bgHover: 'bg-red-700',
    name: 'Punainen'
  },
  [GREEN]: {
    class: 'bg-green-600',
    hoverClass: 'bg-green-700',
    bgPrimary: 'bg-green-600',
    bgSecondary: 'bg-green-500',
    bgHover: 'bg-green-700',
    name: 'Vihreä'
  },
  [BLUE]: {
    class: 'bg-blue-600',
    hoverClass: 'bg-blue-700',
    bgPrimary: 'bg-blue-600',
    bgSecondary: 'bg-blue-500',
    bgHover: 'bg-blue-700',
    name: 'Sininen'
  },
  [YELLOW]: {
    class: 'bg-yellow-500',
    hoverClass: 'bg-yellow-600',
    bgPrimary: 'bg-yellow-600',
    bgSecondary: 'bg-yellow-500',
    bgHover: 'bg-yellow-700',
    name: 'Keltainen'
  }
}