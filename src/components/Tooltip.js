// Import the CSS file to apply the styles to the Tooltip component
import '../index.css';

// Tooltip component
export default function Tooltip({ position }) {
     // Dynamic CSS class based on the 'position' prop
    const tooltipClass = `tooltipContent tooltipContent-${position}`;
    return (
        <div className='tooltip'>
             {/* Text that the user hovers over */}
            Hover over me!
            {/* Tooltip content that will appear on hover, with dynamic positioning class */}
            <span className={tooltipClass}>Thanks for hovering! I'm a tooltip</span>
        </div>
    )
}