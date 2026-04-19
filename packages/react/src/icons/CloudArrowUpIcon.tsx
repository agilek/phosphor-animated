import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" strokeWidth="8" className="draw-line"/><polyline points="120 160 152 128 184 160" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M80,128a80,80,0,1,1,112,73.34" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" strokeWidth="12" className="draw-line"/><polyline points="120 160 152 128 184 160" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M80,128a80,80,0,1,1,112,73.34" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M112,208H72A56,56,0,1,1,85.92,97.74" strokeWidth="16" className="draw-line"/><polyline points="120 160 152 128 184 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M80,128a80,80,0,1,1,112,73.34" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M100,208H72A56,56,0,1,1,85.92,97.74" strokeWidth="24" className="draw-line"/><polyline points="124 160 156 128 188 160" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M80,128a80,80,0,1,1,156,25.05" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27,9.14a8,8,0,0,1-11.32,0L168,115.31V176a8,8,0,0,1-16,0V115.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,197.66,133.66Z" fill="currentColor"/></>,
  duotone: <><path d="M160,48A80,80,0,0,0,85.9,97.84l0-.1A56,56,0,1,0,72,208h88a80,80,0,0,0,0-160Z" opacity="0.2" fill="currentColor"/><path d="M112,208H72A56,56,0,1,1,85.92,97.74" strokeWidth="16" className="draw-line"/><polyline points="120 160 152 128 184 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M80,128a80,80,0,1,1,112,73.34" strokeWidth="16" className="draw-line"/></>,
};

export const CloudArrowUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
