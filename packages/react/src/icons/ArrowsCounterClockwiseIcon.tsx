import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 96 40 96 40 48" strokeWidth="8" className="draw-line"/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" strokeWidth="8" className="draw-line"/><polyline points="168 160 216 160 216 208" strokeWidth="8" className="draw-line"/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="88 96 40 96 40 48" strokeWidth="12" className="draw-line"/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" strokeWidth="12" className="draw-line"/><polyline points="168 160 216 160 216 208" strokeWidth="12" className="draw-line"/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="88 96 40 96 40 48" strokeWidth="16" className="draw-line"/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" strokeWidth="16" className="draw-line"/><polyline points="168 160 216 160 216 208" strokeWidth="16" className="draw-line"/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="88 96 40 96 40 48" strokeWidth="24" className="draw-line"/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" strokeWidth="24" className="draw-line"/><polyline points="168 160 216 160 216 208" strokeWidth="24" className="draw-line"/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M88,104H40a8,8,0,0,1-8-8V48a8,8,0,0,1,13.66-5.66L64,60.7a95.42,95.42,0,0,1,66-26.76h.53a95.36,95.36,0,0,1,67.07,27.33,8,8,0,0,1-11.18,11.44,79.52,79.52,0,0,0-55.89-22.77h-.45A79.48,79.48,0,0,0,75.35,72L93.66,90.34A8,8,0,0,1,88,104Zm128,48H168a8,8,0,0,0-5.66,13.66L180.65,184a79.48,79.48,0,0,1-54.72,22.09h-.45a79.52,79.52,0,0,1-55.89-22.77,8,8,0,1,0-11.18,11.44,95.36,95.36,0,0,0,67.07,27.33H126a95.42,95.42,0,0,0,66-26.76l18.36,18.36A8,8,0,0,0,224,208V160A8,8,0,0,0,216,152Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="88" opacity="0.2" fill="currentColor"/><polyline points="88 96 40 96 40 48" strokeWidth="16" className="draw-line"/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" strokeWidth="16" className="draw-line"/><polyline points="168 160 216 160 216 208" strokeWidth="16" className="draw-line"/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowsCounterClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
