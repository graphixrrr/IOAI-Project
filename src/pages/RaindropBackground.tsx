import { useEffect, useRef } from 'react';

const RaindropBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Raindrop class
    class Raindrop {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = -10;
        this.speed = 2 + Math.random() * 3;
        this.length = 10 + Math.random() * 20;
        this.opacity = 0.1 + Math.random() * 0.3;
      }

      update() {
        this.y += this.speed;
        if (this.y > (canvas?.height || window.innerHeight)) {
          this.y = -10;
          this.x = Math.random() * (canvas?.width || window.innerWidth);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    // Create raindrops
    const raindrops: Raindrop[] = [];
    for (let i = 0; i < 100; i++) {
      raindrops.push(new Raindrop());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      raindrops.forEach(raindrop => {
        raindrop.update();
        raindrop.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
};

export default RaindropBackground; 