import { create } from 'zustand'

interface GameState {
  isGameStarted: boolean
  score: number
  level: number
  lives: number
  isGameOver: boolean
  isPaused: boolean
}

interface GameActions {
  startGame: () => void
  endGame: () => void
  resetGame: () => void
  pauseGame: () => void
  resumeGame: () => void
  updateScore: (points: number) => void
  nextLevel: () => void
  loseLife: () => void
}

type GameStore = GameState & GameActions

const initialState: GameState = {
  isGameStarted: false,
  score: 0,
  level: 1,
  lives: 3,
  isGameOver: false,
  isPaused: false,
}

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,
  
  startGame: () => set({ 
    isGameStarted: true, 
    isGameOver: false,
    isPaused: false 
  }),
  
  endGame: () => set({ 
    isGameOver: true,
    isGameStarted: false 
  }),
  
  resetGame: () => set(initialState),
  
  pauseGame: () => set({ isPaused: true }),
  
  resumeGame: () => set({ isPaused: false }),
  
  updateScore: (points: number) => set((state) => ({ 
    score: state.score + points 
  })),
  
  nextLevel: () => set((state) => ({ 
    level: state.level + 1 
  })),
  
  loseLife: () => {
    const currentLives = get().lives - 1
    if (currentLives <= 0) {
      set({ lives: 0, isGameOver: true, isGameStarted: false })
    } else {
      set({ lives: currentLives })
    }
  },
})) 