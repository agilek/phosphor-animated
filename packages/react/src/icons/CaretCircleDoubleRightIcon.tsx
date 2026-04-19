import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polyline points="88 160 120 128 88 96" strokeWidth="8" className="draw-line"/><polyline points="144 160 176 128 144 96" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polyline points="88 160 120 128 88 96" strokeWidth="12" className="draw-line"/><polyline points="144 160 176 128 144 96" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="88 160 120 128 88 96" strokeWidth="16" className="draw-line"/><polyline points="144 160 176 128 144 96" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><polyline points="88 160 120 128 88 96" strokeWidth="24" className="draw-line"/><polyline points="144 160 176 128 144 96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-75.91,79.24-32,32a8,8,0,1,1-11.32-11.32L108.68,128,82.32,101.64A8,8,0,1,1,93.64,90.32l32,32A8,8,0,0,1,125.66,133.66Zm56,0-32,32a8,8,0,0,1-11.32-11.32L164.71,128l-26.36-26.36a8,8,0,1,1,11.32-11.32l32,32A8,8,0,0,1,181.68,133.66Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="88 160 120 128 88 96" strokeWidth="16" className="draw-line"/><polyline points="144 160 176 128 144 96" strokeWidth="16" className="draw-line"/></>,
};

export const CaretCircleDoubleRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
