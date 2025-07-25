import React, { useEffect, useRef } from 'react';

const Animations: React.FC = () => {
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

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
      }

      update() {
        if (!canvas) return;
        
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) {
          this.vx = -this.vx;
        }
        if (this.y <= 0 || this.y >= canvas.height) {
          this.vy = -this.vy;
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-[100vh] bg-black text-white font-sans">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Club Animations
          </h1>
          <p className="text-xl text-gray-300">
            Interactive particle animation background
          </p>
        </div>
      </div>
    </div>
  );
};

export default Animations;