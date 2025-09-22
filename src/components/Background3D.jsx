import React, { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for 3D effect
    class Particle {
      constructor() {
        this.reset();
        this.z = Math.random() * 1000; // Random initial z position
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = 1000;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = -Math.random() * 2 - 1;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(59, 130, 246, ', // blue
          'rgba(147, 51, 234, ', // purple
          'rgba(236, 72, 153, ', // pink
          'rgba(34, 197, 94, ', // green
          'rgba(251, 146, 60, ', // orange
          'rgba(14, 165, 233, ', // sky
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += dx * force * 0.001;
          this.vy += dy * force * 0.001;
        }

        // Reset particle when it goes too far
        if (this.z <= 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw(ctx) {
        const scale = 200 / this.z;
        const x2d = (this.x - width / 2) * scale + width / 2;
        const y2d = (this.y - height / 2) * scale + height / 2;
        const size2d = this.size * scale;

        if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
          const opacity = this.opacity * (1 - this.z / 1000);
          
          // Create gradient for 3D effect
          const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d);
          gradient.addColorStop(0, this.color + opacity + ')');
          gradient.addColorStop(1, this.color + '0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Geometric shapes for modern effect
    class GeometricShape {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 500 + 500;
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.01;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.01;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.01;
        this.size = Math.random() * 30 + 10;
        this.vz = -0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.type = Math.floor(Math.random() * 3); // 0: triangle, 1: square, 2: hexagon
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(59, 130, 246, ',
          'rgba(147, 51, 234, ',
          'rgba(236, 72, 153, ',
          'rgba(34, 197, 94, ',
          'rgba(251, 146, 60, ',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.z += this.vz;
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;

        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }

      draw(ctx) {
        const scale = 200 / this.z;
        const x2d = (this.x - width / 2) * scale + width / 2;
        const y2d = (this.y - height / 2) * scale + height / 2;
        const size2d = this.size * scale;

        if (x2d >= -size2d && x2d <= width + size2d && y2d >= -size2d && y2d <= height + size2d) {
          ctx.save();
          ctx.translate(x2d, y2d);
          ctx.rotate(this.rotationZ);
          
          const opacity = this.opacity * (1 - this.z / 1000);
          ctx.strokeStyle = this.color + opacity + ')';
          ctx.lineWidth = 2 * scale;
          
          ctx.beginPath();
          
          switch (this.type) {
            case 0: // Triangle
              ctx.moveTo(0, -size2d);
              ctx.lineTo(-size2d * 0.866, size2d * 0.5);
              ctx.lineTo(size2d * 0.866, size2d * 0.5);
              ctx.closePath();
              break;
            case 1: // Square
              ctx.rect(-size2d / 2, -size2d / 2, size2d, size2d);
              break;
            case 2: // Hexagon
              for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const x = size2d * Math.cos(angle);
                const y = size2d * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.closePath();
              break;
          }
          
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles and shapes
    const particleCount = 80;
    const shapeCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }
    
    for (let i = 0; i < shapeCount; i++) {
      particlesRef.current.push(new GeometricShape());
    }

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Create dynamic background gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      const time = timeRef.current;
      
      // Animated gradient colors
      const r1 = Math.sin(time * 0.5) * 20 + 10;
      const g1 = Math.sin(time * 0.7) * 20 + 15;
      const b1 = Math.sin(time * 0.3) * 30 + 25;
      
      const r2 = Math.sin(time * 0.4) * 15 + 5;
      const g2 = Math.sin(time * 0.6) * 15 + 8;
      const b2 = Math.sin(time * 0.8) * 20 + 15;

      gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0.1)`);
      gradient.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, 0.1)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw all particles and shapes
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particlesRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default Background3D;