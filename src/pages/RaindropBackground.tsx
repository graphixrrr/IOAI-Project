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
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = -10;
        this.speed = 1 + Math.random() * 2;
        this.length = 15 + Math.random() * 25;
        this.opacity = 0.1 + Math.random() * 0.4;
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
      }

      update() {
        this.y += this.speed;
        if (this.y > (canvas?.height || window.innerHeight)) {
          this.y = -10;
          this.x = Math.random() * (canvas?.width || window.innerWidth);
          this.opacity = 0.1 + Math.random() * 0.4;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    // Particle class for floating elements
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = 2 + Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.color = `hsl(${220 + Math.random() * 40}, 80%, 70%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas?.width || window.innerWidth) || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > (canvas?.height || window.innerHeight) || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create raindrops and particles
    const raindrops: Raindrop[] = [];
    const particles: Particle[] = [];
    
    for (let i = 0; i < 150; i++) {
      raindrops.push(new Raindrop());
    }
    
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with a subtle fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Update and draw raindrops
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