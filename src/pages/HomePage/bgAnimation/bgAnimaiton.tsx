import { useRef, useEffect } from 'react';
import './bgAnimation.css'

function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current || document.createElement('canvas');
        const context = canvas.getContext('2d') || new CanvasRenderingContext2D();
        let animationFrameId: number;

        // Set initial position
        let x = 0;

        const draw = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw animation
            context.fillStyle = 'blue';
            context.fillRect(x, 50, 50, 50);

            // Update position for next frame
            x += 2;

            // Loop the animation using requestAnimationFrame
            animationFrameId = requestAnimationFrame(draw);
        };

        draw(); // Start the animation loop

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas className="canvasContainer" ref={canvasRef} />;
}

export default BackgroundAnimation;
