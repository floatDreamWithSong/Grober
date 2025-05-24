import { useEffect, useRef } from 'react'
import { Application } from 'pixi.js'
import { useGameStore } from './stores/gameStore'

function App() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const { isGameStarted, startGame } = useGameStore()

  useEffect(() => {
    if (!canvasRef.current) return

    // 创建PIXI应用
    const app = new Application()
    
    const initPixi = async () => {
      await app.init({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x1099bb,
        antialias: true,
      })

      // 将canvas添加到DOM
      canvasRef.current?.appendChild(app.canvas)

      // 处理窗口大小调整
      const handleResize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight)
      }
      
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        app.destroy()
      }
    }

    let cleanup: (() => void) | undefined

    initPixi().then((cleanupFn) => {
      cleanup = cleanupFn
    })

    return () => {
      cleanup?.()
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {!isGameStarted && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            zIndex: 100,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Grober Game</h1>
            <button
              onClick={startGame}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.5rem',
                backgroundColor: '#007acc',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#005a9e'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#007acc'
              }}
            >
              开始游戏
            </button>
          </div>
        </div>
      )}
      <div ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default App 