'use client';

import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prediction, setPrediction] = useState<number | null>(null);

  useEffect(() => {
    clearCanvas();
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const sendImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL('image/png');

    try {
      const res = await fetch('https://friendly-octo-fishstick-production.up.railway.app/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imagen: dataURL }),
      });

      const data = await res.json();
      if (data.prediccion !== undefined) {
        setPrediction(data.prediccion);
      } else {
        alert('Error: ' + (data.error || 'respuesta inesperada'));
      }
    } catch (error) {
      alert('No se pudo conectar con el backend.');
      console.error(error);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let drawing = true;

    const draw = (x: number, y: number) => {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    };

    draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    const onMouseMove = (ev: MouseEvent) => {
      if (!drawing) return;
      draw(ev.offsetX, ev.offsetY);
    };

    const onMouseUp = () => {
      drawing = false;
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Reconocimiento de Dígitos</h1>
        <canvas
          ref={canvasRef}
          width={280}
          height={280}
          onMouseDown={startDrawing}
          className="border-4 border-gray-600 rounded-md bg-black mx-auto cursor-crosshair"
        />
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={clearCanvas}
            className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-4 py-2 rounded"
          >
            Limpiar
          </button>
          <button
            onClick={sendImage}
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-2 rounded"
          >
            Predecir
          </button>
        </div>
        {prediction !== null && (
          <div className="mt-6 text-2xl font-bold">
            Predicción: <span className="text-yellow-400">{prediction}</span>
          </div>
        )}
      </div>
    </main>
  );
}
